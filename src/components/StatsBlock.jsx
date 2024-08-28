import React from "react";

const StatsBlock = ({ title, stats }) => {
  if (!stats || Object.keys(stats).length === 0) return null;

  return (
    <div className="stats-block">
      <div className="stat-header">{title}</div>
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="stat-value">
          {key.replace(/_/g, " ").toUpperCase()}: {value}
        </div>
      ))}
    </div>
  );
};

export default StatsBlock;
