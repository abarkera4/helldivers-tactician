import React from "react";

const OrbitalStratagemDetails = ({ details }) => {
  if (!details) return null;

  // Recursive function to render nested objects/arrays
  const renderDetailSection = (title, detailData) => {
    if (typeof detailData === "object" && detailData !== null) {
      return (
        <div className="detail-section" key={title}>
          <h4>{title}</h4>
          <ul>
            {Object.entries(detailData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {renderDetailSection(key, value)}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return detailData;
  };

  return (
    <div className="orbital-stratagem-details">
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="stratagem-part">
          <h3>{key}</h3>
          {renderDetailSection(key, value)}
        </div>
      ))}
    </div>
  );
};

export default OrbitalStratagemDetails;
