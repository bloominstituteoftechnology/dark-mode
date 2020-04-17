import React, { useState } from 'react';
import useDarkMode from './hooks/useDarkMode';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <h1>Crypto Tracker</h1>
        <NavLink className='navLink' to='/'>
          Main
        </NavLink>
        <NavLink className='navLink' to='/random'>
          Facts
        </NavLink>
      </div>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
