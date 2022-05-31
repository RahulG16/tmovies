import React from "react";
import "./Cast.css";
import apiConfig from "../../../Api/APIConfig";

function Cast({ cast }) {
  
  cast.length = 5;

  return (
    <div className="cast-block">
      <h2>Casts</h2>
      <div className="profiles-container">
        {cast.map((person, i) => {
          return (
            <div className="profile" key={i}>
              <img
                src={`${apiConfig.originalImage(person.profile_path)}`}
                alt=""
              />
              <p>{person.original_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cast;
