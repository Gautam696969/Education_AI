import React from 'react';
import './AIPowered.css';

const features = [
  {
    icon: '🧠',
    title: 'Personalized Learning Paths',
    description: 'AI tailors content by student behavior.',
  },
  {
    icon: '⏱️',
    title: 'Real-Time Performance Tracking',
    description: 'Insights for teachers and students.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Tutors',
    description: '24/7 support for solving doubts.',
  },
  {
    icon: '✍️',
    title: 'Automated Grading & Feedback',
    description: 'Save time on repetitive tasks.',
  },
  {
    icon: '🧪',
    title: 'Adaptive Assessments',
    description: 'Dynamic quizzes that adjust difficulty.',
  },
  {
    icon: '📚',
    title: 'Smart Content Suggestions',
    description: 'Based on student learning style.',
  },
];

function AIPowered() {
  return (
    <section className="ai-section">
      <h2>🤖 AI-Powered Features</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AIPowered;
