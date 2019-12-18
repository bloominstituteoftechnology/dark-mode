import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [enable, setEnable] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setEnable(!enable);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={enable ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
