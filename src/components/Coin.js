import React from "react";

import "../styles.css";

const Coin = ({ specificCoinData }) => {
  let descriptionObj = { ...specificCoinData.description };
  let communityObj = { ...specificCoinData.community_data };
  let imageObj = { ...specificCoinData.image };

  let description = Object.keys(descriptionObj).map(el => {
    if (el === "en") {
      return descriptionObj[el];
    }
  });

  let community = Object.keys(communityObj).map(el => {
    return (
      <div>
        <h4>
          {el[0].toUpperCase() +
            el
              .slice(1)
              .split("_")
              .join(" ")}{" "}
          : {communityObj[el]}
        </h4>
      </div>
    );
  });

  let image = Object.keys(imageObj).map(el => {
    if (el === "thumb") {
      return imageObj[el];
    }
  });

  return (
    <div className="coin-container">
      <h1>{specificCoinData.name}</h1>
      <h2>CoinGecko Rank: {specificCoinData.coingecko_rank}</h2>
      <img src={image} />

      <p>{description}</p>
      <h3>{specificCoinData.name} Community Data:</h3>
      <h4>{community}</h4>
      {/* {specificCoinData.tickers.map(ticker => (
        <div>
          <p>Base: {ticker.base}</p>
          <p>Target: {ticker.target}</p>
          <p>Last: {ticker.last}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Coin;
