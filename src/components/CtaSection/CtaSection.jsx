import React, { useState } from 'react';
import './CtaSection.css';

const CtaSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! You will receive the AI Whitepaper soon.');
    // Add any further logic to handle the form submission
  };

  return (
    <div className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">
          Get Started Quickly with AI in Education!
        </h2>
        <p className="cta-subheading">
          Book a Demo or Get Your Free AI Education Toolkit today.
        </p>

        <div className="cta-buttons">
          <button className="cta-button demo">Book a Demo</button>
          <button className="cta-button toolkit">Get Your Free AI Education Toolkit</button>
        </div>

        <div className="email-capture">
          <h3 className="email-heading">Download Our Free AI in Education Whitepaper</h3>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button type="submit" className="email-submit">
              Download
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
