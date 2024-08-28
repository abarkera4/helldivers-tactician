import React from "react";

const EagleStratagemDetails = ({ details }) => {
  if (!details) return null;

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
    <div className="eagle-stratagem-details">
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="stratagem-part">
          {renderDetailSection(key, value)}
        </div>
      ))}
    </div>
  );
};

export default EagleStratagemDetails;
