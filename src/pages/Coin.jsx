import React from 'react'

import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Coin = () => {

  let { coinId } = useParams();

  return (
    <>
    <Header />
    <div>Coin</div>
    <p>{coinId}</p>
    </>
  )
}

export default Coin