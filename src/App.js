import React from "react";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//styles
import { GlobalStyle } from "./GlobalStyle";

//components
import TopBar from "./component/TopBar";
import NavBar from "./component/NavBar";

function App() {
  return (
    <Router>
      <TopBar />
      <NavBar />
      <div className="app">Hello World</div>
      <GlobalStyle />
    </Router>
  );
}

export default App;
