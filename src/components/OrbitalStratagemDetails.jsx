import React from "react";

const OrbitalStratagemDetails = ({ details }) => {
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
    <div className="orbital-stratagem-details">
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="stratagem-part">
          <h3>{key}</h3>
          {typeof value === "object" ? Object.entries(value).map(([subKey, subValue]) => renderDetailSection(subKey, subValue)) : renderDetailSection(key, { [key]: value })}
        </div>
      ))}
    </div>
  );
};

export default OrbitalStratagemDetails;
