const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "c79a086262eb5908b8dc881666c15e82",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
  tvInfo: (tv_id) =>
    `https://api.themoviedb.org/3/tv/${tv_id}?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&append_to_response=videos,credits`,
  movieInfo: (movie_id) =>
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&append_to_response=videos,credits`,
  topRatedMovies:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&page=1&append_to_response=videos,credits",
  popularTv:
    "https://api.themoviedb.org/3/tv/popular?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&page=1&append_to_response=videos,credits",
  topRatedTv:
    "https://api.themoviedb.org/3/tv/top_rated?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&page=1&append_to_response=videos,credits",
  trendingMovies:
    "https://api.themoviedb.org/3/trending/all/week?api_key=c79a086262eb5908b8dc881666c15e82&append_to_response=videos,credits",
  similarMovies: (movie_id) =>
    `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&page=1`,
  similarTV: (TV_id) =>
    `https://api.themoviedb.org/3/tv/${TV_id}/similar?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&page=1`,
  searchMovies: (keyword) =>
    `https://api.themoviedb.org/3/search/movie?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&query=${keyword}&page=1&include_adult=false`,
  searchTV: (keyword) =>
    `https://api.themoviedb.org/3/search/tv?api_key=c79a086262eb5908b8dc881666c15e82&language=en-US&page=1&query=${keyword}&include_adult=false`,
};

export default apiConfig;