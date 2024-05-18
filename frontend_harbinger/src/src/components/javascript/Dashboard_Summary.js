import React from 'react';
import PropTypes from 'prop-types';
import '../css/Dashboard_Summary.css';

const Dashboard_Summary = ({ summaryData = [] }) => {
  if (summaryData.length === 0) {
    return <div className="dashboard-summary">No data to display</div>;
  }

  return (
    <div className="dashboard-summary">
      {summaryData.map((item, index) => (
        <div key={index} className="summary-item">
          <h3>{item.title}</h3>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

Dashboard_Summary.propTypes = {
  summaryData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

export default Dashboard_Summary;