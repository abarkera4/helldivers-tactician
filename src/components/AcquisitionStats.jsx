import React from "react";

const AcquisitionStats = ({ acquisition }) => {
  if (!acquisition) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Acquisition</div>
      <div className="stat-value">Source: {acquisition.source}</div>
      <div className="stat-value">Unlock Requirement: {acquisition.unlock_requirement}</div>
      <div className="stat-value">Cost: {acquisition.cost}</div>
    </div>
  );
};

export default AcquisitionStats;
