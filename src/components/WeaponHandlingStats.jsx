import React from "react";

const WeaponHandlingStats = ({ weapon_handling }) => {
  if (!weapon_handling) return null;

  return (
    <div className="stratagem-stats-section">
      <div className="stat-header">Weapon Handling</div>
      {weapon_handling.fire_modes && <div className="stat-value">Fire Modes: {Array.isArray(weapon_handling.fire_modes) ? weapon_handling.fire_modes.join(", ") : weapon_handling.fire_modes}</div>}
      {weapon_handling.recoil && <div className="stat-value">Recoil: {weapon_handling.recoil}</div>}
      {weapon_handling.fire_rate && <div className="stat-value">Fire Rate: {Array.isArray(weapon_handling.fire_rate) ? weapon_handling.fire_rate.join(", ") : weapon_handling.fire_rate}</div>}
      {weapon_handling.scope_ranges && <div className="stat-value">Scope Ranges: {weapon_handling.scope_ranges}</div>}
    </div>
  );
};

export default WeaponHandlingStats;
