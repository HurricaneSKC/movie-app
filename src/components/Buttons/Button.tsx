import React from "react";

const Button = ({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}) => (
  <button type="button" className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
