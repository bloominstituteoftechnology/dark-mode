import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./style.css";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [coinData, setCoinData] = useLocalStorage("coin info", []);
  const [darkMode, setDarkMode] = useLocalStorage("dark mode", false);

  // I actually modified this code a bit. I opted to push and retrieve the value of coindata to and from localStorage. Doing this results in MUCH faster refresh times. During testing the XHR request took 712ms to complete whereas the same info can be accessed and then pushed from loacalStorage in just over 1.3ms. This means that by saving the values to localStorage and pulling data from it (if it exists) we make our app loading over 600 times faster. Because we call the useEffect with our dependencies this DOES mean that the useEffect hook will double run on initial load of the application; however upon running the second time it will just return and not cause an infinite loading error.
  useEffect(() => {
    if (coinData.length < 1) {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then((res) => setCoinData(res.data))
        .catch((err) => console.log(err));
    } else {
      return;
    }
  }, [coinData.length, setCoinData]);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
