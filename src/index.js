import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const GetLocalData = (key) => {
  const mode = localStorage.getItem(key);
  
  if(mode==='true' || mode==='false'){
    return JSON.parse(mode);
  }

  return null;
}

const SetViewMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useState(() => {
    return GetLocalData(key) ? GetLocalData(key) : initialValue;
  });

  const toggleMode = (e) => {
    e.preventDefault();

    if(darkMode) {
      setDarkMode(false);
      localStorage.setItem(key, false);
    } else {
      setDarkMode(true);
      localStorage.setItem(key, true);
    }
  };

  return [darkMode, toggleMode];
}

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [mode, setMode] = SetViewMode('mode',false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
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
