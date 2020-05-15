import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// import {useLocalStorage} from './hooks/useLocalStorage';
import {useDarkMode} from './hooks/useDarkMode';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([])
  const [useDark, setDark] = useDarkMode();
  const [darkClass, setDarkClass] = useState('none');

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        console.log(res.data);
        setCoinData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if(useDark){
      setDarkClass('dark-mode');
      console.log('Dark Class is working');
    } else {
      setDarkClass('none')
    }
  }, [useDark]);

  return (
    <div className={darkClass}>
      <Navbar useDark={useDark} setDark={setDark}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
