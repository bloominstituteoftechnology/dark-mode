import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import darkMode from './hooks/darkMode';

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  //const [darkMode, setDarkMode] = useState(false);
  const [getValue, set] = darkMode();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    
    <div className={getValue ? "dark-mode App" : "App"}>
      {console.log(getValue)}
      <Navbar darkMode={getValue} setDarkMode={set} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
