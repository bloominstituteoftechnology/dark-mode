import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import axios from "axios";


import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

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
      
      <Navbar />
      <Route exact path = "/coins" component={Coins}/>
      <Charts coinData={coinData} />
     
    </div>
  );
};

export default App;
