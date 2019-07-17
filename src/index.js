import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Coin from "./components/Coin";

import "./styles.css";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  const [specificCoinData, setSpecificCoinData] = useState({});
  const [specificCoin, setSpecificCoin] = useState("");

  const selectCoin = coin => {
    setSpecificCoin(coin);
  };

  const selectAll = () => {
    setSpecificCoin("");
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${specificCoin}?tickers=true&market_data=true&sparkline=true`
      )
      .then(res => {
        console.log(res.data);
        setSpecificCoinData(res.data);
      })
      .catch(err => console.log(err));
  }, [specificCoin]);

  return (
    <div className="App">
      <Navbar
        coinData={coinData}
        selectCoin={selectCoin}
        selectAll={selectAll}
      />
      {specificCoin ? (
        <Coin specificCoinData={specificCoinData} />
      ) : (
        <Charts coinData={coinData} />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
