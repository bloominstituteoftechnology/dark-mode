import React from 'react';
import { UncontrolledDropdown, DropdownToggle,DropdownItem, DropdownMenu } from "reactstrap";
import {Link} from 'react-router-dom';


const DropdownList = ({coinList}) => {
  return (
    <div>
    <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag='a' className='nav-link' caret>
            Show List of Coins
          </DropdownToggle>
          <DropdownMenu>
            {coinList.map(coin => (
              <div>
            <DropdownItem>
            <Link to ={`/${coin.name}`} >
             {coin.name}
              </Link> 
              </DropdownItem>
          </div>
          ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
  )
}
export default DropdownList;