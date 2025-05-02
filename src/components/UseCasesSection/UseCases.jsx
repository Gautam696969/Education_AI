import React from 'react';
import './UseCases.css'; // Make sure to import the CSS file

const useCases = [
  {
    emoji: '🏫',
    title: 'K-12 Schools',
    description: 'Differentiated instruction made easy.',
  },
  {
    emoji: '🎓',
    title: 'Colleges/Universities',
    description: 'Better student engagement and success rates.',
  },
  {
    emoji: '👨‍🏫',
    title: 'Tutoring Centers',
    description: 'AI-enhanced support and analytics.',
  },
  {
    emoji: '🏢',
    title: 'EdTech Companies',
    description: 'Integrate AI into your LMS.',
  },
];

const UseCases = () => {
  return (
    <div className="usecases-container">
      <div className="usecases-wrapper">
        <h1 className="usecases-heading">🎯 Use Cases by Segment</h1>
        <div className="usecases-grid">
          {useCases.map((item, index) => (
            <div key={index} className="usecase-card">
              <div className="usecase-emoji">{item.emoji}</div>
              <h2 className="usecase-title">{item.title}</h2>
              <p className="usecase-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
