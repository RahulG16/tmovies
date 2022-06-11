import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-contents">
        <Link to={"/"} className="logo">
          <h2>T Movies</h2>
        </Link>

        <ul className="navbar-sections">
          <Link to={"/"} className="link">
            <li>Home</li>
          </Link>
          <Link to={"/movies"} className="link">
            <li>Movies</li>
          </Link>
          <Link to={"/tv-series"} className="link">
            <li>Tv Series</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
