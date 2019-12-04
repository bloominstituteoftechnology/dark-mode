import React from 'react';
import  { useDarkMode }  from './hooks/useDarkMode.js'; 
import { Link } from "react-router-dom";



const Navbar = () => {

  const [darkMode, setDarkMode] = useDarkMode (false);
  
  const toggleDark = e =>{
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>

      <Link to="/">
        <button >
          Home
        </button>
        </Link>

      <Link to="/coins">
        <button >
          Coins
        </button>
        </Link>
       
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
