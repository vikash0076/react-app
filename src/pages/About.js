import React from 'react';

const About = () => {
  return (
    <div className="page">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Founded in 2025, we've been at the forefront of innovation and creativity.</p>
          <h2>Our Mission</h2>
          <p>To deliver exceptional value and create meaningful experiences for our clients.</p>
        </div>
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <h3>Jane Smith</h3>
              <p>Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
