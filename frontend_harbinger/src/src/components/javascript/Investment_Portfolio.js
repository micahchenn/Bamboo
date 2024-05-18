// Home.js
import React from 'react';
import '../css/Investment_Portfolio.css';

const Investment_Portfolio = () => {
  const boxes = Array(4).fill(null);

  return (
    <div className="Investment_Portfolio">
      {boxes.map((_, index) => (
        <div key={index} className="box">
          <p className="box-text">This is box {index + 1}</p> {/* Add this line */}
        </div>
      ))}
    </div>
  );
};

export default Investment_Portfolio;