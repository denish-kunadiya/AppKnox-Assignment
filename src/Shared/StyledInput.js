import React from "react";

const StyledInput = ({
  inputType,
  inputValue,
  handleChange,
  placeholder,
  inputRef,
}) => {
  return (
    <input
      type={inputType}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
};

export default StyledInput;
