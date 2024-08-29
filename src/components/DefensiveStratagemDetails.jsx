import React from "react";
import "./DefensiveStratagemDetails.css";

const DefensiveStratagemDetails = ({ firepower, weaponHandling, acquisition }) => {
  return (
    <div className="defensive-stratagem-details">
      <div className="detail-section">
        <h4>Firepower</h4>
        <ul>
          {firepower &&
            Object.entries(firepower).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/_/g, " ")}:</strong> {value}
              </li>
            ))}
        </ul>
      </div>

      <div className="detail-section">
        <h4>Weapon Handling</h4>
        <ul>
          {weaponHandling &&
            Object.entries(weaponHandling).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/_/g, " ")}:</strong> {value}
              </li>
            ))}
        </ul>
      </div>

      <div className="detail-section">
        <h4>Acquisition</h4>
        <ul>
          <li>
            <strong>Source:</strong> {acquisition?.source || "Unknown"}
          </li>
          <li>
            <strong>Unlock Requirement:</strong> {acquisition?.unlock_requirement || "None"}
          </li>
          <li>
            <strong>Cost:</strong> {acquisition?.cost || "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefensiveStratagemDetails;
