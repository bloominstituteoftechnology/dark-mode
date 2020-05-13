import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";


import "./scss/index.scss";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [dark, setDark, setDarkMode] = useDarkMode({
    dark:true},"dark-mode")


  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!dark);

  };

  console.log(dark)
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);


  return (
    <div className={dark ? 'App dark-mode' : 'App'}>
      <Navbar toggleMode={toggleMode} dark={dark}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
