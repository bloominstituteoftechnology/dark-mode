import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [enable, setEnable] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setEnable(!enable);
  };

  const karatHandler = () => {
    console.log("clicked Me!");
  };

  return (
    <Router>
      <nav className="navbar">
        <h1>Crypto Tracker</h1>
        <div className="coin-option">
          <label htmlFor="coins">Select Currency:</label>

          <select id="coins">
            <option value="placeholder">Select...</option>
            <option value="Karatgold Coin" onClick={karatHandler}>
              Karatgold Coin
            </option>
          </select>
        </div>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={enable ? "toggle toggled" : "toggle"}
          />
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
