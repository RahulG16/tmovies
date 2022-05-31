import React, { useState, useEffect } from "react";
import apiConfig from "../../Api/APIConfig";
import NavBar from "../../Components/Layout/NavBar/NavBar";
import Header from "../Home/Header";
import SearchedMovies from "../Home/SearchedMovies";

const axios = require("axios");

function Movies() {
  let [searchTerm, setSearchTerm] = useState("batman");

  let [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    getMovies(searchTerm) 
  }, [searchTerm])

  async function getMovies(searchKeyword) {
    try {
      let response = await axios.get(
        `${apiConfig.searchMovies(searchKeyword)}`
      );

      setMoviesArr(response.data.results);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <NavBar />
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} title='Movies'/>
      <SearchedMovies moviesArr={moviesArr} type='movie'/>
    </div>
  );
}

export default Movies;
