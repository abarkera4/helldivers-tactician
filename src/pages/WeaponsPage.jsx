import React, { useState, useEffect } from "react";
import primaryWeapons from "../data/primaryWeapons.json";
import secondaryWeapons from "../data/secondaryWeapons.json";
import thrownWeapons from "../data/thrownWeapons.json";
import "./WeaponsPage.css";

function WeaponsPage() {
  const [isPrimaryOpen, setIsPrimaryOpen] = useState(true);
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(true);
  const [isThrowableOpen, setIsThrowableOpen] = useState(true);

  const [weaponsLoaded, setWeaponsLoaded] = useState(false);

  const togglePrimary = () => setIsPrimaryOpen(!isPrimaryOpen);
  const toggleSecondary = () => setIsSecondaryOpen(!isSecondaryOpen);
  const toggleThrowable = () => setIsThrowableOpen(!isThrowableOpen);

  useEffect(() => {
    // Simulate a data loading delay
    setTimeout(() => {
      setWeaponsLoaded(true);
    }, 100); // Adjust this delay as necessary
  }, []);

  const groupWeaponsByCategory = (weapons) => {
    const weaponsByCategory = {};

    weapons.forEach((weapon) => {
      if (!weaponsByCategory[weapon.category]) {
        weaponsByCategory[weapon.category] = [];
      }
      weaponsByCategory[weapon.category].push(weapon);
    });

    return weaponsByCategory;
  };

  const primaryWeaponsByCategory = groupWeaponsByCategory(primaryWeapons);
  const secondaryWeaponsByCategory = groupWeaponsByCategory(secondaryWeapons);
  const thrownWeaponsByCategory = groupWeaponsByCategory(thrownWeapons);

  if (!weaponsLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="weapons-page-container">
      <div className="weapons-page">
        <h1>Weapons</h1>

        {/* Primaries Section */}
        <h2 className="section-title" onClick={togglePrimary}>
          {isPrimaryOpen ? "▼" : "▶"} Primary Weapons
        </h2>
        {isPrimaryOpen && (
          <>
            {Object.keys(primaryWeaponsByCategory).map((category) => (
              <div key={category} className="weapon-category">
                <h3 className="weapon-category-title">{category}</h3>
                <div className="weapon-list">
                  {primaryWeaponsByCategory[category].map((weapon) => (
                    <a key={weapon.id} href={`/weapon/${weapon.id}`} className="weapon-item-link">
                      <div className="weapon-item">
                        {weapon.image && <img src={weapon.image} alt={weapon.name} className="weapon-image" />}
                        <p className="weapon-name">{weapon.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {/* Secondaries Section */}
        <h2 className="section-title" onClick={toggleSecondary}>
          {isSecondaryOpen ? "▼" : "▶"} Secondary Weapons
        </h2>
        {isSecondaryOpen && (
          <>
            {Object.keys(secondaryWeaponsByCategory).map((category) => (
              <div key={category} className="weapon-category">
                <h3 className="weapon-category-title">{category}</h3>
                <div className="weapon-list">
                  {secondaryWeaponsByCategory[category].map((weapon) => (
                    <a key={weapon.id} href={`/weapon/${weapon.id}`} className="weapon-item-link">
                      <div className="weapon-item">
                        {weapon.image && <img src={weapon.image} alt={weapon.name} className="weapon-image" />}
                        <p className="weapon-name">{weapon.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {/* Throwables Section */}
        <h2 className="section-title" onClick={toggleThrowable}>
          {isThrowableOpen ? "▼" : "▶"} Throwable Weapons
        </h2>
        {isThrowableOpen && (
          <>
            {Object.keys(thrownWeaponsByCategory).map((category) => (
              <div key={category} className="weapon-category">
                <h3 className="weapon-category-title">{category}</h3>
                <div className="weapon-list">
                  {thrownWeaponsByCategory[category].map((weapon) => (
                    <a key={weapon.id} href={`/weapon/${weapon.id}`} className="weapon-item-link">
                      <div className="weapon-item">
                        {weapon.image && <img src={weapon.image} alt={weapon.name} className="weapon-image" />}
                        <p className="weapon-name">{weapon.name}</p>
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
  );
}

export default WeaponsPage;
