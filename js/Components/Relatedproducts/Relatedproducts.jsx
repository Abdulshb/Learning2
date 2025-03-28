import React from 'react'
import './Relatedproducts.css'
import allproduct from '../Assets/allproduct'
import Item from '../Item/Item'
export const Relatedproducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
        {allproduct.map((item,index)=>{
            return <Item  key={index} // Use `index` as the key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price} // Use camelCase for prop names
            old_price={item.old_price}/>
        })}
        </div>
    </div>
  )
}
