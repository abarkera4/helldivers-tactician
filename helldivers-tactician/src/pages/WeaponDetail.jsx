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
    return <div>Loading...</div>;
  }

  const spareAmmo = weapon.base_stats?.spare_magazines ?? weapon.base_stats?.spare_rounds ?? "N/A";

  return (
    <div className="weapon-detail-container">
      <div className="wiki-content">
        <h2>Weapon Details</h2>
        <p>{wikiContent?.summary || "No detailed information available."}</p>
        <h3>Usage</h3>
        <p>{wikiContent?.usage || "No usage information available."}</p>
      </div>

      <div className="weapon-stats-block">
        <img className="weapon-image" src={weapon.image || "/src/assets/defaultWeaponImage.webp"} alt={weapon.name} />
        <h1 className="weapon-title">{weapon.name}</h1>
        <p className="weapon-category">{weapon.category}</p>

        <div className="weapon-stats-section">
          <div className="stat-header">Firepower</div>
          <div className="stat-value">Damage: {weapon.base_stats?.damage || "N/A"}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Weapon Handling</div>
          <div className="stat-value">Traits: {weapon.weapon_traits?.join(", ") || "N/A"}</div>
          <div className="stat-value">Fire Rate: {weapon.base_stats?.fire_rate || "N/A"} RPM</div>
          <div className="stat-value">Recoil: {weapon.base_stats?.recoil || "N/A"}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Ammunition</div>
          <div className="stat-value">Capacity: {weapon.base_stats?.capacity || "N/A"}</div>
          <div className="stat-value">Spare Ammunition: {spareAmmo}</div>
        </div>

        <div className="weapon-stats-section">
          <div className="stat-header">Acquisition</div>
          <div className="stat-value">Source: {weapon.source || "N/A"}</div>
          <div className="stat-value">Cost: {weapon.cost || "N/A"}</div>
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
