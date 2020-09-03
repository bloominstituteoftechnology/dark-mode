import React from 'react';
import useDarkMode from '../hooks/usedarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();

    setDarkMode(!darkMode);
  };
  console.log(darkMode)
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
