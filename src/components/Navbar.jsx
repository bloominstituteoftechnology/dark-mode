import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleDarkMode = () => {
    console.log("value", darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle" onClick={() => toggleDarkMode()}>
        <div className={darkMode ? "toggle toggled" : "toggle"} />
      </div>
    </nav>
  );
};

export default Navbar;
