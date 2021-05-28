import React from "react";

const MovieCard = ({
  title,
  release_date,
  poster_path,
  genres,
}: {
  title: string;
  release_date: string;
  poster_path: string;
  genres: string[];
}) => (
  <li data-genre={genres} data-release-date={release_date}>
    <img src={poster_path} alt={title} />
    <h3>{title}</h3>
    <p>{genres}</p>
  </li>
);

export default MovieCard;
