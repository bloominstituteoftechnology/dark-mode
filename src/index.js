import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => { 

  return (
    <div className="App">
      {/* <ThemeProvider> */}
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/charts' component={Charts} />
          </Switch>
        </Router>
      {/* </ThemeProvider> */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
