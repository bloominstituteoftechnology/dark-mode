import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";
// import components
import Navbar from "./components/Navbar";
import DropdownCoins from "./components/DropdownCoins";
import Stats from "./components/Stats";
import Chart from "./components/Chart";
// import hooks
import useDarkMode from "./hooks/useDarkMode";
// import material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import scss & bootsrap
import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const CoinPage = ({ darkMode, setDarkMode, coinData, setCoinData }) => {

  let { coinId } = useParams(); 
  let coinObj = coinData.find(coinObj => {
    return coinObj.id === coinId
  }) // get coinObj from coinId & useParams()

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {setCoinData(res.data);
        console.log("res.data: ", res.data)
      })
      .catch(err => console.log(err));

  }, []); // API call to populate data for indiv coinObj


  if (coinObj) {
    return (
      <div className={darkMode ? "dark-mode App" : "App"}>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h4" color="inherit">
              {(coinObj.symbol).toUpperCase()}
              
            </Typography>
            <DropdownCoins coinData={coinData}/>
          </Toolbar>
        </AppBar>

        <Stats coinObj={coinObj}/>

        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h4" color="inherit">
              {(coinObj.symbol).toUpperCase()}
            </Typography>
          </Toolbar>
        </AppBar>

        <Chart sparklineData={coinObj.sparkline_in_7d.price}/>
      </div>
    );
  }
  else {
    return <div>Not defined</div>
  }
};

export default CoinPage;