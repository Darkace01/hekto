import React from "react";
import "./App.css";

//styles
import { GlobalStyle } from "./GlobalStyle";

//components
import TopBar from "./component/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div className="app">Hello World</div>
      <GlobalStyle />
    </>
  );
}

export default App;
