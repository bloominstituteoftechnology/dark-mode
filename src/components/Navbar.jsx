import React from 'react';
import { useDarkMode } from './hooks';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [darkModeNew, setDarkModeNew] = useDarkMode(true)
  console.log(darkModeNew)

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Home</NavLink>
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
