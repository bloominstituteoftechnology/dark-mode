import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Chart from './Chart';
import { NavLink } from 'react-router-dom';

export default function CoinCard(props) {
    const [coin, setCoin] = useState();
    console.log("coincard: props", props);

    useEffect(() => {
        const id = props.id;

        axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => {
                console.log("Coin Card: API response: ", res.data)
                setCoin(res.data)
            })                
            .catch(error => {
                console.log("CoinCard: Error: ", error)
            })
    }, [props.id])

    console.log("CoinCard: coin: ", coin);

    if (!coin) {
        return <div className="loading">Loading coin information...</div>;
      }

    const { name, symbol, image, market_cap_rank, description, block_time_in_minutes, sparkline_in_7d } = coin;

    return (
        
        <div className="coin-container" key={name}>
            <NavLink to="/">
                <div className="back-button">Go Back</div>
            </NavLink>           
           <h2 className="coin-title">{name} ({symbol})</h2>
           <div className="coin-logo">
             <img className="thumb" src={image.thumb} height="4" alt={name} />
           </div>
            <h4>Coin Market Cap Overall Rank: {market_cap_rank}</h4>
            <h4>Block time in minutes: {block_time_in_minutes}</h4>
            <h5>{`${description.en}`}</h5>
        {/* //   <Chart sparklineData={sparkline_in_7d.price} /> */}
         </div>
        // <div>test</div>
    )
}