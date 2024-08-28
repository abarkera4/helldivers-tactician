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

  // Adjust according to normalized structure
  const spareAmmo = weapon.ammunition?.spare_magazines ?? weapon.ammunition?.spare_rounds ?? "N/A";

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
          <div className="stat-value">Damage: {weapon.firepower?.damage || "N/A"}</div>
          <div className="stat-value">Penetration Level: {weapon.firepower?.penetration_level || "N/A"}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Weapon Handling</div>
          <div className="stat-value">Fire Rate: {weapon.weapon_handling?.fire_rate || "N/A"}</div>
          <div className="stat-value">Recoil: {weapon.weapon_handling?.recoil || "N/A"}</div>
          <div className="stat-value">Traits: {weapon.traits?.join(", ") || "N/A"}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Ammunition</div>
          <div className="stat-value">Capacity: {weapon.ammunition?.ammo_capacity || "N/A"}</div>
          <div className="stat-value">Spare Ammunition: {spareAmmo}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Acquisition</div>
          <div className="stat-value">Source: {weapon.acquisition?.source || "N/A"}</div>
          <div className="stat-value">Cost: {weapon.acquisition?.cost || "N/A"}</div>
        </div>

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
