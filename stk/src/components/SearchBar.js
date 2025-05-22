import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by stock name or symbol..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        marginBottom: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    />
  );
};

export default SearchBar;
