import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Header from './Header'; // Import the Header component

const App = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <div className="App d-flex">
        <div className={`Sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
          <Sidebar onToggle={() => setSidebarExpanded(!isSidebarExpanded)} />
        </div>
        <div className="Home flex-grow-1">
          <Routes>
            <Route path="investment-portfolio" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);