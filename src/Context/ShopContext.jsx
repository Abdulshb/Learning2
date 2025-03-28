import React, { createContext, useState } from 'react';
import allproduct from '../../js/Components/Assets/allproduct';

export const ShopContext = createContext(null);

const getdefaultcart = () => {
  let cart = {};
  // Use actual product IDs instead of indices
  for (let product of allproduct) {
    cart[product.id] = 0; // Assumes each product has an 'id' field
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartitems, setCartItems] = useState(getdefaultcart());

  // Debug: Log initial cart and products
  // console.log('Initial allproduct:', allproduct);
  // console.log('Initial cartitems:', cartitems);

  const addtoCart = (itemid) => {
    setCartItems((prev) => {
      const newCart = { ...prev, [itemid]: (prev[itemid] || 0) + 1 };
      // console.log('Updated cartitems after add:', newCart);
      return newCart;
    });
  };

  const removefromtoCart = (itemid) => {
    setCartItems((prev) => {
      const newQuantity = Math.max((prev[itemid] || 0) - 1, 0); // Prevent negative quantities
      const newCart = { ...prev, [itemid]: newQuantity };
      
      return newCart;
    });
  };
  const gettotalcartamount = () => {
    let totalAmount = 0;
    for (const item in cartitems) {
        if (cartitems[item] > 0) {
            let iteminfo = allproduct.find((product) => product.id === Number(item));
            if (iteminfo) { // Check if iteminfo exists to avoid undefined errors
                totalAmount += iteminfo.new_price * cartitems[item];
            }
        }
    }
    return totalAmount; // Return moved outside the loop
};
  const gettotlacatitems=()=>{
    let totalitem=0;
    for(const item in cartitems){
      if(cartitems[item]>0){
        totalitem+=cartitems[item]
      }
    }
    return totalitem;
  }

  const contextValue = { gettotlacatitems, gettotalcartamount , allproduct, cartitems, addtoCart, removefromtoCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};




// const ShopContextProvider = (props) => {
//   const contextValue = { allproduct } 
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

export default ShopContextProvider;