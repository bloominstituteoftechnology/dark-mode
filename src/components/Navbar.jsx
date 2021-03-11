import React, { useState } from "react";
import useLocalStorage from "./../hooks/useLocalStorage";
const Navbar = (props) => {
  const [name, setName] = useLocalStorage("darkMode", "");
  const toggleMode = (e) => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
    console.log(name);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
