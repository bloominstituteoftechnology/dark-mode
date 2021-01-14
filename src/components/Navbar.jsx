import React, { useState } from 'react';

const Navbar = (props) => {
  const result = localStorage.getItem('dark')
    console.log(result)
  const toggleMode = e => {
    e.preventDefault();
    
    props.setDarkMode(!props.darkMode);
    localStorage.setItem('dark', !props.darkmode)
    
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={ result === 'true' ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
