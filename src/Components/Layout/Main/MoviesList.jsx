import React, { useContext } from "react";
import "./MoviesList.css";
import apiConfig from "../../../Api/APIConfig";
import { Link } from "react-router-dom";
import { FilmContext } from "../../../Store/FilmInfoProvider";

function MoviesList({ contentArr, title, contentType }) {
  const filmCtx = useContext(FilmContext);

  function clickHandler(e) {

    let id = e.target.dataset.id;
    let type = e.target.dataset.type;

    filmCtx.setID(id);
    filmCtx.setType(type);
  }

  return (
    <div className="content-container">
      <h1 className="category-title">{title}</h1>
      <div className="content-slider">
        {contentArr.map((content, i) => {
          return (
            <Link
              to={`/${content.media_type || contentType}/${content.id}`}
              className={"content-link"}
              key={i}
            >
              <div className="content">
                <img
                  src={apiConfig.originalImage(content.poster_path)}
                  alt=""
                  className="content-poster"
                  data-id={content.id}
                  data-type={content.media_type || contentType}
                  onClick={(e) => clickHandler(e)}
                />
                <h3
                  className="content-name"
                  data-id={content.id}
                  data-type={content.media_type || contentType}
                  onClick={(e) => clickHandler(e)}
                >
                  {content.name || content.original_name || content.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesList;
