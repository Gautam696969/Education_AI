import React from 'react';
import './IntegrationPlatforms.css';

const platforms = [
  { name: "Google Classroom", logo: "image/classroom.jpg" },
  { name: "Moodle", logo: "image/moodle.png" },
  { name: "Canvas", logo: "image/Canva.png" },
  { name: "Blackboard", logo: "image/Blackboard.png" },
  { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
];

const IntegrationPlatforms = () => {
  return (
    <section className="integration-section">
      <div className="integration-container">
        <h2 className="integration-heading">🔗 Integration & Platform Friendly</h2>
        <p className="integration-subheading">“Connects with your existing LMS and platforms.”</p>
        <div className="platform-flex">
          {platforms.map((platform, index) => (
            <div className="platform-item" key={index}>
              <img src={platform.logo} alt={platform.name} className="platform-logo" />
              <p className="platform-name">{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationPlatforms;
