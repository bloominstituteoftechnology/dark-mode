import React, { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode"; //import the dark mode hook into the NavBar component

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false); // Replace the state hook with our hook, click the toggle, and watch the magic happen!!! 🧙🏻‍
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
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
