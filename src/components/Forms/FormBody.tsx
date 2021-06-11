import React, { useRef } from "react";
import useForm from "./useForm";

const FormBody = () => {
  const [values, handleChange] = useForm({
    title: "",
    releaseDate: "",
    movieURL: "",
    genre: "",
    overview: "",
    runtime: "",
  });

  const createMovie = (e: any) => {
    e.preventDefault();
    let movie = {
      title: "",
      releaseDate: "",
      movieURL: "",
      genre: "",
      overview: "",
      runtime: "",
    };

    if (titleRef && titleRef.current) {
      movie.title = titleRef.current.value;
    }
    if (releaseDateRef && releaseDateRef.current)
      movie.releaseDate = releaseDateRef.current.value;
    if (movieURLRef && movieURLRef.current)
      movie.movieURL = movieURLRef.current.value;
    if (genreRef && genreRef.current) movie.genre = genreRef.current.value;
    if (overviewRef && overviewRef.current)
      movie.overview = overviewRef.current.value;
    if (runtimeRef && runtimeRef.current)
      movie.runtime = runtimeRef.current.value;

    return movie;
  };

  const titleRef = useRef<HTMLInputElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);
  const movieURLRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  const overviewRef = useRef<HTMLInputElement>(null);
  const runtimeRef = useRef<HTMLInputElement>(null);

  console.log(titleRef.current);

  return (
    <form className="form-body" onSubmit={createMovie}>
      <label htmlFor="title">title</label>
      <input
        value={values.title}
        onChange={handleChange}
        placeholder="Title"
        type="text"
        name="title"
        id="title"
        ref={titleRef}
      />
      <label htmlFor="release-date">release date</label>
      <input
        value={values.releaseDate}
        onChange={handleChange}
        placeholder="Release Date"
        type="date"
        name="releaseDate"
        id="release-date"
        ref={releaseDateRef}
      />
      <label htmlFor="movie-url">movie URL</label>
      <input
        value={values.movieURL}
        onChange={handleChange}
        placeholder="Movie URL here"
        type="url"
        name="movieURL"
        id="movie-url"
        ref={movieURLRef}
      />
      <label htmlFor="genre">Genre</label>
      <select
        value={values.genre}
        onChange={handleChange}
        placeholder="Select Genre"
        name="genre"
        id="genre"
        ref={genreRef}
      >
        {/* get genre data */}
        <option value="horror">horror</option>
      </select>
      <label htmlFor="overview">Overview</label>
      <input
        value={values.overview}
        onChange={handleChange}
        placeholder="Overview here"
        type="text"
        name="overview"
        id="overview"
        ref={overviewRef}
      />
      <label htmlFor="runtime">Runtime</label>
      <input
        value={values.runtime}
        onChange={handleChange}
        placeholder="Runtime here"
        type="text"
        name="runtime"
        id="runtime"
        ref={runtimeRef}
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
