import React from "react";

// Helper function to render object keys and values
const renderObjectDetails = (dataObject) => {
  return Object.entries(dataObject).map(([key, value]) => (
    <div key={key} className="stat-value">
      <strong>{key}:</strong> {value}
    </div>
  ));
};

function ProjectileStats({ projectile }) {
  return (
    <div className="weapon-stats-section">
      <div className="stat-header">Projectile Stats</div>
      {renderObjectDetails(projectile)}
    </div>
  );
}

function AreaOfEffectStats({ aoe }) {
  return (
    <div className="weapon-stats-section">
      <div className="stat-header">Area of Effect Stats</div>
      {renderObjectDetails(aoe)}
    </div>
  );
}

function DamageStats({ damage }) {
  return (
    <div className="weapon-stats-section">
      <div className="stat-header">Damage Stats</div>
      {renderObjectDetails(damage)}
    </div>
  );
}

function SpecialEffects({ specialEffects }) {
  return (
    <div className="weapon-stats-section">
      <div className="stat-header">Special Effects</div>
      {renderObjectDetails(specialEffects)}
    </div>
  );
}

// Your StratagemDetail component
function StratagemDetail({ stratagem }) {
  return (
    <div className="stratagem-stats-block">
      {/* Other sections */}

      {stratagem.details?.projectile && <ProjectileStats projectile={stratagem.details.projectile} />}
      {stratagem.details?.aoe_effect && <AreaOfEffectStats aoe={stratagem.details.aoe_effect} />}
      {stratagem.details?.damage && <DamageStats damage={stratagem.details.damage} />}
      {stratagem.details?.special_effects && <SpecialEffects specialEffects={stratagem.details.special_effects} />}

      {/* Other sections */}
    </div>
  );
}

export default StratagemDetail;
