import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import "./styles.scss";

const App = () => {
  
  return (
    <>
    <Route exact path="/" component={Home} />
    <Route path ="/about" component={About} />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
