import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from 'react-router-dom';

import axios from "axios";

import Navbar from "./components/Navbar";
import DropdownCoins from "./components/DropdownCoins";
import Stats from "./components/Stats";
import Chart from "./components/Chart";


import useDarkMode from "./hooks/useDarkMode";


// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const CoinPage = (props) => {
  // const [coinData, setCoinData] = useState([]);
  // const [darkMode, setDarkMode] = useState(false);
  const { darkMode, setDarkMode, coinData, setCoinData } = props;

  let { coinId } = useParams(); 
  let coinObj = coinData.find(coinObj => {
    return coinObj.id === coinId
  })

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  // }));

  console.log("coinId: ", coinId);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {setCoinData(res.data);
        console.log("res.data: ", res.data)
      })
      .catch(err => console.log(err));

  }, []);

  // className={classes.menuButton}

  if (coinObj) {
    return (
      <div className={darkMode ? "dark-mode App" : "App"}>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        

        {/* <div className={classes.root}> */}
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start"  color="inherit" aria-label="menu">

          </IconButton>
          <Typography variant="h4" color="inherit">
            {(coinObj.symbol).toUpperCase()}
            
          </Typography>
          <DropdownCoins coinData={coinData}/>
        </Toolbar>
      </AppBar>
    {/* </div> */}
        <Stats coinObj={coinObj}/>
        <Chart sparklineData={coinObj.sparkline_in_7d.price}/>
      </div>
    );
  }
  else {
    return <div>Not defined</div>
  }


};

export default CoinPage;

// sparklineData={coin.sparklineData}