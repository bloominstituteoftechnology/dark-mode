import React from 'react';
import useDarkMode from "../Hooks/useDarkMode";

const Navbar = () => {

  const initialTheme ={
    darkMode: false
  }
  const [values, toggleMode ] =useDarkMode('darkMode', initialTheme)
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={values.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
