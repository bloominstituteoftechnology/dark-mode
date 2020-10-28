import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode";

const Navbar = (props) => {
	// const [darkMode, setDarkMode] = useDarkMode(false);
	const {darkMode, setDarkMode} = props;
  const toggleMode = e => {
    e.preventDefault();
		// props.setDarkMode(!props.darkMode);
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
