import * as React from "react";
import { useState, useRef } from "react";
import StyledInput from "../../Shared/StyledInput";
import StyledBtn from "../../Shared/StyledBtn";
import List from "./List";
import PrevSearch from "./PrevSearch";
import DropDownResults from "./DropDownResults";
import Data from "./Data";

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [pastSearches, setPastSearches] = useState([]);
  const [matchingResults, setMatchingResults] = useState([]);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredResultsObj = {};
    Data.forEach((item) => {
      if (item.toLowerCase().includes(inputValue)) {
        filteredResultsObj[item.toLowerCase()] = item;
      }
    });
    const filteredResults = Object.values(filteredResultsObj).slice(0, 5);
    setInputValue(inputValue);
    setFilteredResults(filteredResults);
  };

  const handleClear = () => {
    setInputValue("");
    setFilteredResults([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      inputRef.current.blur();
      const matchingResults = Data.filter((item) =>
        item.toLowerCase().includes(inputValue)
      );
      setMatchingResults(matchingResults);
      setPastSearches((prevState) => [
        inputValue.toLowerCase(),
        ...prevState.slice(0, 4),
      ]);
      setInputValue("");
      setFilteredResults([]);
    }
  };

  const handleFocus = () => {
    setPastSearches((prevState) => prevState.slice(0, 6));
  };

  const handleSelect = (selectedItem) => {
    setPastSearches((prevState) => [
      selectedItem.toLowerCase(),
      ...prevState.slice(0, 6),
    ]);
    setInputValue(selectedItem.toLowerCase());

    const filteredResultsObj = {};
    Data.forEach((item) => {
      if (item.toLowerCase().includes(selectedItem.toLowerCase())) {
        filteredResultsObj[item.toLowerCase()] = item;
      }
    });
    const filteredResults = Object.values(filteredResultsObj).slice(0, 5);
    setFilteredResults(filteredResults);
    inputRef.current.blur();
  };

  const uniquePastSearches = Array.from(new Set(pastSearches));

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="autocomplete" onFocus={handleFocus}>
        <StyledInput
          inputType={"text"}
          inputValue={inputValue}
          handleChange={handleChange}
          placeholder={"Type Fruits Here..."}
          inputRef={inputRef}
        />
        <StyledBtn
          btnType="button"
          clickHandler={handleClear}
          btnText="Clear"
        />
        <StyledBtn
          btnType="submit"
          clickHandler={handleSubmit}
          btnText="Submit"
        />
        <DropDownResults
          filteredResults={filteredResults}
          inputValue={inputValue}
          handleSelect={handleSelect}
        />
        <PrevSearch
          uniquePastSearches={uniquePastSearches}
          inputValue={inputValue}
          inputRef={inputRef}
          handleSelect={handleSelect}
        />
      </div>
      <List matchingResults={matchingResults} />
    </form>
  );
};

export default AutoComplete;
