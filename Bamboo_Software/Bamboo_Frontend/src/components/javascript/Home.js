// Home.js
import React from 'react';
import '../css/Home.css';

const Home = () => {
  const boxes = Array(4).fill(null);

  return (
    <div className="Home">
      {boxes.map((_, index) => (
        <div key={index} className="box">
          <p className="box-text">This is box {index + 1}</p> {/* Add this line */}
        </div>
      ))}
    </div>
  );
};

export default Home;