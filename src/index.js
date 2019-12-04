import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import CoinCard from "./components/CoinCard";

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
  console.log("index.js, coinData: ", coinData);
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Route exact path="/" render={props => <Charts {...props} coinData={coinData} />}/>
      <Route path="/:id" render={props => <CoinCard {...props} id={props.match.params.id} coinData={coinData} />} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
