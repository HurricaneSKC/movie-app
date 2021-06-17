import React, { useCallback, useState } from "react";
import EditMovieIcon from "./EditMovieIcon";
import EditMovieList from "./EditMovieList";

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
}) => {
  const [showEditMovieList, setShowEditMovieList] = useState(false);

  const editMovieClick = useCallback(() => {
    showEditMovieList
      ? setShowEditMovieList(false)
      : setShowEditMovieList(true);
  }, [showEditMovieList, setShowEditMovieList]);

  return (
    <li data-genre={genres} data-release-date={release_date}>
      <EditMovieIcon onClick={editMovieClick} />
      {showEditMovieList && <EditMovieList offClick={editMovieClick} />}
      <img src={poster_path} alt={title} />
      <h3>{title}</h3>
      <p>{genres}</p>
    </li>
  );
};

export default MovieCard;
