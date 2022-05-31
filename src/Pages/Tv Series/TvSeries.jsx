import axios from 'axios';
import React, {useState, useEffect} from 'react'
import apiConfig from '../../Api/APIConfig'
import NavBar from '../../Components/Layout/NavBar/NavBar'
import Header from "../Home/Header";
import SearchedMovies from '../Home/SearchedMovies';

function TvSeries() {

  let [tvArr, setTVArr] = useState([]);
  let [searchTerm, setSearchTerm] = useState('Dexter')

  useEffect(() => {
    getSeries(searchTerm);
  }, [searchTerm]);

  async function getSeries(searchKeyword) {
    try {
      let response = await axios.get(`${apiConfig.searchTV(searchKeyword)}`);

      setTVArr(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(tvArr);

  return (
    <div>
      <NavBar />
      <Header
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        title="TV Series"
      />
      <SearchedMovies moviesArr={tvArr} type='tv'/>
    </div>
  );
}

export default TvSeries