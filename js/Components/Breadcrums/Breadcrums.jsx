import React from 'react'
import './Breadcrums.css'

export const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrums'>
        Home {product.category}shop {product.name} 
    </div>
  )
}
