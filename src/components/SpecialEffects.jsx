import React from "react";

const SpecialEffects = ({ specialEffects }) => {
  if (!specialEffects) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Special Effects</div>
      <div className="stat-value">Demolition Force: {specialEffects["Demolition Force"]}</div>
      <div className="stat-value">Stagger Force: {specialEffects["Stagger Force"]}</div>
      <div className="stat-value">Push Force: {specialEffects["Push Force"]}</div>
      {specialEffects.Status && <div className="stat-value">Status: {specialEffects.Status}</div>}
      {specialEffects["Status Strength"] && <div className="stat-value">Status Strength: {specialEffects["Status Strength"]}</div>}
    </div>
  );
};

export default SpecialEffects;
