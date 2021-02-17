import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import reactstrap components
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

const DropdownCoins = ({ coinData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const history = useHistory();


  return (
    <div className="dropdown-container" style={{margin: "1rem"}}>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Coins
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem name="home" onClick={(evt) => history.push(`/`)}>All</DropdownItem>
          {coinData.map(coinObject => {
            return <DropdownItem name={coinObject.id} onClick={(evt) => history.push(`/coins/${coinObject.id}`)}>{coinObject.name}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownCoins;