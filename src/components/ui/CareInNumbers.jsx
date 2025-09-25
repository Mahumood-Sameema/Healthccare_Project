import React from 'react';
import '../css/CareInNumbers.css'

const CareInNumbers = () => {
  const stats = [
    { icon: "🏥", number: 6, label: "Hospitals" },
    { icon: "📄", number: 21, label: "Medical Fitness Centers" },
    { icon: "🏠", number: 26, label: "Health Centers" },
    { icon: "👨‍⚕️", number: 9411, label: "Healthcare Professionals" }
  ];
  return (
    <div className="care-section">
      <h2 className="section-title">Care In Numbers</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CareInNumbers
