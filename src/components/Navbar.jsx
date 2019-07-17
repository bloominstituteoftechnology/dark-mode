import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = ({ coinData, selectCoin, selectAll }) => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const clickHandler = e => {
    e.preventDefault();
    selectCoin(e.target.value);
  };

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <form>
        <button type="button" onClick={selectAll}>
          All
        </button>
        {coinData.map(crypto => (
          <button type="button" onClick={clickHandler} value={crypto.id}>
            {crypto.name}
          </button>
        ))}
      </form>

      <div onClick={toggleMode} className="dark-mode__toggle">
        <div className={darkMode ? "toggle toggled" : "toggle"} />
      </div>
    </nav>
  );
};

export default Navbar;
