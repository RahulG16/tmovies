import React, { useState, useEffect } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

import SimpleCard from "../../UI/Card/SimpleCard";
import ButtonModal from "../../UI/ButtonModal/ButtonModal";
import Button from "../../UI/SimpleButton/Button";
import apiConfig from "../../../Api/APIConfig";

const axios = require("axios");

function Banner() {
  async function getUser() {
    try {
      const response = await axios.get(
        `${apiConfig.baseUrl}trending/all/day?api_key=${apiConfig.apiKey}&append_to_response=videos`
      );

      let resultArr = response.data.results;
        resultArr.length = 8
      setTrendingMovies(resultArr);
    } catch (error) {
      console.error(error);
    }
  }

  let [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="banner-layout">
      {trendingMovies.map((movie, i) => {
        return (
          <div className="banner-content" key={i}>
            <img
              className="poster-img"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
            />
            <div class="shade"></div>

            <div className="banner">
              <div className="banner-text">
                <h1>{movie.original_title || movie.name}</h1>
                <p>{movie.overview}</p>

                <div className="action-btns">
                  <Link to={`/${movie.media_type}/${movie.id}`}>
                    {
                      <Button
                        BtnName={"Watch Now"}
                        data_id={movie.id}
                        data_type={movie.media_type}
                      />
                    }
                  </Link>

                  <ButtonModal
                    BtnName={"Watch Trailer"}
                    data_id={movie.id}
                    data_type={movie.media_type}
                  />
                </div>
              </div>
              <SimpleCard posterImg={movie.poster_path} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Banner;
