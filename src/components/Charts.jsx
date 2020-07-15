import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, darkMode }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name} - {coin.symbol.toUpperCase()}</h2>
          <span>Price Change Percentage 24h: {coin.price_change_percentage_24h.toFixed(2)}%</span>
          <span>Low 24hs: {coin.low_24h}</span>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} darkMode={darkMode} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
