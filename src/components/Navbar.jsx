import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('DarkMode');

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  console.log('dark mode: ', darkMode);
  
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
