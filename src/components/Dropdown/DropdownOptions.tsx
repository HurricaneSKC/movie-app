import React from "react";

const DropdownOptions = ({ optionName }: { optionName: string }) => (
  <option value={optionName}>{optionName}</option>
);

export default DropdownOptions;
