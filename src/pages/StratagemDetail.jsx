import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backpackStratagems from "../data/backpackStratagems.json";
import defensiveStratagems from "../data/defensiveStratagems.json";
import eagleStratagems from "../data/eagleStratagems.json";
import orbitalStratagems from "../data/orbitalStratagems.json";
import supportWeaponsStratagems from "../data/supportWeaponStratagems.json";
import vehicleStratagems from "../data/vehicleStratagems.json";
import stratagemWiki from "../data/stratagemWiki.json";
import "./StratagemDetail.css";

function StratagemDetail() {
  const { stratagemId } = useParams();
  const [stratagem, setStratagem] = useState(null);
  const [wikiContent, setWikiContent] = useState(null);

  useEffect(() => {
    const allStratagems = [...backpackStratagems, ...defensiveStratagems, ...eagleStratagems, ...orbitalStratagems, ...supportWeaponsStratagems, ...vehicleStratagems];

    const selectedStratagem = allStratagems.find((stratagem) => stratagem.id === stratagemId);
    setStratagem(selectedStratagem);

    const selectedWikiContent = stratagemWiki.find((content) => content.id === stratagemId);
    setWikiContent(selectedWikiContent);
  }, [stratagemId]);

  if (!stratagem) {
    return <h1>Loading...</h1>;
  }

  const renderWeaponHandling = (weaponHandling) => {
    return (
      weaponHandling && (
        <div className="stratagem-stats-section">
          <div className="stat-header">Weapon Handling</div>
          {weaponHandling.fire_modes && <div className="stat-value">Fire Modes: {weaponHandling.fire_modes}</div>}
          {weaponHandling.recoil && <div className="stat-value">Recoil: {weaponHandling.recoil}</div>}
          {weaponHandling.fire_rate && <div className="stat-value">Fire Rate: {Array.isArray(weaponHandling.fire_rate) ? weaponHandling.fire_rate.join(", ") : weaponHandling.fire_rate}</div>}
          {weaponHandling.cooldown && <div className="stat-value">Cooldown: {weaponHandling.cooldown}</div>}
        </div>
      )
    );
  };

  const renderFirepower = (firepower) => {
    return (
      firepower && (
        <div className="stratagem-stats-section">
          <div className="stat-header">Firepower</div>
          <div className="stat-value">Damage: {firepower.damage || "N/A"}</div>
          {firepower.penetration_level && <div className="stat-value">Penetration Level: {firepower.penetration_level}</div>}
        </div>
      )
    );
  };

  const renderAmmunition = (ammunition) => {
    return (
      ammunition && (
        <div className="stratagem-stats-section">
          <div className="stat-header">Ammunition</div>
          {ammunition.ammo_capacity && <div className="stat-value">Ammo Capacity: {ammunition.ammo_capacity}</div>}
          {ammunition.spare_clips && <div className="stat-value">Spare Clips: {ammunition.spare_clips}</div>}
          {ammunition.spare_canisters && <div className="stat-value">Spare Canisters: {ammunition.spare_canisters}</div>}
          {ammunition.spare_heat_sinks && <div className="stat-value">Spare Heat Sinks: {ammunition.spare_heat_sinks}</div>}
        </div>
      )
    );
  };

  const renderAcquisition = (acquisition) => {
    return (
      acquisition && (
        <div className="stratagem-stats-section">
          <div className="stat-header">Acquisition</div>
          <div className="stat-value">Source: {acquisition.source || "N/A"}</div>
          <div className="stat-value">Cost: {acquisition.cost || "N/A"}</div>
          <div className="stat-value">Unlock Requirement: {acquisition.unlock_requirement || "N/A"}</div>
        </div>
      )
    );
  };

  const renderDetailedStats = (detailedStats) => {
    if (!detailedStats) return null;

    return (
      <div className="stratagem-stats-section">
        <div className="stat-header">Detailed Stats</div>
        {detailedStats.projectile && (
          <div>
            <h4>Projectile:</h4>
            <div className="stat-value">Caliber: {detailedStats.projectile.caliber}</div>
            <div className="stat-value">Mass: {detailedStats.projectile.mass}</div>
            <div className="stat-value">Initial Velocity: {detailedStats.projectile.initial_velocity}</div>
            <div className="stat-value">Damage: {detailedStats.projectile.damage.standard} (Standard)</div>
          </div>
        )}
        {detailedStats.explosion && (
          <div>
            <h4>Explosion:</h4>
            <div className="stat-value">Damage: {detailedStats.explosion.damage}</div>
            <div className="stat-value">Inner Radius: {detailedStats.explosion.inner_radius}</div>
            <div className="stat-value">Outer Radius: {detailedStats.explosion.outer_radius}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="stratagem-detail-container">
      <div className="wiki-content">
        <h2>Stratagem Details</h2>
        <p>{wikiContent?.summary || "No detailed information available."}</p>
        <h3>Usage</h3>
        <p>{wikiContent?.usage || "No usage information available."}</p>
      </div>

      <div className="stratagem-stats-block">
        <img className="stratagem-image" src={stratagem.image} alt={stratagem.name} />
        <h1 className="stratagem-title">{stratagem.name}</h1>
        <p className="stratagem-category">{stratagem.category}</p>

        {renderFirepower(stratagem.firepower)}
        {renderWeaponHandling(stratagem.weapon_handling)}
        {renderAmmunition(stratagem.ammunition)}
        {renderAcquisition(stratagem.acquisition)}
        {renderDetailedStats(stratagem.detailed_stats)}
      </div>
    </div>
  );
}

export default StratagemDetail;
