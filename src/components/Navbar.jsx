import React from "react";

const Navbar = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <div>
        <h1>Cryptotrack</h1>
        <p>Real Time Crypto Currency Tracker</p>
      </div>
      <div className='darkmode'>
        <h4>Dark Mode</h4>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={props.darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
