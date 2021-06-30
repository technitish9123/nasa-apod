import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-links">
                <Link to="/" exact> Home</Link>
                <Link to="nasaphoto" exact> APOD</Link>
                <Link to="nasaapi" exact> NASA-API</Link>
                <Link to="about" exact> About</Link>
            </ul>
        </div> 
    )
}