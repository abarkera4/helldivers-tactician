import React from "react";
import "./BackpackStratagemDetails.css";

const BackpackStratagemDetails = ({ acquisition, callInTime, uses, cooldownTime }) => {
  return (
    <div className="backpack-stratagem-details">
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
      <div className="detail-section">
        <h4>Usage Information</h4>
        <ul>
          <li>
            <strong>Call-In Time:</strong> {callInTime || "N/A"}
          </li>
          <li>
            <strong>Uses:</strong> {uses || "N/A"}
          </li>
          <li>
            <strong>Cooldown Time:</strong> {cooldownTime || "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackpackStratagemDetails;
