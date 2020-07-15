import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { useDarkMode } from "./hooks/useDarkMode";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [coinData, setCoinData] = useState([]);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1y"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar toggleMode={toggleMode} darkMode={darkMode} />
      <Charts coinData={coinData} darkMode={darkMode} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
