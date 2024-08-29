import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backpackStratagems from "../data/backpackStratagems.json";
import defensiveStratagems from "../data/defensiveStratagems.json";
import eagleStratagems from "../data/eagleStratagems.json";
import orbitalStratagems from "../data/orbitalStratagems.json";
import supportWeaponsStratagems from "../data/supportWeaponStratagems.json";
import vehicleStratagems from "../data/vehicleStratagems.json";
import stratagemWiki from "../data/stratagemWiki.json";
import SupportWeaponStratagemDetails from "../components/SupportWeaponStratagemDetails.jsx";
import OrbitalStratagemDetails from "../components/OrbitalStratagemDetails.jsx";
import EagleStratagemDetails from "../components/EagleStratagemDetails.jsx"; // Assuming this exists
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

  const renderStratagemDetails = () => {
    switch (stratagem.category) {
      case "Support Weapon":
        return <SupportWeaponStratagemDetails {...stratagem} />;
      case "Orbital":
        return <OrbitalStratagemDetails details={stratagem.details} />;
      case "Eagle":
        return <EagleStratagemDetails details={stratagem.details} />;
      // Add more cases here if you have other subcomponents
      default:
        return <p>No detailed information available for this stratagem type.</p>;
    }
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
        <p className="stratagem-category">{stratagem.category || stratagem.type}</p>

        <div className="stratagem-stats-section">
          <div className="stat-header">Traits</div>
          <div className="stat-value">{stratagem.traits?.join(" • ") || "No traits available."}</div>
        </div>

        {renderStratagemDetails()}
      </div>
    </div>
  );
}

export default StratagemDetail;
