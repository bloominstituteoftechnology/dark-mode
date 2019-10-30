import React from 'react';
import  { useDarkMode }  from './hooks/useDarkMode.js'; 

const Navbar = () => {

  const [darkMode, setDarkMode] = useDarkMode (false);
  
  const toggleDark = e =>{
    e.preventDefault();
    setDarkMode(!darkMode);
  }
 
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleDark}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
