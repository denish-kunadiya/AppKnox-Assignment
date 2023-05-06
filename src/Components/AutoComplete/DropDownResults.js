import React from "react";

const DropDownResults = ({ filteredResults, handleSelect, inputValue }) => {
  return (
    filteredResults.length > 0 &&
    inputValue !== "" && (
      <div className="autocomplete-dropdown">
        {filteredResults.map((item, index) => {
          const startIndex = item.toLowerCase().indexOf(inputValue);
          const endIndex = startIndex + inputValue.length;
          const firstHalf = item.slice(0, startIndex);
          const highlight = item.slice(startIndex, endIndex);
          const secondHalf = item.slice(endIndex);
          return (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              {firstHalf}
              <span className="highlight">{highlight}</span>
              {secondHalf}
            </div>
          );
        })}
      </div>
    )
  );
};

export default DropDownResults;
