import React from "react";

const FirepowerStats = ({ firepower }) => {
  if (!firepower) return null;

  const renderArmStats = (arm, armStats) => (
    <div key={arm}>
      <h4>{arm}</h4>
      <div className="stat-value">Damage: {armStats.damage}</div>
      <div className="stat-value">Ammo Capacity: {armStats.ammo_capacity}</div>
      <div className="stat-value">Rate of Fire: {armStats.rate_of_fire}</div>
      <div className="stat-value">Armor Penetration: {armStats.armor_penetration}</div>
    </div>
  );

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Firepower</div>
      {Object.keys(firepower).map((arm) => renderArmStats(arm, firepower[arm]))}
    </div>
  );
};

export default FirepowerStats;
