import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkValue, setDarkValue] = useDarkMode(false, 'dark-mode');
  const toggleMode = e => {
    e.preventDefault();
    setDarkValue(!darkValue);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkValue ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
