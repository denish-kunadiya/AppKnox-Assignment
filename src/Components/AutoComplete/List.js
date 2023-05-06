import React from "react";

const List = ({ matchingResults }) => {
  return (
    matchingResults.length > 0 && (
      <div className="matching-results">
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {matchingResults.map((item, index) => (
            <li key={index} style={{ margin: "0.5rem", fontSize: "1rem" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default List;
