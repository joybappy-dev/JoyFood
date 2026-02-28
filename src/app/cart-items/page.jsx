"use client";
import React, { useContext } from "react";
import Title from "../components/Title/page";
import { CartContext } from "@/contexts/CartProvider";

const CartItems = () => {
  const { inCart } = useContext(CartContext);
  console.log(inCart);

  return (
    <div>
      <Title>
        Total <span className="text-yellow-400">({inCart.length})</span>
      </Title>
    </div>
  );
};

export default CartItems;
