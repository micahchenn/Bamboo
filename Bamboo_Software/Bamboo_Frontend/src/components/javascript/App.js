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

const MainContent = ({ isLoggedIn, onLogin }) => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const location = useLocation();

  return (
    <div className="App">
      {isLoggedIn && location.pathname !== "/" && (
        <Sidebar onToggle={() => setSidebarExpanded(!isSidebarExpanded)} />
      )}
      <div className="Home">
        <Routes>
          <Route path="investment-portfolio" element={<Investment_Portfolio />} />
          <Route path="market-watchlist" element={<Market_Watchlist />} />
          <Route path="login" element={<Login onLogin={onLogin} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Default_Page />} />
          <Route path="logout" element={<Default_Page />} />
          <Route path="*" element={<Default_Page />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn ? <Header /> : <Default_Header />}
      <MainContent isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </Router>
  );
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);