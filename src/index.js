import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Charts from "./components/Charts";
import Navbar from "./components/NavBar";
import DropdownList from "./components/DropdownList";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import "./styles.scss";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
    axios
  .get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  )
  .then(res => {setCoinList(res.data)
  // console.log(res.data)
}
  )
  .catch(err => console.log(err));
}, []);
  return (
    <div className="App">
      <Navbar />
      <DropdownList coinList= {coinList}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
<App />
</Router>
, rootElement);