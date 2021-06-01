import React from "react";
import "./styles.scss";

import Header from "./components/Header/Header";
import Button from "./components/Buttons/Button";
import Footer from "./components/Footer/Footer";
import MovieContainer from "./components/MoviesContainer/MovieContainer";

const App = () => {
  return (
    <>
      <Header title="netflix roulette" />
      <Button
        className="btn-primary btn-add-movies"
        onClick={() => console.log("You clicked me")}
      >
        + Movie
      </Button>
      <MovieContainer />
      <Footer className="footer">netflix roulette</Footer>
    </>
  );
};

export default App;
