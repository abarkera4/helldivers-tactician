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

  const spareAmmo = weapon.ammunition?.spare_magazines ?? weapon.ammunition?.spare_rounds ?? "N/A";

  const renderAttackDetails = (attackName, attackData) => (
    <div key={attackName}>
      <strong>{attackName}:</strong>
      <ul>
        {typeof attackData === "object" && !Array.isArray(attackData)
          ? Object.entries(attackData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {JSON.stringify(value)}
              </li>
            ))
          : attackData}
      </ul>
    </div>
  );

  const renderDetailsSection = () => {
    if (!weapon.details) return null;

    return (
      <div className="weapon-stats-section">
        <div className="stat-header">Details</div>
        {weapon.details.tactical_reload_time && <div className="stat-value">Tactical Reload Time: {weapon.details.tactical_reload_time}</div>}
        {weapon.details.reload_time && <div className="stat-value">Reload Time: {weapon.details.reload_time}</div>}
        {weapon.details.scope_options && <div className="stat-value">Scope Options: {Array.isArray(weapon.details.scope_options) ? weapon.details.scope_options.join(", ") : weapon.details.scope_options}</div>}
        {weapon.details.attacks && (
          <div className="stat-value">
            <strong>Attacks:</strong>
            {Array.isArray(weapon.details.attacks) ? (
              weapon.details.attacks.map((attackData, index) => renderAttackDetails(`Attack ${index + 1}`, attackData))
            ) : typeof weapon.details.attacks === "object" ? (
              Object.entries(weapon.details.attacks).map(([attackName, attackData]) => renderAttackDetails(attackName, attackData))
            ) : (
              <div>{weapon.details.attacks}</div>
            )}
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
          <div className="stat-value">Damage: {weapon.firepower?.damage || weapon.firepower?.standard_damage || "N/A"}</div>
          <div className="stat-value">Penetration Level: {weapon.firepower?.max_penetration || weapon.firepower?.penetration_level || "N/A"}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Weapon Handling</div>
          <div className="stat-value">Fire Rate: {weapon.weapon_handling?.fire_rate || "N/A"}</div>
          <div className="stat-value">Recoil: {weapon.weapon_handling?.recoil || "N/A"}</div>
          <div className="stat-value">Traits: {weapon.traits?.join(", ") || "N/A"}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Ammunition</div>
          <div className="stat-value">Capacity: {weapon.ammunition?.capacity || weapon.ammunition?.ammo_capacity || "N/A"}</div>
          <div className="stat-value">Spare Ammunition: {spareAmmo}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Acquisition</div>
          <div className="stat-value">Source: {weapon.acquisition?.source || "N/A"}</div>
          <div className="stat-value">Cost: {weapon.acquisition?.cost || "N/A"}</div>
        </div>

        {renderDetailsSection()}

        {weapon.additional_traits && weapon.additional_traits.length > 0 && (
          <div className="weapon-stats-section">
            <div className="stat-header">Additional Traits</div>
            {weapon.additional_traits.map((trait, index) => (
              <div key={index} className="stat-value">
                {trait.name}: {trait.description}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WeaponDetail;
