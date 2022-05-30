import React from "react";
import './TrailerSection.css'

function TrailerSection({ trailersArr }) {
  let trailers = trailersArr.videos.results;

  console.log(trailers);

  return (
    <div className="trailer-container">
      {trailers !== undefined
        ? trailers.map((trailer) => {
            return (
              <div className="yt-video">
                <h2>{trailer.name}</h2>
                <iframe
                  className="responsive-iframe"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="encrypted-media; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default TrailerSection;
