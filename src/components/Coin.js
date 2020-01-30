import React from "react";
import Chart from "./Chart";

const Coin = ({ coin}) => {
    
    return(
        <div  >
        <div className="chart__container" >
          <div key={coin.id}> 
            <h2 className="coin__title" >{coin.name}</h2>
          </div>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        </div>
    )
}

export default Coin;