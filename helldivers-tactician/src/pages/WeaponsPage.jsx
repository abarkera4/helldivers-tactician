import React from "react";
import primaryWeapons from "../data/primaryWeapons.json";
import secondaryWeapons from "../data/secondaryWeapons.json";
import thrownWeapons from "../data/thrownWeapons.json";

function WeaponsPage() {
  const weapons = [...primaryWeapons, ...secondaryWeapons, ...thrownWeapons];

  return (
    <div>
      <h1>Weapons</h1>
      <h2>Primary Weapons</h2>
      <ul>
        {primaryWeapons.map((weapon) => (
          <li key={weapon.id}>
            <a href={`/weapon/${weapon.id}`}>{weapon.name}</a>
          </li>
        ))}
      </ul>
      <h2>Secondary Weapons</h2>
      <ul>
        {secondaryWeapons.map((weapon) => (
          <li key={weapon.id}>
            <a href={`/weapon/${weapon.id}`}>{weapon.name}</a>
          </li>
        ))}
      </ul>
      <h2>Throwable Weapons</h2>
      <ul>
        {thrownWeapons.map((weapon) => (
          <li key={weapon.id}>
            <a href={`/weapon/${weapon.id}`}>{weapon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeaponsPage;
