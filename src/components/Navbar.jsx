import React from 'react';

export default function Navbar (props) {
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          className={props.mode ? 'toggle toggled' : 'toggle'}
          onClick={props.setMode}
        />
      </div>
    </nav>
  );
};