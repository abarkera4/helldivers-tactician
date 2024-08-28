import React from "react";

const EagleStratagemDetails = ({ details }) => {
  if (!details) return null;

  const renderDetailSection = (title, detailData) => {
    return (
      <div className="detail-section">
        <h4>{title}</h4>
        <ul>
          {Object.entries(detailData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return <div className="eagle-stratagem-details">{Object.entries(details).map(([key, value]) => renderDetailSection(key, { [key]: value }))}</div>;
};

export default EagleStratagemDetails;
