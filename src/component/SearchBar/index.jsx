import React from "react";
//icon
import { FaSearch } from "react-icons/fa";

//styling
import "./SearchBar.css";

//components
import CustomButton from "../CustomButton";

const SearchBar = () => {
  return (
    <form className="d-flex search-bar">
      <input
        className="form-control rounded-0 w-100"
        type="search"
        aria-label="Search"
      />
      <CustomButton>
        <FaSearch />
      </CustomButton>
    </form>
  );
};

export default SearchBar;
