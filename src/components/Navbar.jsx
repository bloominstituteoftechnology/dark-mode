import React, { useState } from 'react';
import {useDarkMode} from "../hooks/useDarkMode"

const Navbar = (props) => {
  const [toggleMode]= useDarkMode(!props.darkMode);






  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
