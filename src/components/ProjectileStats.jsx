import React from "react";

const ProjectileStats = ({ projectile }) => {
  if (!projectile) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Projectile Stats</div>
      <div className="stat-value">Caliber: {projectile.Caliber}</div>
      <div className="stat-value">Mass: {projectile.Mass}</div>
      <div className="stat-value">Initial Velocity: {projectile["Initial Velocity"]}</div>
      <div className="stat-value">Drag Factor: {projectile["Drag Factor"]}</div>
      <div className="stat-value">Gravity Factor: {projectile["Gravity Factor"]}</div>
      <div className="stat-value">Penetration Slowdown: {projectile["Penetration Slowdown"]}</div>
    </div>
  );
};

export default ProjectileStats;
