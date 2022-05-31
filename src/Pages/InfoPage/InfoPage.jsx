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
    getFilmInfo(id, type);
    getSimilarMovies(id, type);
  }, [id, type]);

  async function getFilmInfo(id, type) {
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
      <MoviesList contentArr={similarMovies} title={'Similar Movies'} contentType={type}/>
    </div>
  );
}

export default InfoPage;
