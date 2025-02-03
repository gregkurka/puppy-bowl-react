import React, { useState } from "react";

import { Link } from "react-router-dom";

function SearchBar({ players }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        required
      />
      <Link to={`/SearchedPuppies/${searchTerm}`}>
        <button>Search</button>
      </Link>
    </div>
  );
}

export default SearchBar;
