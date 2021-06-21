import React from "react";
import "./styles/styles.scss";

import Header from "./components/Header/Header";
import Button from "./components/Buttons/Button";
import Footer from "./components/Footer/Footer";
import MovieContainer from "./components/MoviesContainer/MovieContainer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import AddMovieForm from "./components/Forms/AddMovieForm";
// import EditMovieForm from "./components/Forms/EditMovieForm"
// import DeleteMovieForm from "./components/Forms/DeleteMovieForm";

import Modal from "./components/Modal/Modal";
import useModal from "./components/Modal/useModal";

const App = () => {
  const { isShowing, toggle } = useModal();
  const movieForm = <AddMovieForm />;
  console.log(movieForm);
  return (
    <>
      <Header title="netflix roulette" />
      <Button
        className="btn-primary btn-add-movies"
        onClick={toggle}
        movie="add-movie"
      >
        + Movie
      </Button>
      <Modal isShowing={isShowing} hide={toggle} modalContent={movieForm} />
      <ErrorBoundary>
        <MovieContainer />
      </ErrorBoundary>
      <Footer className="footer">netflix roulette</Footer>
    </>
  );
};

export default App;

// button that switches on the modal needs to pass some data to determine which for should show
