import React from "react";
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

  return (
    <form className="form-body">
      <label htmlFor="title">title</label>
      <input
        value={values.title}
        onChange={handleChange}
        placeholder="Title"
        type="text"
        name="title"
        id="title"
      />
      <label htmlFor="release-date">release date</label>
      <input
        value={values.releaseDate}
        onChange={handleChange}
        placeholder="Release Date"
        type="date"
        name="releaseDate"
        id="release-date"
      />
      <label htmlFor="movie-url">movie URL</label>
      <input
        value={values.movieURL}
        onChange={handleChange}
        placeholder="Movie URL here"
        type="url"
        name="movieURL"
        id="movie-url"
      />
      <label htmlFor="genre">Genre</label>
      <select
        value={values.genre}
        onChange={handleChange}
        placeholder="Select Genre"
        name="genre"
        id="genre"
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
      />
      <label htmlFor="runtime">Runtime</label>
      <input
        value={values.runtime}
        onChange={handleChange}
        placeholder="Runtime here"
        type="text"
        name="runtime"
        id="runtime"
      />
      {console.log(values)}
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
