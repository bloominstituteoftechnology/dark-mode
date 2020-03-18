import React, { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div style={{ display: "flex", alignItems: "center", width: "40%", justifyContent: "space-evenly"}}>
      <h1>Crypto Tracker</h1>
        <Link style={{ color: "white", fontSize: 18, textDecoration: "none", marginLeft: 10 }} to="/">Home</Link>
        <Link style={{ color: "white", fontSize: 18, textDecoration: "none", marginLeft: 10 }} to="/charts">Charts</Link>
      </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
