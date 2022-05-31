import React from "react";
import "./SearchedMovies.css";
import Card from "../../Components/UI/Card/Card";

function SearchedMovies({ moviesArr, type }) {
  return (
    <div className="searched-movies__container">
      {moviesArr.map((movie, i) => {
        return <Card movieInfo={movie} type={type} key={i} />;
      })}
    </div>
  );
}

export default SearchedMovies;
