import React from "react";
import movies from "../../../mock-data";
import GenreListItem from "./GenreListItem";

let genreArray: string[] = [];
//TODO: Remove when integrated with real API
movies.data.forEach((element) => {
  genreArray = [...genreArray, ...element.genres];
});
const newGenreArray = [...new Set(genreArray)];

const GenreList = () => (
  <ul className="genre-list">
    {newGenreArray.map((genre: string) => (
      <GenreListItem key={genre} genre={genre} />
    ))}
  </ul>
);

export default GenreList;
