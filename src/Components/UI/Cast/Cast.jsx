import React from "react";
import "./Cast.css";
import apiConfig from "../../../Api/APIConfig";
import Placeholder from '../../../Assets/placeholder.png'

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
                src={person.profile_path ? `${apiConfig.originalImage(person.profile_path)}` : Placeholder}
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
