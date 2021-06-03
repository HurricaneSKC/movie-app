import React from "react";
import MovieCard from "./MovieCard";
import movies from "../../../mock-data";

const MovieList = () => (
  <ul className="movie-list">
    {movies.data.map(({ id, title, release_date, poster_path, genres }) => (
      <MovieCard
        key={id}
        title={title}
        release_date={release_date}
        poster_path={poster_path}
        genres={genres}
      />
    ))}
  </ul>
);

export default MovieList;
