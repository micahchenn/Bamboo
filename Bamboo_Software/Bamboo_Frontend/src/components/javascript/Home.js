// Home.js
import React from 'react';
import '../css/Home.css';
import '../css/Sidebar.css';

const Home = () => {
  const boxes = Array(4).fill(null);

  return (
    <div className="Home">
      {boxes.map((_, index) => (
        <div key={index} className="box" />
      ))}
    </div>
  );
};

export default Home;
