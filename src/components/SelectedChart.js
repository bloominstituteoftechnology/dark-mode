import React, { useEffect } from "react";
import Chart from "./Chart";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Cell
} from "recharts";

const SelectedChart = ({ selectedCoin, match }) => {
  if (selectedCoin) {
    console.log(selectedCoin);
    const criticsScores = [
      "coingecko_score",
      "developer_score",
      "community_score",
      "liquidity_score",
      "public_interest_score"
    ].map(item => {
      return {
        critic: item.split("_").join(" "),
        score: selectedCoin[item]
      };
    });
    const colors = [
      "chartreuse",
      "cornflowerblue",
      "magenta",
      "coral",
      "firebrick"
    ];
    const currentMarketData = Object.keys(
      selectedCoin.market_data.current_price
    ).map(item => {
      return {
        ticker: item,
        price: selectedCoin.market_data.current_price[item]
      };
    });
    return (
      <div style={{ width: 800, margin: "50px auto" }}>
        <h1>{selectedCoin.name}</h1>
        <img
          src={selectedCoin.image.large}
          style={{ height: 300, width: 300 }}
        />
        <p
          style={{ fontSize: 16, marginBottom: 50 }}
          dangerouslySetInnerHTML={{ __html: selectedCoin.description.en }}
        />
        <h2>Critic Scores</h2>
        <BarChart
          style={{ marginTop: 50 }}
          width={730}
          height={250}
          data={criticsScores}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis style={{ fontSize: 16 }} dataKey="critic" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Legend border="1px solid white" />
          <Bar dataKey="score">
            {criticsScores.map((score, i) => (
              <Cell key={`cell-${i}`} fill={colors[i]} />
            ))}
          </Bar>
        </BarChart>

        <BarChart
          layout="vertical"
          style={{ marginTop: 50 }}
          width={500}
          height={1000}
          data={currentMarketData}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis stroke="white" type="number" />
          <YAxis
            style={{ fontSize: 16 }}
            dataKey="ticker"
            stroke="white"
            type="category"
          />
          <Tooltip />
          <Legend border="1px solid white" />
          <Bar dataKey="price" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
  return null;
};

export default SelectedChart;
