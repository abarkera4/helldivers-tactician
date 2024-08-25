import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/weapons">Weapons</Link>
        </li>
        <li>
          <Link to="/stratagems">Stratagems</Link>
        </li>
        <li>
          <Link to="/armor">Armor</Link>
        </li>
        <li>
          <Link to="/perks">Perks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
