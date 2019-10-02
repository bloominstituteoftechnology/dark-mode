import React, { useState } from 'react';
import { useDarkMode } from './hooks';

const Navbar = () => {
/*   const [darkMode, setDarkMode] = useState(false); */

  const [darkModeNew, setDarkModeNew] = useDarkMode(false)

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkModeNew}
          className={darkModeNew ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
