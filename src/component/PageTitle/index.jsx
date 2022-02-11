import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

//styling
import "./PageTitle.css";

//util
import { removeSpecialChars } from "../../helpers";

const PageTitle = () => {
  const [pageTitle, setPageTitle] = useState("Home");
  let params = useLocation();
  useEffect(() => {
    if (params.pathname === "/") {
      setPageTitle("Home");
    } else {
      setPageTitle(removeSpecialChars(params.pathname));
    }
  }, [pageTitle, params]);
  return (
    <div className="page-title">
      <h1>{pageTitle}</h1>
      <div className="page-title-sub">
        <Link to={params.pathname}>{pageTitle}</Link>
      </div>
    </div>
  );
};

export default PageTitle;
