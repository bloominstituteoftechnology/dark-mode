import React from "react";
import Chart from "./Chart";
import { Link} from "react-router-dom";

const Charts = ({ item, props, coinData }) => {
  console.log("props", props)
  return (
    <div className="charts">
      {coinData.map(coin => {
        return(
          <div>
          <div className="chart__container" >
            <div key={coin.id} onClick = {()=> routeTocoins(props, item)}> 
            <Link to ={`/${coin.id}`}>
              <h2 className="coin__title">{coin.name}</h2>
            </Link>
            </div>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
            </div>
        
          
          </div>
        )
      })}
    </div>
  );
};
function routeTocoins(props, item){
 
  props.history.push(`/coins/${item.id}`)
}
export default Charts;
