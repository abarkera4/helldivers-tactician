import React from "react";

const SupportWeaponStratagemDetails = ({ details, firepower, weaponHandling, ammunition }) => {
  const renderDetailSection = (title, detailData) => {
    return (
      <div className="detail-section">
        <h4>{title}</h4>
        <ul>
          {typeof detailData === "object" ? (
            Object.entries(detailData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
              </li>
            ))
          ) : (
            <li>{detailData}</li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div className="support-weapon-stratagem-details">
      {firepower && renderDetailSection("Firepower", firepower)}
      {weaponHandling && renderDetailSection("Weapon Handling", weaponHandling)}
      {ammunition && renderDetailSection("Ammunition", ammunition)}
      {details && Object.entries(details).map(([key, value]) => renderDetailSection(key, value))}
    </div>
  );
};

export default SupportWeaponStratagemDetails;
