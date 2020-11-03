import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navlink">
      <h1>Crypto Tracker</h1>
      </Link>
      
      <Link to="/info" className="navlink">
      <h2>Coin List Info</h2>
      </Link>

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
