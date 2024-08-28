import React from "react";

const SupportWeaponStratagemDetails = ({ details, firepower, weaponHandling, ammunition, acquisition }) => {
  if (!details && !firepower && !weaponHandling && !ammunition && !acquisition) return null;

  const renderDetailSection = (title, detailData) => {
    if (!detailData || Object.keys(detailData).length === 0) return null;

    return (
      <div className="detail-section">
        <h4>{title}</h4>
        <ul>
          {Object.entries(detailData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="support-weapon-stratagem-details">
      {renderDetailSection("Firepower", firepower)}
      {renderDetailSection("Weapon Handling", weaponHandling)}
      {renderDetailSection("Ammunition", ammunition)}
      {renderDetailSection("Acquisition", acquisition)}
      {renderDetailSection("Details", details)}
    </div>
  );
};

export default SupportWeaponStratagemDetails;
