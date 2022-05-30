import { createContext, useState } from "react";

export const FilmContext = createContext();

export function FilmInfoProvider(props) {
  let [ID, setID] = useState(23);
  let [type, setType] = useState("movie");

  let filmInfo = {
    id: ID,
    type: type,
    setID: setID,
    setType: setType,
  };

  return (
    <FilmContext.Provider value={filmInfo}>
      {props.children}
    </FilmContext.Provider>
  );
}

export default FilmInfoProvider;
