import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo"><i>"Bhaskar Tours & Travels"</i></div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Packages</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
