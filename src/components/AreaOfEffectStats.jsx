import React from "react";

const AreaOfEffectStats = ({ areaOfEffect }) => {
  if (!areaOfEffect) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Area of Effect</div>
      <div className="stat-value">Inner Radius: {areaOfEffect["Inner Radius"]}</div>
      <div className="stat-value">Outer Radius: {areaOfEffect["Outer Radius"]}</div>
      <div className="stat-value">Shockwave Radius: {areaOfEffect["Shockwave Radius"]}</div>
    </div>
  );
};

export default AreaOfEffectStats;
