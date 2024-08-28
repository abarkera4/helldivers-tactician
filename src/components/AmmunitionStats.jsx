import React from "react";

const AmmunitionStats = ({ ammunition }) => {
  if (!ammunition) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Ammunition</div>
      {ammunition.ammo_capacity && <div className="stat-value">Ammo Capacity: {ammunition.ammo_capacity}</div>}
      {ammunition.spare_clips && <div className="stat-value">Spare Clips: {ammunition.spare_clips}</div>}
      {ammunition.spare_rounds && <div className="stat-value">Spare Rounds: {ammunition.spare_rounds}</div>}
      {ammunition.spare_belts && <div className="stat-value">Spare Belts: {ammunition.spare_belts}</div>}
      {ammunition.spare_heat_sinks && <div className="stat-value">Spare Heat Sinks: {ammunition.spare_heat_sinks}</div>}
      {ammunition.spare_canisters && <div className="stat-value">Spare Canisters: {ammunition.spare_canisters}</div>}
      {ammunition.spare_missiles && <div className="stat-value">Spare Missiles: {ammunition.spare_missiles}</div>}
    </div>
  );
};

export default AmmunitionStats;
