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
} from "recharts"

const SelectedChart = ({ selectedCoin, match }) => {
    if (selectedCoin) {
        console.log(selectedCoin);
        const criticsScores = ["coingecko_score", "developer_score", "community_score", "liquidity_score", "public_interest_score"].map((item) => {
            return {
                critic: item,
                score: selectedCoin[item]
            }
        })
        console.log(criticsScores)
        const colors = ["green", "blue", "red", "yellow", "orange"]
    return (
      <div style={{ width: 800, margin: "50px auto" }}>
        <h1>{selectedCoin.name}</h1>
        <img
          src={selectedCoin.image.large}
          style={{ height: 300, width: 300 }}
        />
        <p
          style={{ fontSize: 16 }}
          dangerouslySetInnerHTML={{ __html: selectedCoin.description.en }}
        />
        <BarChart style={{ marginTop: 50 }} width={730} height={250} data={criticsScores}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="critic" stroke="white"/>
          <YAxis stroke="white"/>
          <Tooltip />
          <Legend border='1px solid white' />
          {criticsScores.map((score, i) => <Cell key={`cell-${i}`} stroke={colors[i]} />)}
          <Bar dataKey="score" fill="lime" />
        </BarChart>
      </div>
    );
  }
  return null;
};

export default SelectedChart;
