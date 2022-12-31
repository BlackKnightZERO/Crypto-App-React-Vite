import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { TrendingCoinsApi } from '../config/api'

const Crypto = React.createContext()

export const currencyLibrary = [
    {
        "id":1,
        "nation":"United States of America",
        "__currency":"usd",
        "symbol":"$"
    },
    {
        "id":2,
        "nation":"United Kingdom",
        "__currency":"gbp",
        "symbol":"£"
    },
    {
        "id":3,
        "nation":"Bangladesh",
        "__currency":"bdt",
        "symbol":"৳"
    },
    {
        "id":4,
        "nation":"India",
        "__currency":"inr",
        "symbol":"₹"
    },
    {
        "id":5,
        "nation":"United Arab Emirates",
        "__currency":"aed",
        "symbol":"د.إ"
    },
]

const CryptoContext = ({children}) => {

    const [currencyLibId, setCurrencyLibId] = useState(3)
    const [currency, setCurrency] = useState({})
    const [trending, setTrending] = useState([])

    const isEmpty = (obj) => {
        return JSON.stringify(obj) === '{}'
    }

    useEffect(() => {
        const currentCurrency = currencyLibrary.filter(item => item.id === currencyLibId)
        setCurrency(currentCurrency[0])
    },[currencyLibId])

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            if(!isEmpty(currency)){
                const { data } = await axios.get(TrendingCoinsApi(currency.__currency))
                setTrending(data)
            }
        }
        fetchTrendingCoins()
    }, [currency])

  return (
    <Crypto.Provider value={{currency, currencyLibId, trending, setCurrencyLibId}}>
        {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
    return useContext(Crypto)
}

