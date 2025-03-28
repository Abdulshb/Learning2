import React from 'react';
import './Hero.css';
import hand from '../Assets/hand.webp';
// import p1_product from '../Assets/p1_product.webp';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Stock</h2>
        <div>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand} alt="Hand icon" />
      
          </div>
          <p>Collection</p>
          <p>For Earbuds</p>
          </div>
          <div className="hero-latest-btn">
        <div>Unique Collection</div>
      </div>
      </div>
     
      <div className="hero-right">
        <img src="https://file.aiquickdraw.com/imgcompressed/img/compressed_99c2aef0c9f32b5de66c673b5fef908f.webp" alt="Product image" /> 
      </div>
    </div>
  );
};

export default Hero;