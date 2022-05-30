import React, { useState, useEffect } from "react";
import "./Home.css";
import apiConfig from "../../Api/APIConfig";
import NavBar from "../../Components/Layout/NavBar/NavBar";
import Banner from "../../Components/Layout/Main/Banner";
import MoviesList from "../../Components/Layout/Main/MoviesList.jsx";

const axios = require("axios");

function Home() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [topRatedMovies, setTopRatedMovies] = useState([]);
  let [popularTv, setpopularTv] = useState([]);
  let [topTv, setTopTv] = useState([]);

  async function getMovies() {
    try {
      const trendingMoviesRes = await axios.get(
        `${apiConfig.baseUrl}trending/all/day?api_key=${apiConfig.apiKey}&append_to_response=videos`
      );

      setTrendingMovies(trendingMoviesRes.data.results);

      const topRatedMoviesRes = await axios.get(apiConfig.topRatedMovies);

      setTopRatedMovies(topRatedMoviesRes.data.results);

      const popularTvRes = await axios.get(apiConfig.popularTv);

      setpopularTv(popularTvRes.data.results);

      const topTvRes = await axios.get(apiConfig.topRatedTv);

      setTopTv(topTvRes.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div>
      <NavBar />
      <Banner />
      <MoviesList content={trendingMovies}/>
    </div>
  );
}

export default Home;
