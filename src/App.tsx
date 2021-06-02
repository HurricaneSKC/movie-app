import React from "react";
import "./styles.scss";

import Header from "./components/Header/Header";
import Button from "./components/Buttons/Button";
import Footer from "./components/Footer/Footer";
import MovieContainer from "./components/MoviesContainer/MovieContainer";

import Modal from "./components/Modal/Modal";
import useModal from "./components/Modal/useModal";

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <Header title="netflix roulette" />
      <Button className="btn-primary btn-add-movies" onClick={toggle}>
        + Movie
      </Button>
      <Modal isShowing={isShowing} hide={toggle} />
      <MovieContainer />
      <Footer className="footer">netflix roulette</Footer>
    </>
  );
};

export default App;
