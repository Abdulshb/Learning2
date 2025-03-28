import React,{useContext} from 'react';
import './Productdisplay.css';
import staricon from '../Assets/star.png'
import { ShopContext } from '../../../src/Context/ShopContext';

export const Productdisplay = (props) => {

    const { product } = props;
   const {addtoCart}=useContext(ShopContext)

    if (!product || !product.image) {
        return <div>No product data available</div>;
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className='product-display-img-list'>
                <img src={product.image} alt={product.name} />
                <img src={product.image} alt={product.name} />
                <img src={product.image} alt={product.name} />
                <img src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt={product.name} />
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={staricon} alt="star rating" />
                    <img src={staricon} alt="star rating" />
                    <img src={staricon} alt="star rating" />
                    <img src={staricon} alt="star rating" />
                    <img src={staricon} alt="star rating" />
                    <p>(122)</p>
                </div>
             
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-old-price">
                        Rs{product.old_price}</div>
                        <div className="productdisplay-right-new-price">
                            Rs.{product.new_price}
                        </div>
                        </div>
                        <div className="productdisplay-right-descripton">
                        i12  Airpods Earpods TWS Bluetooth Handfree Earbuds For Apple
Auto charge:
Auto Pairing
Auto Power on
Touch Using Siri
Open the Lip and Connect Automatically
Working time: 2-3 hours.

                        </div>
                        <div className="productdisplay-right-size">
                            <h1>Select Color</h1>
                            <div className="productdisplay-right-size">
                                <div>White</div>
                                <div>Black</div>
                                <div>Red</div>
                            </div>
                        </div>
                        <button onClick={()=>{addtoCart(product.id)}} className='add-to-cart'>ADD TO CART</button>
                        <p className='productdisplay-right-category'><span>Category:</span>Air-buds</p>
                        </div>
        </div>
    );
};