import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { render } from 'react-dom'; // Import render from react-dom
import Default_Header from './Default_Header';
import Header from './Header';
import Sidebar from './Sidebar';
import Investment_Portfolio from './Investment_Portfolio';
import Market_Watchlist from './Market_Watchlist'; // Import the Market_Watchlist component
import Default_Page from './Default_Page';
import Login from './Login';

const MainContent = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Sidebar onToggle={() => setSidebarExpanded(!isSidebarExpanded)} />
      )}
      <div className="Home">
        <Routes>
          <Route path="investment-portfolio" element={<Investment_Portfolio />} />
          <Route path="market-watchlist" element={<Market_Watchlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Default_Page />} />
          <Route path="*" element={<Default_Page />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

  return (
    <Router>
      {isLoggedIn ? <Header /> : <Default_Header />} {/* Conditionally render Header or DefaultHeader */}
      <MainContent />
    </Router>
  );
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv); // Use the imported render function