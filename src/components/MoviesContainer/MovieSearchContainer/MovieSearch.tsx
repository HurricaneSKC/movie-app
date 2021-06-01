import React from "react";
import Button from "../../Buttons/Button";
import SearchInput from "./SearchInput";

const MovieSearch = () => (
  <div className="search-container">
    <SearchInput
      label="find your movie"
      placeholder="What do you want to watch?"
      filterOnChange={() => console.log("changed")}
    />
    <Button onClick={() => console.log("Search DB")}>
      <p>Search</p>
    </Button>
  </div>
);

export default MovieSearch;
