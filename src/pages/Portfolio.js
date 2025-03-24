import React from 'react';

const Portfolio = () => {
  return (
    <div className="page">
      <h1>Our Portfolio</h1>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h3>Project 1</h3>
          <p>E-commerce Website</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 2</h3>
          <p>Mobile Banking App</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 3</h3>
          <p>Healthcare Platform</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 4</h3>
          <p>Educational Software</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
