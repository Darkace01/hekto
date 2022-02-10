import React from "react";

const SearchBar = () => {
  return (
    <form className="d-flex">
      <input
        className="form-control rounded-0 w-100"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success rounded-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
