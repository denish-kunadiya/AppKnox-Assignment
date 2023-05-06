import React from "react";

const StyledBtn = ({ btnType, clickHandler, btnText }) => {
  return (
    <button type={btnType} className="submit-btn" onClick={clickHandler}>
      {btnText}
    </button>
  );
};

export default StyledBtn;
