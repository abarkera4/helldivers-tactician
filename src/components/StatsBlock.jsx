import React from "react";

const StatsBlock = ({ title, stats }) => {
  if (!stats || typeof stats !== "object" || Object.keys(stats).length === 0) return null;

  return (
    <div className="stats-block">
      <div className="stat-header">{title}</div>
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="stat-value">
          {key.replace(/_/g, " ").toUpperCase()}:{/* Handle cases where the value is an object */}
          {typeof value === "object" && !Array.isArray(value) ? (
            <div>
              {Object.entries(value).map(([subKey, subValue]) => (
                <div key={subKey}>
                  <strong>{subKey.replace(/_/g, " ").toUpperCase()}:</strong> {subValue}
                </div>
              ))}
            </div>
          ) : (
            <span>{value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsBlock;
