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

        <div className="stratagem-stats-section">
          <div className="stat-header">Firepower</div>
          <div className="stat-value">Damage: {stratagem.firepower?.damage || "N/A"}</div>
          <div className="stat-value">Penetration Level: {stratagem.firepower?.penetration_level || stratagem.firepower?.penetration || "N/A"}</div>
        </div>

        <div className="stratagem-stats-section">
          <div className="stat-header">Weapon Handling</div>
          <div className="stat-value">Fire Modes: {stratagem.weapon_handling?.fire_modes || "N/A"}</div>
          <div className="stat-value">Cooldown: {stratagem.weapon_handling?.cooldown || stratagem.cooldown_time || "N/A"}</div>
        </div>

        <div className="stratagem-stats-section">
          <div className="stat-header">Ammunition</div>
          <div className="stat-value">Ammo Capacity: {stratagem.ammunition?.ammo_capacity || stratagem.ammunition?.capacity || "N/A"}</div>
          <div className="stat-value">Spare Clips/Rounds: {stratagem.ammunition?.spare_clips || stratagem.ammunition?.spare_rounds || "N/A"}</div>
        </div>

        <div className="stratagem-stats-section">
          <div className="stat-header">Acquisition</div>
          <div className="stat-value">Source: {stratagem.acquisition?.source || "N/A"}</div>
          <div className="stat-value">Cost: {stratagem.acquisition?.cost || "N/A"}</div>
        </div>

        {stratagem.extra_info && stratagem.extra_info.length > 0 && (
          <div className="stratagem-stats-section">
            <div className="stat-header">Additional Information</div>
            {stratagem.extra_info.map((info, index) => (
              <div key={index} className="stat-value">
                {info}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StratagemDetail;
