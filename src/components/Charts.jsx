import React from "react";
import Chart from "./Chart";
import { isPropertySignature } from "typescript";

const Charts = (props) => {
  const {coinData} = props;
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name} onClick={() => props.history.push(`/${coin.id}`)}>
          <div id="info-container">
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
