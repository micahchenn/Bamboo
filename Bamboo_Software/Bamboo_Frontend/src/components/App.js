import React from "react";
import { render } from "react-dom";
//import HomePage from "./HomePage";

const App = () => {
  return <h1>Hello, World!</h1>;
}

export default App;

const appDiv = document.getElementById("app"); // This gets a reference to a DOM element with the ID "app". This is where the React application will be mounted.
render(<App />, appDiv); // This mounts the React application to the DOM element with the ID "app". Does the actual rending