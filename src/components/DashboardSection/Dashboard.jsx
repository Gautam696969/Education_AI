import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container" >
      <h1 className="dashboard-heading">Live Dashboard Preview</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2 className="card-title">Student Progress Heatmaps</h2>
          <div className="heatmap">
            <p className="heatmap-text">Heatmap Visualization Here</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">AI Alerts on Low-Performing Areas</h2>
          <div className="ai-alerts">
            <p className="alert-text">Alert: Math scores below average.</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">Smart Grading Suggestions</h2>
          <div className="grading-suggestions">
            <p className="suggestion-text">Suggestion: Revisit Essay grading rubric for better clarity.</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">Admin-Level Analytics for Institutions</h2>
          <div className="analytics">
            <p className="analytics-text">Institution-wide performance insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
