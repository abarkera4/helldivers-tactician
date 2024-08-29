import React from "react";

const SupportWeaponStratagemDetails = ({ details, firepower, weaponHandling, ammunition, acquisition }) => {
  console.log("Support Weapon Details: ", details);
  console.log("Firepower: ", firepower);
  console.log("Weapon Handling: ", weaponHandling);
  console.log("Ammunition: ", ammunition);
  console.log("Acquisition: ", acquisition);

  if (!details && !firepower && !weaponHandling && !ammunition && !acquisition) return null;

  const renderDetailSection = (title, detailData) => {
    if (!detailData || Object.keys(detailData).length === 0) return null;

    return (
      <div className="detail-section">
        <h4>{title}</h4>
        <ul>
          {Object.entries(detailData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {typeof value === "object" && !Array.isArray(value) && value !== null ? JSON.stringify(value) : value || "N/A"}
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
