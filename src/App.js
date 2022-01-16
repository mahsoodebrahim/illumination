import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  CartPage,
  CheckoutPage,
  ErrorPage,
  Home,
  ProductsPage,
  SingleProductPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
