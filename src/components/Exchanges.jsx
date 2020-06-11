import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Exchanges = () => {
    const [cryptoExchanges, setCryptoExchanges] = useState([])

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/exchanges')
            .then(res => setCryptoExchanges(res.data))
            .catch(err => console.log('Error is: ', err))
    }, [])
    console.log(cryptoExchanges)

    return (
        <div>Exchanges</div>
    )
}

export default Exchanges
