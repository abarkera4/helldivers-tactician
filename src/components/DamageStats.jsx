import React from "react";

const DamageStats = ({ damage }) => {
  if (!damage) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Damage Stats</div>
      <div className="stat-value">Standard: {damage.Standard}</div>
      <div className="stat-value">vs. Durable: {damage["vs. Durable"]}</div>
    </div>
  );
};

export default DamageStats;
