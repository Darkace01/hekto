import React from "react";
import { FaSearch } from "react-icons/fa";

//components
import CustomButton from "../CustomButton";

const SearchBar = () => {
  return (
    <form className="d-flex">
      <input
        className="form-control rounded-0 w-100"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <CustomButton>
        <FaSearch />
      </CustomButton>
    </form>
  );
};

export default SearchBar;
