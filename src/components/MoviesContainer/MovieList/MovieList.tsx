import React from "react";
import MovieCard from "./MovieCard";
import movies from "../../../mock-data";

const MovieList = () => (
  <ul className="movie-list">
    {movies.data.map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        release_date={movie.release_date}
        poster_path={movie.poster_path}
        genres={movie.genres}
      />
    ))}
  </ul>
);

export default MovieList;
