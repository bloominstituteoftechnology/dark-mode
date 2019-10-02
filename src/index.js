import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const SetViewMode = (initialValue) => {
  const [darkMode, setDarkMode] = useState(initialValue);

  const toggleMode = (e) => {
    e.preventDefault();

    if(darkMode) {
      setDarkMode(false);
    }else {
      setDarkMode(true);
    }
  };

  return [darkMode, toggleMode];
}

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [mode, setMode] = SetViewMode(false);

  useEffect(() => {
    axios
      .get(
        //"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={mode ? 'App dark-mode' : 'App'}>
      <Navbar mode={mode} setMode={setMode}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
