import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./WeaponDetail.css"; // Assuming you have a corresponding CSS file for styles

function WeaponDetail() {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);

  useEffect(() => {
    const fetchWeaponData = async () => {
      try {
        let filePath = "";
        if (id.startsWith("throw")) {
          filePath = "/src/data/thrownWeapons.json";
        } else if (id.startsWith("sec")) {
          filePath = "/src/data/secondaryWeapons.json";
        } else {
          filePath = "/src/data/primaryWeapons.json";
        }

        const response = await fetch(filePath);
        const data = await response.json();
        const selectedWeapon = data.find((weapon) => weapon.id === id);
        setWeapon(selectedWeapon);
      } catch (error) {
        console.error("Error fetching weapon data:", error);
      }
    };

    fetchWeaponData();
  }, [id]);

  if (!weapon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weapon-detail-container">
      <h1 className="weapon-title">{weapon.name}</h1>
      <img className="weapon-image" src={weapon.image ? weapon.image : "/assets/defaultWeaponImage.webp"} alt={weapon.name} />
      <p className="weapon-category">{weapon.category}</p>

      <div className="weapon-stats-block">
        <div className="weapon-stats-section">
          <h2>Firepower</h2>
          <p>Damage: {weapon.base_stats?.damage || "N/A"}</p>
        </div>

        <div className="weapon-stats-section">
          <h2>Weapon Handling</h2>
          <p>Weapon Traits: {weapon.weapon_traits?.join(", ") || "N/A"}</p>
          <p>Fire Rate: {weapon.base_stats?.fire_rate || "N/A"} RPM</p>
          <p>Recoil: {weapon.base_stats?.recoil || "N/A"}</p>
        </div>

        <div className="weapon-stats-section">
          <h2>Ammunition</h2>
          <p>Ammo Capacity: {weapon.base_stats?.capacity || "N/A"}</p>
          <p>Spare Magazines: {weapon.base_stats?.spare_magazines || "N/A"}</p>
        </div>

        <div className="weapon-stats-section">
          <h2>Acquisition</h2>
          <p>Source: {weapon.source || "N/A"}</p>
          <p>Cost: {weapon.cost || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default WeaponDetail;
