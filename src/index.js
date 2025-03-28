// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopContextProvider from './Context/ShopContext'; // Adjust path

ReactDOM.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
  document.getElementById('root')
);












// import React from "react";
// import ReactDOM from 'react-dom/client';
// import './index.css'
// import App from './App';
// import ShopContextProvider from "./Context/ShopContext";

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <ShopContextProvider>
//         <App/>
//     </ShopContextProvider>
// )