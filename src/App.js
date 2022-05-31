import "./App.css";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import {FilmContext} from './Store/FilmInfoProvider'

import InfoPage from "./Pages/InfoPage/InfoPage.jsx";
import Home from './Pages/Home/Home.jsx'
import Movies from "./Pages/Movies/Movies";
import TvSeries from './Pages/Tv Series/TvSeries.jsx'

// c79a086262eb5908b8dc881666c15e82;

function App() {

  let filmCtx = useContext(FilmContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/movie/:id"
          element={<InfoPage id={filmCtx.id} type={filmCtx.type} />}
        />
        <Route
          path="/tv/:id"
          element={<InfoPage id={filmCtx.id} type={filmCtx.type} />}
        />
        <Route path="/movies" exact element={<Movies />} />
        <Route path="/tv-series" exact element={<TvSeries/>}/>
      </Routes>
    </div>
  );
}

export default App;
