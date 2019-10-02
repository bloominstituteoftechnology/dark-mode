import React from 'react';

export default function Navbar (props) {
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={props.setMode}
          className={props.mode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};