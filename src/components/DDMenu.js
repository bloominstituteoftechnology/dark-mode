import React, { useState, useEffect } from 'react';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { Link } from 'react-dom';
import axios from 'axios';


function DDMenu() {
   const [coins, setCoins] = useState([]);


      // toggle = (dropdownIndex) => {
      //    this.state.isOpened[dropdownIndex] = !this.state.isOpened[dropdownIndex];
      //    this.setState({ isOpened: this.state.isOpened })
      // };

      useEffect(() => {
         setCoins([])
      }, [coins]);

const fetchCoins = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/${coins}/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`
      )
      .then(res => {
         setCoins(res.data);
      })   
      .catch(err => console.log(err));
  };


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


export default DDMenu;