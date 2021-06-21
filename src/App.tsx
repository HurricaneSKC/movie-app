import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/styles.scss";

import Header from "./components/Header/Header";
import Button from "./components/Buttons/Button";
import Footer from "./components/Footer/Footer";
import MovieContainer from "./components/MoviesContainer/MovieContainer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import AddMovieForm from "./components/Forms/AddMovieForm";
import Modal from "./components/Modal/Modal";
import useModal from "./components/Modal/useModal";

const siteContent = {
  siteTitle: "netflix roulette",
};

const App = () => {
  const { isShowing, toggle } = useModal();
  const movieForm = <AddMovieForm />;
  const getMovieURL = "http://localhost:4000/movies";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieList, updateMovieList] = useState([]);

  useEffect(() => {
    axios.get(getMovieURL).then(
      (result) => {
        setIsLoaded(true);
        updateMovieList(result.data.data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  console.log(error);
  console.log(isLoaded);
  console.log(movieList);

  return (
    <>
      <Header title={siteContent.siteTitle} />
      <Button className="btn-primary btn-add-movies" onClick={toggle}>
        + Movie
      </Button>
      <Modal isShowing={isShowing} hide={toggle} modalContent={movieForm} />
      <ErrorBoundary>{isLoaded && <MovieContainer />}</ErrorBoundary>
      <Footer className="footer">{siteContent.siteTitle}</Footer>
    </>
  );
};

export default App;
