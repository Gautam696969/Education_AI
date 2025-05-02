import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay" />
      <div className="hero-content">
        {/* Heading */}
        <h1>Welcome to <span>Education AI</span></h1>

        {/* Subtext */}
        <p>Deliver tailored learning experiences, real-time insights, and smarter outcomes with AI-powered education.</p>

        {/* Call to Action Buttons */}
        <div className="cta-buttons">
          <button className="cta-button">Try a Live Demo</button>
          <button className="cta-button">Start Free Trial</button>
          <button className="cta-button">See How It Works</button>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
