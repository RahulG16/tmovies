import React, { useState, useEffect } from "react";
import "./Home.css";
import apiConfig from "../../Api/APIConfig";
import NavBar from "../../Components/Layout/NavBar/NavBar";
import Banner from "../../Components/Layout/Main/Banner";
import MoviesList from "../../Components/Layout/Main/MoviesList.jsx";

const axios = require("axios");

function Home() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [upComing, setUpComing] = useState([]);
  let [topRatedMovies, setTopRatedMovies] = useState([]);
  let [popularTv, setpopularTv] = useState([]);
  let [topTv, setTopTv] = useState([]);

  async function getMovies() {
    try {
      const trendingMoviesRes = await axios.get(`${apiConfig.popularMovies}`);
      setTrendingMovies(trendingMoviesRes.data.results);

      setTimeout(async () => {
        const upComingRes = await axios.get(`${apiConfig.upComingMovies}`);
        setUpComing(upComingRes.data.results);
      }, 1000)

      setTimeout(async() => {
        const topRatedMoviesRes = await axios.get(apiConfig.topRatedMovies);
        setTopRatedMovies(topRatedMoviesRes.data.results);
      }, 2000)


      setTimeout(async() => {
        const popularTvRes = await axios.get(apiConfig.popularTv);
        setpopularTv(popularTvRes.data.results);
      }, 3000)

      setTimeout(async () => {
        const topTvRes = await axios.get(apiConfig.topRatedTv);
        setTopTv(topTvRes.data.results);
      }, 3500);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <NavBar />
      <Banner />
      <MoviesList
        contentArr={trendingMovies}
        title={"Popular Movies"}
        contentType={"movie"}
      />
      <MoviesList
        contentArr={topRatedMovies}
        title={"Top Rated Movies"}
        contentType={"movie"}
      />
      <MoviesList
        contentArr={upComing}
        title={"Upcoming Movies In Theatres"}
        contentType={"movie"}
      />
      <MoviesList
        contentArr={popularTv}
        title={"Popular TV Series"}
        contentType={"tv"}
      />
      <MoviesList
        contentArr={topTv}
        title={"Top TV Series"}
        contentType={"tv"}
      />
    </div>
  );
}

export default Home;
