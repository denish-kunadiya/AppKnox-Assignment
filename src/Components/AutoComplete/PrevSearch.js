import React from "react";

const PrevSearch = ({
  uniquePastSearches,
  inputValue,
  inputRef,
  handleSelect,
}) => {
  return (
    <div className="past-searches-wrpper">
      {uniquePastSearches.length > 0 &&
        inputValue === "" &&
        inputRef.current === document.activeElement && (
          <div className="autocomplete-past-searches">
            {uniquePastSearches.map((item, index) => (
              <div key={index} onClick={() => handleSelect(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default PrevSearch;
