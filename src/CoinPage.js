import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from 'react-router-dom';

import axios from "axios";

import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import DropdownCoins from "./components/DropdownCoins";

import useDarkMode from "./hooks/useDarkMode";

import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const CoinPage = (props) => {
  // const [coinData, setCoinData] = useState([]);
  // const [darkMode, setDarkMode] = useState(false);
  const { darkMode, setDarkMode, coinData, setCoinData } = props;

  let { coinId } = useParams(); 
  let coin = coinData.find(coinObj => {
    return coinObj.id === coinId
  })
  console.log("coin: ", coin)
  // PICK IT UP HERE... now you have the coin obj.. feed it into the coin chart with linespark  

  console.log("coinId: ", coinId);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {setCoinData(res.data);
        console.log("res.data: ", res.data)
      })
      .catch(err => console.log(err));

  }, []);

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <p>COINPAGE</p>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <DropdownCoins coinData={coinData}/>
      {/* <Chart /> */}
    </div>
  );
};

export default CoinPage;

// sparklineData={coin.sparklineData}