import React from "react";

const Button = ({
  onClick,
  children,
  className,
  movie,
}: {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  movie?: string;
}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    data-movie={movie}
  >
    {children}
  </button>
);

export default Button;
