import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to Our Website</h1>
      <p>We are a creative agency dedicated to bringing your ideas to life.</p>
      <div className="features">
        <div className="feature">
          <h3>Innovation</h3>
          <p>Cutting-edge solutions for modern problems</p>
        </div>
        <div className="feature">
          <h3>Quality</h3>
          <p>Exceptional quality in everything we do</p>
        </div>
        <div className="feature">
          <h3>Reliability</h3>
          <p>Trusted by clients worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
