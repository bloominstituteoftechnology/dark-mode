import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useDarkMode from './hooks/useDarkMode';

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);

  useDarkMode(darkMode);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=15&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }, []);
  return (
  
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>   
    
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
