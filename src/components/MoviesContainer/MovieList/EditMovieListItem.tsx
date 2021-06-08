import React from "react";
import Button from "../../Buttons/Button";

import Modal from "../../Modal/Modal";
import useModal from "../../Modal/useModal";
import EditMovieForm from "../../Forms/EditMovieForm";

const EditMovieList = () => {
  const { isShowing, toggle } = useModal();
  const movieForm = <EditMovieForm />;
  return (
    <>
      <Button onClick={toggle}>Edit</Button>
      <Modal isShowing={isShowing} hide={toggle} modalContent={movieForm} />
    </>
  );
};

export default EditMovieList;
