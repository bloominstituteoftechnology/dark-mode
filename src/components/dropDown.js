import React from 'react'
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { Link } from "react-router-dom";

export const DropDown = ({ coinData }) => {
  console.log("DropDown coinData props", coinData)
return (
    <div>
         <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  nav caret>
                Choose coin
              </DropdownToggle>
              <DropdownMenu right>
                {coinData.map(item =>(
                    <Link to ={`/${item.id}`} >
                        <DropdownItem >
                            <div key={item.id}>  
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