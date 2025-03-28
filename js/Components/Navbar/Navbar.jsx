import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../Assets/logo.PNG';
import cart from '../Assets/cart.png';
import { ShopContext } from '../../../src/Context/ShopContext';
import dropdown from "../Assets/dropdown.png"

const Navbar = () => {
    const [menu, setMenu] = useState("SHOP NOW");
    const { gettotlacatitems}=useContext(ShopContext);
    const menuref=useRef()
    const dropdown_toggle=(e)=>{
        menuref.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');


    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Elite Pro Logo" /> {/* Add alt text */}
                <p>Elite Pro</p>
            </div>
            <img className='nav-dropdown' src={dropdown} onClick={dropdown_toggle} alt="" />
            <ul ref={menuref} className="nav-menu">
                <li key="shop-now" onClick={() => setMenu("SHOP NOW")}>
                    <Link style={{textDecoration:'none'}} to='/'>SHOP NOW</Link> 
                    {menu === "SHOP NOW" && <hr />}
                </li>
                <li key="iphone-gadgets" onClick={() => setMenu("IPHONE GADGETS")}>
                    <Link style={{textDecoration:'none'}} to="/iphone-gadgets">IPHONE GADGETS</Link> 
                    {menu === "IPHONE GADGETS" && <hr />}
                </li>
                <li key="earbuds" onClick={() => setMenu("EARBUDS")}>
                    <Link style={{textDecoration:'none'}} to="/earbuds">EARBUDS</Link> 
                    {menu === "EARBUDS" && <hr />}
                </li>
                <li key="ultra-watches" onClick={() => setMenu("ULTRA WATCHES")}>
                    <Link style={{textDecoration:'none'}} to="/ultra-watches">ULTRA WATCHES</Link> 
                    {menu === "ULTRA WATCHES" && <hr />}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login-signup">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart} alt="Cart" /> {/* Add alt text */}
                </Link>
                <div className='nav-cart-count'>{ gettotlacatitems()}</div>
            </div>
        </div>
    );
};

export default Navbar;