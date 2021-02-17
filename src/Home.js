import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import DropdownCoins from "./components/DropdownCoins";

import useDarkMode from "./hooks/useDarkMode";

import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ darkMode, setDarkMode, coinData, setCoinData }) => {

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {setCoinData(res.data);
        console.log("res.data: ", res.data)
      })
      .catch(err => console.log(err));
  }, []); // API call to populate coinData 

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <DropdownCoins coinData={coinData}/>
      <Charts darkMode={darkMode} coinData={coinData} />
    </div>
  );
};

export default Home;
