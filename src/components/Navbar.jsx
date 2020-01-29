import React, { useState } from 'react';

import useLocalStorge from "../hooks/useLocalStorage";

import darkMode from "./useDarkMode";


const Navbar = () => {
  const [darkMode, setDarkMode] = useLocalStorge(false);
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
