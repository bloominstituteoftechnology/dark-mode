import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useLocalStorage from './hooks/UseLocalStorage';

import "./styles.scss";

const initialCoins = ['btc', 'eth', 'bch', 'ltc'];

const App = () => {
  const [coinData, setCoinData] = useState([]);

  const [activeCoins, setActiveCoins] = useLocalStorage('activeCoins',initialCoins);

  const setCoinActive = (symbol, activity) => {
    console.log(activity);
    if (activity===true) {
      setActiveCoins([...activeCoins, symbol]);
    } else {
      setActiveCoins(activeCoins.filter(coin=>coin!==symbol));
    }
  }


  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar coinData={coinData} activeCoins={activeCoins} setCoinActive={setCoinActive} />
      <Charts coinData={coinData} activeCoins={activeCoins} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
