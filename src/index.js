import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

// import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import ChartPage from "./components/ChartPage";

import "./styles.scss";

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      

      <Route exact path='/' render={() => <WelcomePage/>} />
      <Route path='/charts' render={props => <ChartPage {...props}/>}/>
      <Route path='/about' render={props => <About {...props}/>}/>
      <Route path='/contact' render={props => <Contact {...props}/>}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>, rootElement);
