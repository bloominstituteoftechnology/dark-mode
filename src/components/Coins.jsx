import React, { useEffect, useState} from 'react';
import axios from "axios";

const Coins = () => {

const [coins, setCoins] = useState([]);

useEffect(() => {
    axios
        .get('https://api.coingecko.com/api/v3/coins/list')
        .then(response => {
        setCoins(response.data);
        console.log("data",response)
        })
        .catch(error => {
        console.error('Server Error', error);
    });
}, []);


return (
    <div>
      {/* {setCoins.map(coin => (
        <div className="chart__container" key={coin.id}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
        </div>
      ))} */}
    </div>
);

}



export default Coins;