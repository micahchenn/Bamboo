import React from "react";
import { render } from "react-dom";
//import HomePage from "./HomePage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from './Home';
import "../css/App.css";

/**
 * <div className="App"> creates a div element with a CSS class of "App". 
 * Any styles defined for the "App" class in your CSS will be applied to this div and its contents.
 */

// App.js

const App = () => {
  return (
    <div className="App flex-container">
      {/*Dashboard*/}
      <Sidebar />
      {/*Home Screen*/}
      <Home />
    </div>
  );
};

export default App;

const appDiv = document.getElementById("app"); // This gets a reference to a DOM element with the ID "app". This is where the React application will be mounted.
render(<App />, appDiv); // This mounts the React application to the DOM element with the ID "app". Does the actual rending