import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NewDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const IndexDiv = styled.div`
    width: 18%;
    border: 2px solid peachpuff;
    margin: 1%;
`;

const CoinIndex = () => {

    const [index, setIndex] = useState([])

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/indexes/list')
            .then(res => {
                console.log(res);
                setIndex(res.data);
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <NewDiv>
            {index.map((elem, i) => (
                <IndexDiv key={i}>
                    <h1>{elem.id}</h1>
                    <h2>{elem.name}</h2>
                </IndexDiv>
            ))}
        </NewDiv>
    );
};

export default CoinIndex;