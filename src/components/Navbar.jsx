import React, { useState } from 'react';
import {useDarkMode} from "../hooks/useDarkMode";
import {Link} from "react-router-dom";


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to='/' className="link">Home</Link>
      <Link to='/charts' className="link">Charts</Link>
      <Link to='/about' className="link">About</Link>
      <Link to='/contact' className="link">Contact</Link>
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
