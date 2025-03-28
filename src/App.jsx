import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../js/Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import './App.css';
import { Footer } from '../js/Components/Footer/Footer';
import home from '../js/Components/Assets/banner.jpg';
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/iphone-gadgets" element={<ShopCategory banner={home} category="iphone-gadgets" />} />
            <Route path="/earbuds" element={<ShopCategory banner={home} category="earbuds" />} />
            <Route path="/ultra-watches" element={<ShopCategory banner={home} category="ultra-watches" />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productid" element={<Product />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login-signup" element={<LoginSignup />} /> {/* Fixed */}
            <Route path="*" element={<div>404 - Page Not Found</div>} /> {/* Added */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;