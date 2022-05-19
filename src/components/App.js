import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Cart } from "./pages/Cart";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Product from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";



function App() {
  return (
    <div >
      <Router>
        <Home/>
        {/* <ProductList/> */}
        {/* <Product/> */}
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <Cart/> */}
      </Router>
    </div>
  )
}

export default App;
