import React from 'react';
import { useDarkMode } from '../hooks/DarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkmode');
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
