"use client";
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [inCart, setIncart] = useState([]);
  const cartInfo = { inCart, setIncart };

  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
