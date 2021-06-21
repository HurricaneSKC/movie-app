import React from "react";
import { useState } from "react";

const FormBody = () => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [movieURL, setMovieURL] = useState("");
  const [genre, setGenre] = useState("");
  const [overview, setOverview] = useState("");
  const [runtime, setRuntime] = useState("");

  return (
    <form className="form-body">
      <label htmlFor="title">title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        type="text"
        name="title"
        id="title"
      />
      <label htmlFor="release-date">release date</label>
      <input
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        placeholder="Release Date"
        type="date"
        name="release-date"
        id="release-date"
      />
      <label htmlFor="movie-url">movie URL</label>
      <input
        value={movieURL}
        onChange={(e) => setMovieURL(e.target.value)}
        placeholder="Movie URL here"
        type="url"
        name="movie-url"
        id="movie-url"
      />
      <label htmlFor="genre">Genre</label>
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Select Genre"
        name="genre"
        id="genre"
      >
        {/* get genre data */}
      </select>
      <label htmlFor="overview">Overview</label>
      <input
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
        placeholder="Overview here"
        type="text"
        name="overview"
        id="overview"
      />
      <label htmlFor="runtime">Runtime</label>
      <input
        value={runtime}
        onChange={(e) => setRuntime(e.target.value)}
        placeholder="Runtime here"
        type="number"
        name="runtime"
        id="runtime"
      />
      <button className="btn-secondary" type="reset">
        RESET
      </button>
      <button className="btn-primary" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default FormBody;
