import React from "react";
import GenericList from "./GenreList/GenreList";
import MovieList from "./MovieList/MovieList";
import MovieSearch from "./MovieSearchContainer/MovieSearch";

const MovieContainer: any = () => (
  <main>
    <MovieSearch />
    <GenericList />
    <MovieList />
  </main>
);

export default MovieContainer;
