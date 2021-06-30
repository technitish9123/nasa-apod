import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [date, setDate] = useState(null);
  const [count, setCount] = useState(1);

  const api_key = "WqQwQpbjkZVVQOkt0FGi5BJN0HKqN3t2jDUYwWQr";
  //const date="2021-06-20";

  const getPhotoBydate = () => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api_key}`)
      .then((response) => {
        return response.json();
      })
      .then((photoData) => {
        setPhotoData(photoData);
      });
  };
  let getRandomPhoto = () => {
    fetch(`https://api.nasa.gov/planetary/apod?count=1&api_key=${api_key}`)
      .then((res) => {
        return res.json();
      })
      .then((photoData1) => {
        setPhotoData(photoData1);
      });
  };

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);
  if (!photoData) return <div />;

  //random count
  //   let min=1;
  //   let max=100;
  //   let rand =min + Math.floor(Math.random()*(max-min));

  //  styles
  const headerStyle = {
    textShadow: "1px 2px #282794",
    textAlign: "center",
  };
  const inputStyle = {
    fontSize: "20px",
    textAlign: "center",
  };

  return (
    <>
      <h1 style={headerStyle}> NASA's Astronomy Picture of the Day</h1>
      <div style={inputStyle}>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />{" "}
        <br />
        <button onClick={getPhotoBydate} value="click">
          {" "}
          Search By Date
        </button>{" "}
        <br />
      </div>

      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h3>
            <u>{photoData.title}</u>
          </h3>
          <p> {photoData.date}</p>
          <p> {photoData.explanation}</p>
        </div>
      </div>
    </>
  );
}
