import React from "react";

const SupportWeaponStratagemDetails = ({ details }) => {
  if (!details) return null;

  const renderDetailSection = (title, detailData) => {
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
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="stratagem-part">
          <h3>{key}</h3>
          {renderDetailSection(key, value)}
        </div>
      ))}
    </div>
  );
};

export default SupportWeaponStratagemDetails;
