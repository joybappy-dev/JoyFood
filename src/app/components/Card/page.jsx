import React from "react";
import Button from "../Button/page";
import Link from "next/link";

const Card = ({ food }) => {
  return (
    <div className="group relative bg-white/20 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-300 ">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        {" "}
        {/* taller than h-44 */}
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-sm shadow">
          ৳ {food.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        {" "}
        {/* more padding */}
        <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition">
          {food.title}
        </h3>
        <p className="text-sm text-gray-200">{food.category}</p>
        <Link href={`/foods/${food.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
