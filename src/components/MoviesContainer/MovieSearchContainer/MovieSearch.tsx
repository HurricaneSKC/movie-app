import React from "react";
import Button from "../../Buttons/Button";
import SearchInput from "./SearchInput";

const movieSearchObject = {
  label: "find your movie",
  placeholder: "What do you want to watch",
  filterOnChange: () => console.log("changed"),
  searchMovie: () => console.log("Search DB"),
};

const MovieSearch = () => (
  <div className="search-container">
    <SearchInput
      label={movieSearchObject.label}
      placeholder={movieSearchObject.placeholder}
      filterOnChange={movieSearchObject.filterOnChange}
    />
    <Button onClick={movieSearchObject.searchMovie}>
      <p>Search</p>
    </Button>
  </div>
);

export default MovieSearch;
