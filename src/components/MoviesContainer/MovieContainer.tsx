import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import GenericList from "./GenreList/GenreList";
import MovieList from "./MovieList/MovieList";
import MovieSearch from "./MovieSearchContainer/MovieSearch";

const sortDropdown = {
  sortName: "movie-sort",
  sortLabel: "Sort by",
  sortFilters: ["release date", "genre", "rating"],
  selectClass: "",
  labelClass: "",
};

const MovieContainer = () => (
  <main>
    <MovieSearch />
    <div className="filter-bar">
      <GenericList />
      <Dropdown
        sortLabel={sortDropdown.sortLabel}
        dropdownName={sortDropdown.sortName}
        optionsList={sortDropdown.sortFilters}
        selectClass={sortDropdown.selectClass}
        labelClass={sortDropdown.labelClass}
      />
    </div>
    <MovieList />
  </main>
);

export default MovieContainer;
