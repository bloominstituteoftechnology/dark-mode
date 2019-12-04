import React from 'react';
import axios from "axios";
import CoinsCard from './CoinsCard';


class Coins extends React.Component {
 
  constructor (){
    super ();
    this.state = {
      coins: []
    }
  }

  componentDidMount = () => {
    axios
    .get(`https://api.coingecko.com/api/v3/coins/list`)
    .then (res => {
      console.log( "data", res.data);
      this.setState({
        coins: res.data
      });
    })

    .catch (error => console.log (error));
    
  }

    render (){
    return (
    

      <div className="card-align">

          {this.state.coins.map (coin => (
            <CoinsCard
                key={coin.id}
                name={coin.name}
                img={coin.symbol} 
              />
          ))}
      </div>
  );
    
}
}
  
  export default Coins;



