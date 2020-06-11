import React from 'react';
import { Route, Link } from 'react-router-dom'
import { useDarkMode } from './hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <Route>
        <h1>Crypto Tracker</h1>
        <div className='links'>
          <Link className='link-item' style={{ color: 'green', width: '25%', fontWeight: 'bold', textDecoration: 'none' }} to='/' >Home</Link>
          <Link className='link-item' style={{ color: 'green', width: '25%', fontWeight: 'bold', textDecoration: 'none' }} to='/charts'>Charts</Link>
        </div>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </Route>
    </nav>
  );
};

export default Navbar;
