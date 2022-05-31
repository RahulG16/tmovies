import React from "react";
import './TrailerSection.css'

function TrailerSection({ trailersArr }) {
  let trailers = trailersArr.videos.results;

  return (
    <div className="trailer-container">
      {trailers !== undefined
        ? trailers.map((trailer, i) => {
            return (
              <div className="yt-video" key={i}>
                <h2>{trailer.name}</h2>
                <iframe
                  className="responsive-iframe"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default TrailerSection;
