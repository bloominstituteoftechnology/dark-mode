import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, getCoinData }) => {
  return (
    <div className="charts">
      <div className="chart__select-div">
        <label className="chart__select-label">Select your crypto coin</label>
        <select id="chart__select" onChange={e => getCoinData(e.target.value)}>
          <option key={0} unselectable="true">Select Crypto</option>
          <option key={1} value="all">View all</option>
          {coinData.map((coin, i) => <option key={i + 2} value={coin.id}>{coin.name}</option>)}
        </select>
      </div>
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
