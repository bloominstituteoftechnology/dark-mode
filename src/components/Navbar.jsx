import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';
import { DropDown } from './dropDown.js';

const Navbar = ({coinData} ) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <DropDown coinData={coinData}/>
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
