import React, { useContext, useEffect, useState } from 'react'

const Crypto = React.createContext()

export const currencyLibrary = [
    {
        "id":1,
        "nation":"United States of America",
        "currency":"USD",
        "symbol":"$"
    },
    {
        "id":2,
        "nation":"United Kingdom",
        "currency":"GBP",
        "symbol":"£"
    },
    {
        "id":3,
        "nation":"Bangladesh",
        "currency":"BDT",
        "symbol":"৳"
    },
    {
        "id":4,
        "nation":"India",
        "currency":"INR",
        "symbol":"₹"
    },
    {
        "id":5,
        "nation":"United Arab Emirates",
        "currency":"AED",
        "symbol":"د.إ"
    },
]

const CryptoContext = ({children}) => {

    // const [currency, setCurrency] = useState("BDT")
    // const [symbol, setSymbol] = useState("৳")

    // useEffect(() => {
    //     currency === "BDT"
    //     ? setSymbol("৳")
    //     : setSymbol("$")
    // },[currency])

    const [currencyLibId, setCurrencyLibId] = useState(3)
    const [currency, setCurrency] = useState({})

    useEffect(() => {
        const currentCurrency = currencyLibrary.filter(item => item.id === currencyLibId)
        setCurrency(currentCurrency)
    },[currencyLibId])

  return (
    <Crypto.Provider value={{currency, currencyLibId, setCurrencyLibId}}>
        {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
    return useContext(Crypto)
}

