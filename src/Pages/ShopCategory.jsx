import React, { use, useContext } from 'react';
import './CSS/Shopcategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../../js/Components/Item/Item';
import { useState } from 'react';



const ShopCategory = (props) => {
  const context = useContext(ShopContext); // Get the full context first


  // If context is null, provide a fallback
  const allproduct = context ? context.allproduct : null;



  return (
    <div className="shop-category"> {/* Fixed typo: "sho p-category" -> "shop-category" */}
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="items shopcategory-product">
        {allproduct ? (
          allproduct.map((item, index) => (
            <Item
              key={item.id || index} // Prefer item.id if available, fallback to index
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available</p> // Fallback if allproduct is null or undefined
        )}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;