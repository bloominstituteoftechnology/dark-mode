import React from 'react'
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { Link } from "react-router-dom";

export const DropDown = ({ coinData }) => {
    console.log(coinData)
return (
    <div>
         <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  nav caret>
                Choose coin
              </DropdownToggle>
              <DropdownMenu right>
                {coinData.map(item =>(
                    <Link to ={`online-coin/${item.id}`} >
                        <DropdownItem  key={item.id}>
                            <div>  
                                {item.name}
                                </div>
                        </DropdownItem>
                    </Link>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
        
    </div>
)
  

}