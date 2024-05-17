import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { render } from 'react-dom';
import Default_Header from './Default_Header';
import Header from './Header';
import Sidebar from './Sidebar';
import Investment_Portfolio from './Investment_Portfolio';
import Market_Watchlist from './Market_Watchlist';
import Default_Page from './Default_Page';
import Login from './Login';
import Signup from './Signup';
import Dashboard_Summary from './Dashboard_Summary';
import Link_Account from './Link_Account';

// MainContent is a functional component that takes three props: isLoggedIn, onLogin, and onLogout.
const MainContent = ({ isLoggedIn, onLogin, onLogout }) => {
  // isSidebarExpanded is a state variable that determines whether the sidebar is expanded or not.
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  // location is an object that contains information about the current URL.
  const location = useLocation();

  // The component returns a JSX element.
  return (
    <div className="App">
      {/* If the user is logged in and the current path is not the root path, render the Sidebar component. */}
      {isLoggedIn && location.pathname !== "/" && (
        <Sidebar onToggle={() => setSidebarExpanded(!isSidebarExpanded)} />
      )}
      <div className="Home">
        {/* Define the routes for the application. */}
        <Routes>
          {/* Each Route component has a path prop that defines the URL for that route, and an element prop that defines the component to render for that route. */}
          <Route path="my-dashboard" element={<Dashboard_Summary />} />
          <Route path="investment-portfolio" element={<Investment_Portfolio />} />
          <Route path="market-watchlist" element={<Market_Watchlist />} />
          <Route path="login" element={<Login onLogin={onLogin} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="link-account" element={<Link_Account />} />
          <Route path="/" element={<Default_Page />} />
          <Route path="logout" element={<Default_Page onLogout={onLogout} />} />
          {/* This route matches any path that hasn't been matched by the previous routes. */}
          <Route path="*" element={<Default_Page />} />
        </Routes>
      </div>
    </div>
  );
};

// App is the main component of the application.
const App = () => {
  // isLoggedIn is a state variable that determines whether the user is logged in or not. It is initially fetched from local storage.
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  // This effect runs whenever isLoggedIn changes. It updates the value of isLoggedIn in local storage.
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // handleLogin is a function that sets isLoggedIn to true.
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // handleLogout is a function that sets isLoggedIn to false.
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // The component returns a JSX element.
  return (
    <Router>
      {/* If the user is logged in, render the Header component. Otherwise, render the Default_Header component. */}
      {isLoggedIn ? <Header /> : <Default_Header />}
      {/* Render the MainContent component, passing isLoggedIn, handleLogin, and handleLogout as props. */}
      <MainContent isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </Router>
  );
};

// Export App as the default export of the module.
export default App;

// Select a div with the id "app" from the DOM.
const appDiv = document.getElementById("app");
// Render the App component into the selected div.
render(<App />, appDiv);