import React from "react";

const GeneralStats = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">General Stats</div>
      <div className="stat-value">Uses: {stats.uses}</div>
      <div className="stat-value">Call-in Time: {stats.call_in_time}</div>
      <div className="stat-value">Cooldown Time: {stats.cooldown_time}</div>
      <div className="stat-value">Direction: {stats.direction}</div>
    </div>
  );
};

export default GeneralStats;
