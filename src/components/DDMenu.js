import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { Link } from 'react-dom';
import axios from 'axios';


class DDMenu extends React.Component  {
   constructor() {
      super(); 
        this.state= {
         // isOpened: [],
         coins: {}
      };
   }   


      // toggle = (dropdownIndex) => {
      //    this.state.isOpened[dropdownIndex] = !this.state.isOpened[dropdownIndex];
      //    this.setState({ isOpened: this.state.isOpened })
      // };


fetchCoins = (coins) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/${coins}/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`
      )
      .then(res => {
         this.state.coins(res.data);
      })   
      .catch(err => console.log(err));
  };


render() {
   return (
     <div className='dropdown-menu'>
       {coins.map((coin) => 
         <UncontrolledDropdown>
            <DropdownToggle care size='sm' color='warning'>{coin.name}</DropdownToggle>
               <DropdownMenu>
                  {coin.options.map((option) => 
                     <DropdownItem key={option}>
                        <Link to={`/${coin.name}`}>
                        {option.name}
                        </Link>
                     </DropdownItem>
                   )}                
              </DropdownMenu>
          </UncontrolledDropdown> )}
       </div>
     );
  };
};

export default DDMenu;