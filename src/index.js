import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import FilmInfoProvider from "./Store/FilmInfoProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <HashRouter>
      <FilmInfoProvider>
        <App />
      </FilmInfoProvider>
    </HashRouter>
  </React.StrictMode>
);
