"use client";
import React, { useContext } from "react";
import Title from "../components/Title/page";
import { CartContext } from "@/contexts/CartProvider";

const Cart = () => {
  const { inCart } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto">
      <Title>
        Total <span className="text-yellow-400">({inCart.length})</span>
      </Title>

      {inCart.length === 0 ? (
        <p className="text-gray-400 mt-6">Your cart is empty 🛒</p>
      ) : (
        <div className="mt-8 space-y-6">
          {inCart.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-center bg-white/20 p-5 backdrop-blur-sm rounded-sm"
            >
              {/* Image */}
              <div className="relative w-28 h-28 shrink-0">
                <img
                  src={item?.foodImg}
                  alt={item.title}
                  className="object-cover rounded-sm"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Category: {item.category}
                </p>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-yellow-400 font-bold text-lg">
                  ৳{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
