import React from 'react';
import styled from 'styled-components';
import useDarkMode from '../hooks/UseDarkMode';

const CBtn = styled.div`
  width: 40px;

  img {
    height: 40px;
    opacity: 1;
  }

  .inactive {
      opacity: 0.3;
  }

`;

const Headline = styled.div`
  display: inline-block;
`;

const CoinButton = ({coin, activeCoins, setCoinActive}) => {
    if (activeCoins.includes(coin.symbol)) {
        return (
            <CBtn className="coin__logo">
                <img src={coin.image} height="40" alt={coin.name} onClick={()=>setCoinActive(coin.symbol, false)} />
            </CBtn>
        );
    } else {
        return (
            <CBtn className="coin__logo inactive">
                <img className="inactive" src={coin.image} height="40" alt={coin.name} onClick={()=>setCoinActive(coin.symbol, true)} />
            </CBtn>
        );
    }
}

const Navbar = ({coinData, activeCoins, setCoinActive}) => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <Headline>
                <h1>Crypto Tracker</h1>
                <p>Powered by <a href="https://www.coingecko.com/en">CoinGecko API</a></p>
            </Headline>
            {coinData.map(coin=><CoinButton coin={coin} activeCoins={activeCoins} setCoinActive={setCoinActive} key={coin.symbol} />)}
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default Navbar;
