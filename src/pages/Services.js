import React from 'react';

const Services = () => {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Custom websites and web applications</p>
        </div>
        <div className="service-card">
          <h3>Mobile Apps</h3>
          <p>iOS and Android development</p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Beautiful and intuitive interfaces</p>
        </div>
        <div className="service-card">
          <h3>Consulting</h3>
          <p>Expert technical guidance</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
