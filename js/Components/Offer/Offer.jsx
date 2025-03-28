import React from 'react'
import './Offer.css'
import exclusive from '../Assets/bluemouse.webp';

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Buy Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  )
}

export default Offer;
