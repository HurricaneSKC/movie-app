import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import GenericList from "./GenreList/GenreList";
import MovieList from "./MovieList/MovieList";
import MovieSearch from "./MovieSearchContainer/MovieSearch";

const sortDropdown = {
  dropdownName: "movie-sort",
  sortLabel: "Sort by",
  optionsList: ["release date", "genre", "rating"],
  labelClass: "",
  selectClass: "",
};

const MovieContainer = () => {
  return (
    <main>
      <MovieSearch />
      <div className="filter-bar">
        <GenericList />
        <Dropdown {...sortDropdown} />
      </div>
      <MovieList />
    </main>
  );
};
export default MovieContainer;
