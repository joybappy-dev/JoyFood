import React from "react";
import Button from "../Button/page";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Image from "next/image";

const Card = ({ food }) => {
  return (
    <div className="group relative bg-white/20 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        {/* <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        /> */}

        <Image
          src={food?.foodImg}
          alt={food?.title}
          width={200}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-sm shadow">
          ৳ {food.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition line-clamp-2">
          {food.title}
        </h3>

        <p className="text-sm text-gray-200 mt-2">{food.category}</p>

        {/* Push button to bottom */}
        <div className="mt-auto pt-4 flex flex-col gap-4">
          <Link href={`/foods/${food.id}`}>
            <Button className="w-full">View Details</Button>
          </Link>

          <AddToCartButton food={food} />
        </div>
      </div>
    </div>
  );
};

export default Card;
