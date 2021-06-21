import React from "react";
import EditMovieListItem from "./EditMovieListItem";
import DeleteMovieListItem from "./DeleteMovieListItem";

const EditMovieList = ({ offClick }: { offClick: () => void }) => {
  return (
    <ul className="movie-card-dropdown">
      <div onClick={offClick}>&times;</div>
      <li>
        <EditMovieListItem />
      </li>
      <li>
        <DeleteMovieListItem />
      </li>
    </ul>
  );
};

export default EditMovieList;
