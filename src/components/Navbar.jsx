import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item brand-link">
          Helldivers Tactician
        </Link>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/weapons" className="navbar-item">
              Weapons
            </Link>
          </li>
          <li>
            <Link to="/stratagems" className="navbar-item">
              Stratagems
            </Link>
          </li>
          <li>
            <Link to="/armor" className="navbar-item">
              Armor
            </Link>
          </li>
          <li>
            <Link to="/perks" className="navbar-item">
              Perks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
