import React from "react";

const VehicleStratagemDetails = ({ firepower, acquisition }) => {
  if (!firepower && !acquisition) return null;

  const renderFirepowerSection = () => {
    if (!firepower) return null;

    return (
      <div className="detail-section">
        <h4>Firepower</h4>
        {Object.entries(firepower).map(([arm, details]) => (
          <div key={arm} className="firepower-arm">
            <h5>{arm.charAt(0).toUpperCase() + arm.slice(1)}</h5>
            <ul>
              {Object.entries(details).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/_/g, " ")}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderAcquisitionSection = () => {
    if (!acquisition) return null;

    return (
      <div className="detail-section">
        <h4>Acquisition</h4>
        <ul>
          {Object.entries(acquisition).map(([key, value]) => (
            <li key={key}>
              <strong>{key.replace(/_/g, " ")}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="vehicle-stratagem-details">
      {renderFirepowerSection()}
      {renderAcquisitionSection()}
    </div>
  );
};

export default VehicleStratagemDetails;
