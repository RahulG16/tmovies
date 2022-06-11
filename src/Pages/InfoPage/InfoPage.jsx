import React, { useEffect, useState } from "react";
import "./InfoPage.css";
import NavBar from "../../Components/Layout/NavBar/NavBar";
import apiConfig from "../../Api/APIConfig";
import MovieInfo from "../../Components/Layout/Main/MovieInfo";
import TrailerSection from "./TrailerSection";
import MoviesList from "../../Components/Layout/Main/MoviesList";

const axios = require("axios");

function InfoPage({ id, type }) {
  let [movie, setMovie] = useState([]);
  let [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (id || type !== undefined) {
      localStorage.setItem(
        "content-info",
        JSON.stringify({ id: id, type: type })
      );

      getFilmInfo(id, type);
      getSimilarMovies(id, type);
    } else {
      let filmInfo = JSON.parse(localStorage.getItem("content-info"));

      let id = filmInfo.id;
      let type = filmInfo.type;

      getFilmInfo(id, type);

      setTimeout(() => {
        getSimilarMovies(id, type);
      }, 2000);
    }
  }, [id, type]);

  async function getFilmInfo(id, type) {
    console.log("type", type);
    try {
      let response;

      if (type === "movie") {
        response = await axios.get(`${apiConfig.movieInfo(id)}`);
      } else if (type === "tv") {
        response = await axios.get(`${apiConfig.tvInfo(id)}`);
      }

      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getSimilarMovies(id, type) {
    try {
      let response;

      if (type === "movie") {
        response = await axios.get(`${apiConfig.similarMovies(id)}`);
      } else if (type === "tv") {
        response = await axios.get(`${apiConfig.similarTV(id)}`);
      }

      setSimilarMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="info-page">
      <NavBar />

      <div className="info-page__banner">
        <img
          src={apiConfig.originalImage(movie.backdrop_path)}
          className="info-page__img"
          alt="poster-img"
        />
        <div className="dark-shade"></div>
      </div>

      <MovieInfo movie={movie} />

      {movie.videos !== undefined ? <TrailerSection trailersArr={movie} /> : ""}

      <MoviesList
        contentArr={similarMovies}
        title={type === "movie" ? "Similar Movies" : "Similar Tv Series"}
        contentType={type !== undefined ? type : 'tv'}
      />

    </div>
  );
}

export default InfoPage;
