import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>
        <h1>NASA API</h1>

        <h3>APOD</h3>
        <p>
          One of the most popular websites at NASA is the Astronomy Picture of
          the Day. In fact, this website is one of the most popular websites
          across all federal agencies. It has the popular appeal of a Justin
          Bieber video. This endpoint structures the APOD imagery and associated
          metadata so that it can be repurposed for other applications. In
          addition, if the concept_tags parameter is set to True, then keywords
          derived from the image explanation are returned. These keywords could
          be used as auto-generated hashtags for twitter or instagram feeds; but
          generally help with discoverability of relevant imagery.
        </p>
        <div>
          <h1>HTTP Request</h1>
          <h3>GET https://api.nasa.gov/planetary/apod</h3>

          <h4>Query Parameters</h4>
          <p>date:</p>
          <p> start_date :</p>
          <p> end_date:</p>
          <p> count:</p>
          <p>api_key:</p>
        </div>
      </div>
    </>
  );
}
