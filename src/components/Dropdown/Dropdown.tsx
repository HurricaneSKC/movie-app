import React from "react";
import DropdownOptions from "./DropdownOptions";

const Dropdown = ({
  dropdownName,
  sortLabel,
  optionsList,
  labelClass,
  selectClass,
}: {
  dropdownName: string;
  sortLabel: string;
  optionsList: string[];
  labelClass: string;
  selectClass: string;
}) => (
  <div className="dropdown">
    <label className={labelClass} htmlFor={dropdownName}>
      {sortLabel}
    </label>
    <select
      className={`select ${selectClass}`}
      name={dropdownName}
      id={dropdownName}
    >
      {optionsList.map((optionName) => (
        <DropdownOptions key={optionName} optionName={optionName} />
      ))}
    </select>
  </div>
);

export default Dropdown;
