import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import primaryWeapons from "../data/primaryWeapons.json";
import secondaryWeapons from "../data/secondaryWeapons.json";
import thrownWeapons from "../data/thrownWeapons.json";
import weaponWiki from "../data/weaponWiki.json";
import "./WeaponDetail.css";

function WeaponDetail() {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [wikiContent, setWikiContent] = useState(null);

  useEffect(() => {
    let weaponData;
    if (id.startsWith("throw")) {
      weaponData = thrownWeapons;
    } else if (id.startsWith("sec")) {
      weaponData = secondaryWeapons;
    } else {
      weaponData = primaryWeapons;
    }

    const selectedWeapon = weaponData.find((weapon) => weapon.id === id);
    setWeapon(selectedWeapon);

    const selectedWikiContent = weaponWiki.find((content) => content.id === id);
    setWikiContent(selectedWikiContent);
  }, [id]);

  if (!weapon) {
    return <h1>Loading...</h1>;
  }

  // Helper function to get a nested value from the weapon object
  const getWeaponValue = (section, key, defaultValue = "N/A") => {
    return section && section[key] !== undefined ? section[key] : defaultValue;
  };

  const spareAmmo = getWeaponValue(weapon.ammunition, "spare_mags") || getWeaponValue(weapon.ammunition, "spare_rounds", "N/A");

  return (
    <div className="weapon-detail-container">
      <div className="wiki-content">
        <h2>Weapon Details</h2>
        <p>{wikiContent?.summary || "No detailed information available."}</p>
        <h3>Usage</h3>
        <p>{wikiContent?.usage || "No usage information available."}</p>
      </div>

      <div className="weapon-stats-block">
        <img className="weapon-image" src={weapon.image} alt={weapon.name} />
        <h1 className="weapon-title">{weapon.name}</h1>
        <p className="weapon-category">{weapon.category}</p>

        <div className="weapon-stats-section">
          <div className="stat-header">Firepower</div>
          <div className="stat-value">Damage: {getWeaponValue(weapon.firepower, "damage")}</div>
          <div className="stat-value">Penetration Level: {getWeaponValue(weapon.firepower, "max_penetration")}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Weapon Handling</div>
          <div className="stat-value">Fire Rate: {getWeaponValue(weapon.weapon_handling, "fire_rate")}</div>
          <div className="stat-value">Recoil: {getWeaponValue(weapon.weapon_handling, "recoil")}</div>
          <div className="stat-value">Firing Modes: {getWeaponValue(weapon.weapon_handling, "firing_modes")}</div>
          <div className="stat-value">Traits: {weapon.traits?.join(", ") || "N/A"}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Ammunition</div>
          <div className="stat-value">Capacity: {getWeaponValue(weapon.ammunition, "capacity")}</div>
          <div className="stat-value">Spare Ammunition: {spareAmmo}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Acquisition</div>
          <div className="stat-value">Source: {getWeaponValue(weapon.acquisition, "source")}</div>
          <div className="stat-value">Cost: {getWeaponValue(weapon.acquisition, "cost")}</div>
        </div>

        {weapon.details && Object.keys(weapon.details).length > 0 && (
          <div className="weapon-stats-section">
            <div className="stat-header">Details</div>
            {Object.entries(weapon.details).map(([key, value]) => (
              <div key={key} className="stat-value">
                {key.replace(/_/g, " ")}: {typeof value === "object" ? JSON.stringify(value) : value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WeaponDetail;
