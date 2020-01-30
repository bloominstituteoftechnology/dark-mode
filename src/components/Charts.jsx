import React from "react";
import Coin from "./Coin";
import { Link } from "react-router-dom";

const Charts = ({coinData }) => {
  console.log("CoinData.js coindata:", coinData)
  return (
    <div className="charts">
      {coinData.map(coin => {
        console.log("Charts coin elements of the coinData",  coin)
        return( 
         <div key={coin.id}>
            <Link to= {`/${coin.id}`} 
            // onClick={()=> routeTocoins(coin.id)}
            >
              <Coin coin ={coin}/>
              </Link>
         </div>
        )
      })}
    </div>
  );
};

// function routeTocoins(id){
//   history.push(`coins/${id}`)
// }
export default Charts;
