import React from "react";
import Button from "../../Buttons/Button";

import Modal from "../../Modal/Modal";
import useModal from "../../Modal/useModal";

import DeleteMovieForm from "../../Forms/DeleteMovieForm";

const messages = {
  deleteMessage: "Are you sure you want to delete this movie?",
};

const DeleteMovieList = () => {
  const { isShowing, toggle } = useModal();
  const movieForm = <DeleteMovieForm message={messages.deleteMessage} />;
  return (
    <>
      <Button onClick={toggle}>Delete</Button>
      <Modal isShowing={isShowing} hide={toggle} modalContent={movieForm} />
    </>
  );
};

export default DeleteMovieList;
