import React from "react";
import Button from "../Buttons/Button";
import FormHeading from "./FormHeading";

const deleteMovie = () => console.log("movie deleted");

const deleteMovieForm = ({ message }: { message: string }) => (
  <>
    <FormHeading heading="Delete Movie" />
    <p>{message}</p>
    <Button className="btn-primary" onClick={deleteMovie}>
      Confirm
    </Button>
  </>
);

export default deleteMovieForm;
