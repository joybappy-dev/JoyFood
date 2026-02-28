"use client";
import { CartContext } from "@/contexts/CartProvider";
import { useContext } from "react";

const CartCount = () => {
  const { inCart } = useContext(CartContext);
  return <span className="text-white">({inCart.length})</span>
};

export default CartCount;
