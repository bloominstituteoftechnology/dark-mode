import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";

import "./styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

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
  console.log("coinData", coinData);

  return (
    <div className="App">
      <Route exact path="/" render ={ (props) => {return (<Navbar {...props} coinData={coinData} />)}}/>
      <Route exact path="/" render ={(props) => {return (<Charts {...props} coinData={coinData} />)}}/>
      <Route  path ="/coins/:id" component= {Chart}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  rootElement
  );
