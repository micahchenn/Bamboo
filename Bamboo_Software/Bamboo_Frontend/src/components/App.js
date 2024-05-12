import React from "react";
import { render } from "react-dom";
//import HomePage from "./HomePage";
import Header from "./Header";

/**
 * <div className="App"> creates a div element with a CSS class of "App". 
 * Any styles defined for the "App" class in your CSS will be applied to this div and its contents.
 */

const App = () => {
  return(
    <div className = "App">
        {/*Header*/}
        <div className = "app__header">
            <Header />
        </div>
    </div>



  ) 
  
  ;
}

export default App;

const appDiv = document.getElementById("app"); // This gets a reference to a DOM element with the ID "app". This is where the React application will be mounted.
render(<App />, appDiv); // This mounts the React application to the DOM element with the ID "app". Does the actual rending