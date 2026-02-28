"use client";
import React, { useContext } from "react";
import Button from "../Button/page";
import { CartContext } from "@/contexts/CartProvider";

const AddToCartButton = ({ food }) => {
  const { setIncart, inCart } = useContext(CartContext);
  const handleAddToCart = (item) => {
    setIncart([item, ...inCart]);
  };

  const itemExists = inCart.some((item) => item.id === food.id);

  return (
    <button onClick={() => handleAddToCart(food)} className={`w-full`}>
      <Button className="w-full">{itemExists ? "Added" : "Add To Cart"}</Button>
    </button>
  );
};

export default AddToCartButton;
