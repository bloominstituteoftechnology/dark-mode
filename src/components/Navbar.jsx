import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode.js';

import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
<<<<<<< HEAD
  // const [darkMode, setDarkMode] = useState(false);
=======
>>>>>>> 932ecd74f8f44ad618702a5321a51fa91b3af563
  const [darkMode, setDarkMode] = useDarkMode(false);
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
