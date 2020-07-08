import React, { useEffect } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log('darkMode', darkMode);
  };
  useEffect(() => {
    darkMode ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
  }, [darkMode, setDarkMode]);

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
