"use client";
import React, { useState } from "react";
import Button from "../Button/page";

const AddToCartButton = () => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    console.log(inCart);
  };
  return (
    <button className="w-full" onClick={handleAddToCart}>
      <Button className="w-full mt-4">
        {inCart? "Added" : "Add To Cart"}
      </Button>
    </button>
  );
};

export default AddToCartButton;
