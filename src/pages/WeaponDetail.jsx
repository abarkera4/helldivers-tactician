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

  const getWeaponValue = (section, key, defaultValue = "N/A") => {
    return section && section[key] !== undefined ? section[key] : defaultValue;
  };

  const spareAmmo = getWeaponValue(weapon.ammunition, "spare_mags") || getWeaponValue(weapon.ammunition, "spare_rounds", "N/A");

  const renderDetailsSection = () => {
    if (!weapon.details) return null;

    return (
      <div className="weapon-stats-section">
        <div className="stat-header">Details</div>
        {weapon.details.tactical_reload_time && <div className="stat-value">Tactical Reload Time: {weapon.details.tactical_reload_time}</div>}
        {weapon.details.reload_time && <div className="stat-value">Reload Time: {weapon.details.reload_time}</div>}
        {weapon.details.scope_options && <div className="stat-value">Scope Options: {weapon.details.scope_options}</div>}
        {weapon.details.attacks && (
          <div className="stat-value">
            <strong>Attacks:</strong>
            {Object.entries(weapon.details.attacks).map(([attackName, attackData]) => (
              <div key={attackName}>
                <strong>{attackName}</strong>:
                {attackData.Projectile && (
                  <div className="attack-detail">
                    <div>Projectile:</div>
                    <ul>
                      {Object.entries(attackData.Projectile).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key.replace(/_/g, " ")}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {attackData.Damage && (
                  <div className="attack-detail">
                    <div>Damage:</div>
                    <ul>
                      {Object.entries(attackData.Damage).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key.replace(/_/g, " ")}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {attackData.Penetration && (
                  <div className="attack-detail">
                    <div>Penetration:</div>
                    <ul>
                      {Object.entries(attackData.Penetration).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key.replace(/_/g, " ")}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {attackData.Special_Effects && (
                  <div className="attack-detail">
                    <div>Special Effects:</div>
                    <ul>
                      {Object.entries(attackData.Special_Effects).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key.replace(/_/g, " ")}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

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

        {renderDetailsSection()}
      </div>
    </div>
  );
}

export default WeaponDetail;
