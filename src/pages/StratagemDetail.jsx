import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backpackStratagems from "../data/backpackStratagems.json";
import defensiveStratagems from "../data/defensiveStratagems.json";
import eagleStratagems from "../data/eagleStratagems.json";
import orbitalStratagems from "../data/orbitalStratagems.json";
import supportWeaponsStratagems from "../data/supportWeaponStratagems.json";
import vehicleStratagems from "../data/vehicleStratagems.json";
import stratagemWiki from "../data/stratagemWiki.json";
import StatsBlock from "../components/StatsBlock";
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

        <StatsBlock title="General Stats" stats={stratagem.stats} />
        <StatsBlock title="Firepower" stats={stratagem.firepower} />
        <StatsBlock title="Weapon Handling" stats={stratagem.weapon_handling} />
        <StatsBlock title="Ammunition" stats={stratagem.ammunition} />
        <StatsBlock title="Acquisition" stats={stratagem.acquisition} />
        <StatsBlock title="Details" stats={stratagem.details} />

        {stratagem.requirements && <StatsBlock title="Requirements" stats={stratagem.requirements} />}

        {stratagem.strike_pattern && (
          <div className="stratagem-stats-section">
            <div className="stat-header">Strike Pattern</div>
            <img src={stratagem.strike_pattern} alt="Strike Pattern" className="strike-pattern" />
          </div>
        )}
      </div>
    </div>
  );
}

export default StratagemDetail;
