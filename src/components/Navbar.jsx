import React from 'react';

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
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
