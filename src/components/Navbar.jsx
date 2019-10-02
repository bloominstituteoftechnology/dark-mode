
//Removed { useState } from import React
import React from 'react';
import { useDarkMode } from "./hooks/useDarkMode";

const Navbar = () => {
  // The state hook here returns a darkMode value, and a setDarkMode function. Isn't that exactly what our useDarkMode hook returns as well? Replace the state hook with our hook, click the toggle, and watch the magic happen!!!
  const [darkMode, setDarkMode] = useDarkMode(false); // useState(false);
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
