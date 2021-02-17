import React from "react";
import Chart from "./Chart";
import "bootstrap/dist/css/bootstrap.css";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map((coin) => (
        <div className="chart__container" key={coin.name}>
          <div>
            <div className="coin_header">
              {" "}
              <div className="coin__logo">
                <h1>{coin.name}</h1>{" "}
                <h4 className="coin__symbol">{coin.symbol}</h4>
                <img src={coin.image} height="40" alt={coin.name} />
              </div>
              <div className="market_cap">
                <h2 style={{ padding: "0 3rem" }}>
                  Market Cap Rank: {coin.market_cap_rank}
                </h2>
                <p>Total Supply: {coin.total_supply}</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start stat-sheet">
              <h2 style={{ alignSelf: "center", marginBottom: "2rem" }}>
                Market Analysis Report
              </h2>
              <h4>Current Price: {coin.current_price}</h4>
              <h4>24 Hr High: {coin.high_24h}</h4>
              <h4>24 Hr Low: {coin.low_24h}</h4>
              <h4>24 Hr Price Change: {coin.price_change_24h}</h4>
              <h4>
                24 Hr Change Percentage: {coin.price_change_percentage_24h}%
              </h4>
              <h4>Market Cap: {coin.market_cap}</h4>
              <h4>24 Hr Market Cap Change: {coin.market_cap_change_24h}</h4>
              <h4>
                24 Hr Market Cap Change %:{" "}
                {coin.market_cap_change_percentage_24h}
              </h4>
              <h4 className="coin_title">
                Circulating Supply: {coin.circulating_supply}
              </h4>
              
            </div> 
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
         <p style={{ alignSelf: "center" }}>
            Last updated: {coin.last_updated}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Charts;
