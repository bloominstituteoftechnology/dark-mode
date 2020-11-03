import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import useDarkMode from "./hooks/useDarkMode";
import usePrefersDarkMode from "./hooks/usePrefersDarkMode";

import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  //get the user's OS dark mode prefererance from usePrefersDarkMode by
  //useMedia custom hook.
  const userOSPreferance=usePrefersDarkMode();
  console.log('user preferance in index.js=',userOSPreferance);

  const [coinData, setCoinData] = useState([]);
  //initial value is set matching with the user's OS preferance from media query (look the composition of useMedia custom hook)
  const [darkMode, setDarkMode] = useDarkMode(userOSPreferance);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Route exact path="/"> 
       <Charts coinData={coinData}/>
      </Route>
      <Route path="/info">
        <Info />
      </Route>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
<Router>
<App />
</Router>, rootElement);
