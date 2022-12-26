import React from 'react'

import { useParams } from 'react-router-dom';

const Coin = () => {

  let { coinId } = useParams();

  return (
    <>
    <div>Coin</div>
    <p>{coinId}</p>
    </>
  )
}

export default Coin