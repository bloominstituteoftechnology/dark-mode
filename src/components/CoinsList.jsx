import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NewDiv = styled.div`
  display: flex;
  flex-wrap: wrap
`;

const CoinDiv = styled.div`
  width: 10%;
  border: 1px solid red;
  margin: 1%;
  display: flex;
  flex-direction: column;
`;

const CoinH1 = styled.h1`
  font-size: 1.5rem;
  margin: 1%;
`;

const CoinH2 = styled.h2`
  font-size: 1rem;
  margin: 1%;
`;

const CoinsList = () => {
    
  const [coinList, setCoinList] = useState([]);
    
    useEffect(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/list"
          )
          .then(res => {
            console.log(res.data);
            setCoinList(res.data)})
          .catch(err => console.log(err));
      }, []);
    
    
      return (
        <NewDiv>
            {coinList.map(coin => (
          <CoinDiv key={coin.id}>
              <CoinH1>Name: {coin.name}</CoinH1>
              <CoinH2>Symbol: {coin.symbol}</CoinH2>
          </CoinDiv>
          ))}
       
        </NewDiv>
      );
};

export default CoinsList;