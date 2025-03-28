import React from 'react';
import './Newcollection.css';
import Item from '../Item/Item';
import newcollection from '../Assets/newcollection'; // Ensure this path is correct

const Newcollection = () => {
  return (
    <div className='new-collection'>
      <h1>New Collection</h1>
      <hr />
      <div className="collections">
        {newcollection.map((item,index)=>{
            return   <Item
            key={index} // Use `index` as the key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price} // Use camelCase for prop names
            old_price={item.old_price} // Use camelCase for prop names
          />
        })}
      </div>
    </div>
  );
};

export default Newcollection;