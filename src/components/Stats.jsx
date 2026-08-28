import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <h3>25+</h3>
          <p>Completed &<br />Shipped Projects</p>
        </div>
        <div className="stat-item">
          <h3>3+</h3>
          <p>Years of<br />Experience</p>
        </div>
        <div className="stat-item">
          <h3>95%</h3>
          <p>Stakeholder<br />Satisfaction</p>
        </div>
        <div className="stat-item">
          <h3>40%</h3>
          <p>Reduction in<br />Time-to-Market</p>
        </div>
      </div>
    </section>
  );
};

export default Stats; 