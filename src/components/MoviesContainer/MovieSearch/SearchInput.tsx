import React from "react";

const SearchInput = ({
  label,
  placeholder,
  filterOnChange,
}: {
  label: string;
  placeholder: string;
  filterOnChange: () => void;
}) => (
  <>
    <label htmlFor="search">{label}</label>
    <input type="text" placeholder={placeholder} onChange={filterOnChange} />
  </>
);

export default SearchInput;
