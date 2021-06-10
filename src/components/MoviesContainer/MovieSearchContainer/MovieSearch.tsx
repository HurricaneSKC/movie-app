import React from "react";
import Button from "../../Buttons/Button";
import SearchInput from "./SearchInput";

const filterOnChange = () => console.log("changed");
const searchMovie = () => console.log("Search DB");

const MovieSearch = () => (
  <div className="search-container">
    <SearchInput
      label="find your movie"
      placeholder="What do you want to watch?"
      filterOnChange={filterOnChange}
    />
    <Button onClick={searchMovie}>
      <p>Search</p>
    </Button>
  </div>
);

export default MovieSearch;
