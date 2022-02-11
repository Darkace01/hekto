import React from "react";

//Routing
import { Routes, Route } from "react-router-dom";
import "./App.css";

//styles
import { GlobalStyle } from "./GlobalStyle";

//components
import TopBar from "./component/TopBar";
import NavBar from "./component/NavBar";
import PageTitle from "./component/PageTitle";

//pages
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
