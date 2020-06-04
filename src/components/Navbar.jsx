import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../Hooks/UseDarkMode';

const Navbar = () => {
  const [theme, setTheme, toggleMode] = useDarkMode(false)


  useEffect(() => {
    const darkness = document.querySelector('body')
    
    if(theme === true){
    darkness.classList.add('dark-mode') 
    } else {
      darkness.classList.remove('dark-mode')
    }

  }, [theme] )

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={theme ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
