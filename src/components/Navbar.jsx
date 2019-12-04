import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage.jsx'

const Navbar = props => {
  // console.log("these are my props:", props)
  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div onClick={toggleMode} className="dark-mode__toggle">
        <div
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
