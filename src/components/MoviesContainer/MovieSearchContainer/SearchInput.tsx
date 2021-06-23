import React, { useState } from "react";

const SearchInput = ({
  label,
  placeholder,
  filterOnChange,
}: {
  label: string;
  placeholder: string;
  filterOnChange: () => void;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const resetSearch = () => {
    setSearchValue("");
  };

  return (
    <>
      <label htmlFor="search">{label}</label>
      <input
        type="search"
        name="search"
        placeholder={placeholder}
        onChange={filterOnChange}
        value={searchValue}
      />
      <button type="button" value="" onClick={resetSearch}>
        Reset
      </button>
    </>
  );
};

export default SearchInput;
