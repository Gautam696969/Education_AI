import React from 'react';
import './SecurityCompliance.css';

const certifications = [
  { name: "GDPR Compliant", icon: "🛡️" },
  { name: "COPPA Certified", icon: "✅" },
  { name: "FERPA Ready", icon: "🔐" },
  { name: "ISO 27001", icon: "📜" },
];

const SecurityCompliance = () => {
  return (
    <section className="security-section">
      <div className="security-container">
        <h2 className="security-heading">🔒 Data Security & Compliance</h2>
        <p className="security-subheading">“Built with privacy & safety in mind.”</p>
        <div className="certifications-grid">
          {certifications.map((item, index) => (
            <div className="certification-card" key={index}>
              <div className="cert-icon">{item.icon}</div>
              <div className="cert-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
