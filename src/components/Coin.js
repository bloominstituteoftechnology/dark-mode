import React from "react";

const Coin = ({ specificCoinData }) => {
  let descriptionObj = { ...specificCoinData.description };
  let communityObj = { ...specificCoinData.community_data };

  let description = Object.keys(descriptionObj).map(el => {
    if (el === "en") {
      return descriptionObj[el];
    }
  });

  let community = Object.keys(communityObj).map(el => {
    return (
      <div>
        <h4>
          {el} : {communityObj[el]}
        </h4>
      </div>
    );
  });

  return (
    <div>
      <h1>{specificCoinData.name}</h1>
      <h2>CoinGecko Rank: {specificCoinData.coingecko_rank}</h2>

      <p>{description}</p>
      <h3>Tickers:</h3>
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
