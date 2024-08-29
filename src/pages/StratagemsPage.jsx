import React, { useState, useEffect } from "react";
import backpackStratagems from "../data/backpackStratagems.json";
import defensiveEmplacements from "../data/defensiveStratagems.json";
import eagleStrikes from "../data/eagleStratagems.json";
import orbitalStrikes from "../data/orbitalStratagems.json";
import supportWeapons from "../data/supportWeaponStratagems.json";
import vehicles from "../data/vehicleStratagems.json";
import "./StratagemsPage.css";

function StratagemsPage() {
  const [isBackpacksOpen, setIsBackpacksOpen] = useState(false);
  const [isDefensiveOpen, setIsDefensiveOpen] = useState(false);
  const [isEagleOpen, setIsEagleOpen] = useState(false);
  const [isOrbitalOpen, setIsOrbitalOpen] = useState(false);
  const [isSupportWeaponsOpen, setIsSupportWeaponsOpen] = useState(false);
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);

  const [stratagemsLoaded, setStratagemsLoaded] = useState(false);

  const toggleBackpacks = () => setIsBackpacksOpen(!isBackpacksOpen);
  const toggleDefensive = () => setIsDefensiveOpen(!isDefensiveOpen);
  const toggleEagle = () => setIsEagleOpen(!isEagleOpen);
  const toggleOrbital = () => setIsOrbitalOpen(!isOrbitalOpen);
  const toggleSupportWeapons = () => setIsSupportWeaponsOpen(!isSupportWeaponsOpen);
  const toggleVehicles = () => setIsVehiclesOpen(!isVehiclesOpen);

  useEffect(() => {
    setTimeout(() => {
      setStratagemsLoaded(true);
    }, 100);
  }, []);

  const groupStratagemsByCategory = (stratagems) => {
    const stratagemsByCategory = {};

    stratagems.forEach((stratagem) => {
      if (!stratagemsByCategory[stratagem.category]) {
        stratagemsByCategory[stratagem.category] = [];
      }
      stratagemsByCategory[stratagem.category].push(stratagem);
    });

    return stratagemsByCategory;
  };

  const backpackStratagemsByCategory = groupStratagemsByCategory(backpackStratagems);
  const defensiveStratagemsByCategory = groupStratagemsByCategory(defensiveEmplacements);
  const eagleStrikesByCategory = groupStratagemsByCategory(eagleStrikes);
  const orbitalStrikesByCategory = groupStratagemsByCategory(orbitalStrikes);
  const supportWeaponsByCategory = groupStratagemsByCategory(supportWeapons);
  const vehiclesByCategory = groupStratagemsByCategory(vehicles);

  if (!stratagemsLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="stratagems-page-container">
      <div className="stratagems-page">
        <h1>Stratagems</h1>
        <div className="stratagem-columns">
          <div>
            {/* Support Weapons Section */}
            <h2 className="section-title" onClick={toggleSupportWeapons}>
              {isSupportWeaponsOpen ? "▼" : "▶"} Support Weapons
            </h2>
            {isSupportWeaponsOpen && (
              <>
                {Object.keys(supportWeaponsByCategory).map((category) => (
                  <div key={category} className="stratagem-category">
                    <div className="stratagem-list">
                      {supportWeaponsByCategory[category].map((stratagem) => (
                        <a key={stratagem.id} href={`/stratagem/${stratagem.id}`} className="stratagem-item-link">
                          <div className="stratagem-item">
                            {stratagem.image && <img src={stratagem.image} alt={stratagem.name} className="stratagem-image" />}
                            <p className="stratagem-name">{stratagem.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Backpacks Section */}
            <h2 className="section-title" onClick={toggleBackpacks}>
              {isBackpacksOpen ? "▼" : "▶"} Backpacks
            </h2>
            {isBackpacksOpen && (
              <>
                {Object.keys(backpackStratagemsByCategory).map((category) => (
                  <div key={category} className="stratagem-category">
                    <div className="stratagem-list">
                      {backpackStratagemsByCategory[category].map((stratagem) => (
                        <a key={stratagem.id} href={`/stratagem/${stratagem.id}`} className="stratagem-item-link">
                          <div className="stratagem-item">
                            {stratagem.image && <img src={stratagem.image} alt={stratagem.name} className="stratagem-image" />}
                            <p className="stratagem-name">{stratagem.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* Vehicles Section */}
            <h2 className="section-title" onClick={toggleVehicles}>
              {isVehiclesOpen ? "▼" : "▶"} Vehicles
            </h2>
            {isVehiclesOpen && (
              <>
                {Object.keys(vehiclesByCategory).map((category) => (
                  <div key={category} className="stratagem-category">
                    <div className="stratagem-list">
                      {vehiclesByCategory[category].map((stratagem) => (
                        <a key={stratagem.id} href={`/stratagem/${stratagem.id}`} className="stratagem-item-link">
                          <div className="stratagem-item">
                            {stratagem.image && <img src={stratagem.image} alt={stratagem.name} className="stratagem-image" />}
                            <p className="stratagem-name">{stratagem.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div>
            {/* Eagle Strikes Section */}
            <h2 className="section-title" onClick={toggleEagle}>
              {isEagleOpen ? "▼" : "▶"} Eagle Strikes
            </h2>
            {isEagleOpen && (
              <>
                {Object.keys(eagleStrikesByCategory).map((category) => (
                  <div key={category} className="stratagem-category">
                    <div className="stratagem-list">
                      {eagleStrikesByCategory[category].map((stratagem) => (
                        <a key={stratagem.id} href={`/stratagem/${stratagem.id}`} className="stratagem-item-link">
                          <div className="stratagem-item">
                            {stratagem.image && <img src={stratagem.image} alt={stratagem.name} className="stratagem-image" />}
                            <p className="stratagem-name">{stratagem.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Orbital Strikes Section */}
            <h2 className="section-title" onClick={toggleOrbital}>
              {isOrbitalOpen ? "▼" : "▶"} Orbital Strikes
            </h2>
            {isOrbitalOpen && (
              <>
                {Object.keys(orbitalStrikesByCategory).map((category) => (
                  <div key={category} className="stratagem-category">
                    <div className="stratagem-list">
                      {orbitalStrikesByCategory[category].map((stratagem) => (
                        <a key={stratagem.id} href={`/stratagem/${stratagem.id}`} className="stratagem-item-link">
                          <div className="stratagem-item">
                            {stratagem.image && <img src={stratagem.image} alt={stratagem.name} className="stratagem-image" />}
                            <p className="stratagem-name">{stratagem.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Defensive Emplacements Section */}
            <h2 className="section-title" onClick={toggleDefensive}>
              {isDefensiveOpen ? "▼" : "▶"} Defensive Emplacements
            </h2>
            {isDefensiveOpen && (
              <>
                {Object.keys(defensiveStratagemsByCategory).map((category) => (
                  <div key={category} className="stratagem-category">
                    <div className="stratagem-list">
                      {defensiveStratagemsByCategory[category].map((stratagem) => (
                        <a key={stratagem.id} href={`/stratagem/${stratagem.id}`} className="stratagem-item-link">
                          <div className="stratagem-item">
                            {stratagem.image && <img src={stratagem.image} alt={stratagem.name} className="stratagem-image" />}
                            <p className="stratagem-name">{stratagem.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StratagemsPage;
