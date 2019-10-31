import React from 'react';

const CoinsCard = ({name, symbol}) => {
    return (
        <div className="cards">
            <h4>Name: {name}</h4>
            <img src={symbol} alt="coin symbol"/>
        </div>
    )
}

export default CoinsCard;