import React from "react";
import Chart from "./Chart";

const Charts = ({coinData, activeCoins}) => {
  console.log(coinData);
  console.log(activeCoins);

  return (
      <div className="charts">
        {coinData.map(coin => {
          if (!activeCoins.includes(coin.symbol)) {
            return (<div key={coin.name}></div>);
          } else {
            return (
                <div className="chart__container" key={coin.name}>
                  <h2 className="coin__title">{coin.name}</h2>
                  <h4 className="coin__symbol">{coin.symbol}</h4>
                  <div className="coin__logo">
                    <img src={coin.image} height="40" alt={coin.name} />
                  </div>
                  <Chart sparklineData={coin.sparkline_in_7d.price} />
                </div>
            );
          }
        })}
      </div>
  );
};
export default Charts;
