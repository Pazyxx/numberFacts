import React from "react";
import "./SearchBox.css";

const SearchBox = ({inputBlockedHandler, searchChange }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchChange(event.target.value);
    }
  };

  return (
    <input
      disabled={inputBlockedHandler ? true : false}
      placeholder="Enter number ..."
      type="search"
      onKeyPress={handleKeyPress}
    />
  );
};

export default SearchBox;
