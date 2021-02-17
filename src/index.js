import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import CoinPage from "./CoinPage";

import useDarkMode from "./hooks/useDarkMode";

import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);

  useDarkMode(darkMode); // returning [storedValue, setValue]

  return (
    <Switch>

      <Route exact path='/coins/:coinId'>
        <CoinPage darkMode={darkMode} setDarkMode={setDarkMode} coinData={coinData} setCoinData={setCoinData}/>
      </Route>  

      <Route exact path={'/'}>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} coinData={coinData} setCoinData={setCoinData} />
      </Route>

    </Switch>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);