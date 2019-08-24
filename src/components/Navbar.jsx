import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  
  const toggleMode = e => {
    e.preventDefault();

    setDarkMode(!darkMode);
    //setting darkmode from above to opposite of what it is currently on click
  };


  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
            //on click firing the function above that sets darkmode to what ever the opposite of it is
          className={darkMode ? 'toggle toggled' : 'toggle'}
          //variablename = (condition) ? value1:value2 
        />
      </div>
    </nav>
  );
};

export default Navbar;
