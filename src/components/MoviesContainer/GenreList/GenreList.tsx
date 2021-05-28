import React from "react";
import movies from "../../../mock-data";
import GenreListItem from "./GenreListItem";

let genreArray: string[] = [];
movies.data.forEach((element) => {
  genreArray = [...genreArray, ...element.genres];
});
const newGenreArray = [...new Set(genreArray)];

const GenreList = () => (
  <ul className="genre-list">
    {newGenreArray.map((genre: string, index) => (
      <GenreListItem key={index} genre={genre} />
    ))}
  </ul>
);

export default GenreList;
