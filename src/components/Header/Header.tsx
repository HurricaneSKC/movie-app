import React from "react";

const Header = ({ title }: { title: string }) => (
  <header>
    <h1 title={title}>{title}</h1>
  </header>
);

export default Header;
