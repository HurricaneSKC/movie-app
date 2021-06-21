import React from "react";

const EditMovieIcon = ({ onClick }: { onClick: () => void }) => (
  <div onClick={onClick} className="three-dots"></div>
);

export default EditMovieIcon;
