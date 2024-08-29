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

  const renderWeaponStats = () => {
    if (weapon.type === "Throwable" || weapon.type === "Thrown") {
      return (
        <div className="weapon-stats-section">
          <div className="stat-header">Weapon Details</div>
          <div className="stat-value">Damage: {weapon.damage || "N/A"}</div>
          <div className="stat-value">Penetration: {weapon.penetration || "N/A"}</div>
          <div className="stat-value">Outer Radius: {weapon.outer_radius || "N/A"}</div>
          <div className="stat-value">Fuse Time: {weapon.fuse_time || "N/A"}</div>
        </div>
      );
    } else {
      return (
        <div className="weapon-stats-section">
          <div className="stat-header">Weapon Details</div>
          <div className="stat-value">Standard Damage: {weapon.standard_damage || "N/A"}</div>
          <div className="stat-value">Max Penetration: {weapon.max_penetration || "N/A"}</div>
          <div className="stat-value">Capacity: {weapon.capacity || "N/A"}</div>
          <div className="stat-value">Recoil: {weapon.recoil || "N/A"}</div>
          <div className="stat-value">Fire Rate: {weapon.fire_rate || "N/A"}</div>
          <div className="stat-value">Spare Mags: {weapon.spare_mags || "N/A"}</div>
          <div className="stat-value">Traits: {weapon.traits?.join(" • ") || "N/A"}</div>
          <div className="stat-value">Firing Modes: {weapon.firing_modes?.join(" • ") || "N/A"}</div>
          <div className="stat-value">Scope Options: {weapon.scope_options?.join(", ") || "N/A"}</div>
        </div>
      );
    }
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

        {renderWeaponStats()}

        <div className="weapon-stats-section">
          <div className="stat-header">Procurement</div>
          <div className="stat-value">Source: {weapon.source || "N/A"}</div>
          <div className="stat-value">Cost: {weapon.cost || "N/A"}</div>
        </div>
      </div>
    </div>
  );
}

export default WeaponDetail;
