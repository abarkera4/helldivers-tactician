import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backpackStratagems from "../data/backpackStratagems.json";
import defensiveStratagems from "../data/defensiveStratagems.json";
import eagleStratagems from "../data/eagleStratagems.json";
import orbitalStratagems from "../data/orbitalStratagems.json";
import supportWeaponsStratagems from "../data/supportWeaponsStratagems.json";
import vehicleStratagems from "../data/vehicleStratagems.json";
import stratagemWiki from "../data/stratagemWiki.json";
import ProjectileStats from "../components/ProjectileStats";
import AreaOfEffectStats from "../components/AreaOfEffectStats";
import DamageStats from "../components/DamageStats";
import SpecialEffects from "../components/SpecialEffects";
import FirepowerStats from "../components/FirepowerStats";
import GeneralStats from "../components/GeneralStats";
import DetailsStats from "../components/DetailsStats";
import WeaponHandlingStats from "../components/WeaponHandlingStats";
import AcquisitionStats from "../components/AcquisitionStats";
import AmmunitionStats from "../components/AmmunitionStats";
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

        <GeneralStats stats={stratagem.stats} />
        <FirepowerStats firepower={stratagem.firepower} />
        <WeaponHandlingStats weaponHandling={stratagem.weapon_handling} />
        <AmmunitionStats ammunition={stratagem.ammunition} />
        <AcquisitionStats acquisition={stratagem.acquisition} />
        <DetailsStats details={stratagem.details} />

        {/* Conditionally render ProjectileStats if the data is available */}
        {stratagem.details?.projectile && <ProjectileStats projectile={stratagem.details.projectile} />}

        {/* Conditionally render AreaOfEffectStats if the data is available */}
        {stratagem.details?.area_of_effect && <AreaOfEffectStats areaOfEffect={stratagem.details.area_of_effect} />}

        {/* Conditionally render DamageStats if the data is available */}
        {stratagem.details?.damage && <DamageStats damage={stratagem.details.damage} />}

        {/* Conditionally render SpecialEffects if the data is available */}
        {stratagem.details?.special_effects && <SpecialEffects specialEffects={stratagem.details.special_effects} />}

        {stratagem.requirements && (
          <div className="stratagem-stats-section">
            <div className="stat-header">Requirements</div>
            <div className="stat-value">Cost: {stratagem.requirements.cost}</div>
            <div className="stat-value">Level: {stratagem.requirements.level}</div>
          </div>
        )}

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
