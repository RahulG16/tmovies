import React, { useContext } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Placeholder from "../../../Assets/placeholder.png";
import apiConfig from "../../../Api/APIConfig";
import { FilmContext } from "../../../Store/FilmInfoProvider";

function Card({ movieInfo, type }) {
  let filmCtx = useContext(FilmContext);

  function clickHandler(e) {
    let id = e.target.dataset.id;

    filmCtx.setID(id);
    filmCtx.setType(type);
  }

  return (
    <div className="card">
      <Link to={`/${type}/${movieInfo.id}`} className="card-link">
        <img
          src={
            movieInfo.poster_path !== null
              ? `${apiConfig.originalImage(movieInfo.poster_path)}`
              : Placeholder
          }
          alt={`${movieInfo.title || movieInfo.name} poster-img`}
          className="card-img"
          data-id={movieInfo.id}
          onClick={(e) => clickHandler(e)}
        />
        <p
          className="card-name"
          data-id={movieInfo.id}
          onClick={(e) => clickHandler(e)}
        >
          {movieInfo.title || movieInfo.name}
        </p>
      </Link>
    </div>
  );
}

export default Card;
