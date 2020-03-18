import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, useHistory, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import LandingPage from "./LandingPage";
import SelectedChart from "./components/SelectedChart";

import "./styles.scss";

const App = (props) => {
  const [coinData, setCoinData] = useState([]);
  const [ selectedCoin, setSelectedCoin ] = useState()
  let history = useHistory()
  let browserHistory = createBrowserHistory()
  let location =useLocation()
  useEffect(() => {
    const coinId = location.pathname.split("/")[2]
    if (coinId) {
      getCoinData(coinId)
    }
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  
  const getCoinData = useCallback(
    (id) => {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        )
        .then(res => {
            setSelectedCoin(res.data)
            history.push(`/charts/${id}`)
          })
        .catch(err => console.log(err));
      },[]
  )
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/charts" component={() => <Charts coinData={coinData} getCoinData={getCoinData} />} />
      <Route path="/charts/:id" component={(props) => <SelectedChart {...props} selectedCoin={selectedCoin} getCoinData={getCoinData}/>} />
      <Route exact path="/" component={LandingPage} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
