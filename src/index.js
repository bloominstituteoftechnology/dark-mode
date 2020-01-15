import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  let noticeDarkModeChange = (newValue) => {
    setDarkMode(newValue);
    console.log('setting new darkmode as ' + newValue);
  }
  const [darkMode, setDarkMode] = useDarkMode(noticeDarkModeChange);

  //   useEffect(() => {
  //     if(darkMode === 'dark'){
  //         document.body.classList.add('dark-mode')
  //     }else {
  //         document.body.classList.remove('dark-mode')            
  //     }
  //   }, [darkMode]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode === 'dark' ? 'App dark-mode' : 'App'} >
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


