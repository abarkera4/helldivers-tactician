import React, { useState, useEffect } from "react";

function WeaponsPage() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fetch("/data/weapons.json")
      .then((response) => response.json())
      .then((data) => setWeapons(data));
  }, []);

  return (
    <div>
      <h1>Weapons</h1>
      <ul>
        {weapons.map((weapon) => (
          <li key={weapon.id}>
            <a href={`/weapon/${weapon.id}`}>{weapon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeaponsPage;
