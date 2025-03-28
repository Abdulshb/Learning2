import React from 'react';
import './Popular.css';
import datapro from "../Assets/datapro.js";
import Item from '../Item/Item.jsx'; // Ensure this path is correct

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR In World</h1>
      <hr />
      <div className="popular-item">
        {datapro.map((item, index) => { // Use `index` as the key
          return (
            <Item
              key={index} 
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price} // Use camelCase for prop names
              old_price={item.old_price} // Use camelCase for prop names
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;