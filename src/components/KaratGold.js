import React, { useEffect } from "react";
import axios from "axios";

const KaratGold = () => {
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/karatgold-coin")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>KaratGold Coin</h1>
    </div>
  );
};

export default KaratGold;
