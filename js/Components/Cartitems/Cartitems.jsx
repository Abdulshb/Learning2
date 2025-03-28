import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../../src/Context/ShopContext';
import removeicon from '../Assets/removeicon.png';

const Cartitems = () => {
    const { gettotalcartamount, allproduct, cartitems, removefromtoCart } = useContext(ShopContext);

    if (!allproduct || !Array.isArray(allproduct)) {
        return <div>Loading products...</div>;
    }
    if (!cartitems || typeof cartitems !== 'object') {
        return <div>Cart data is invalid</div>;
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allproduct.map((e) => {
                const quantity = cartitems[e.id];
                if (quantity > 0) {
                    return (
                        <div className='cartitems-format cartitems-format-main' key={e.id}>
                            <img src={e.image} alt={e.name} className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{quantity}</button>
                            <p>${e.new_price * quantity}</p>
                            <img 
                                className='cartitems-remove-icon'
                                src={removeicon} 
                                onClick={() => { removefromtoCart(e.id); }} 
                                alt="Remove item" 
                            />
                        </div>
                    );
                }
                return null;
            })}
            {Object.values(cartitems).every(qty => qty === 0) && (
                <p>Your cart is empty</p>
            )}
            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>${gettotalcartamount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-items'>
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>${gettotalcartamount()}</h3>
                        </div>
                        <button className="cartitems-total-button">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartitems;