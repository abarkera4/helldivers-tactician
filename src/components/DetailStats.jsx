import React from "react";

const DetailsStats = ({ details }) => {
  if (!details) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Details</div>
      {Object.keys(details).map((key) => (
        <div key={key} className="stat-value">
          {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}: {details[key]}
        </div>
      ))}
    </div>
  );
};

export default DetailsStats;
