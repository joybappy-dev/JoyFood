import React from "react";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
    { cache: "no-store" },
  );
  const data = await res.json();
  return data.foods || [];
};
const foods = await getFoods();

const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {foods.map((food) => (
        <div
          key={food.id}
          className="animate-pulse group relative bg-white/20 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-300"
        >
          {/* Image Skeleton */}
          <div className="relative h-64 bg-gray-700/30"></div>

          {/* Content Skeleton */}
          <div className="p-6 space-y-3">
            {/* Title Skeleton */}
            <div className="h-6 w-3/4 bg-gray-600 rounded"></div>

            {/* Category Skeleton */}
            <div className="h-4 w-1/2 bg-gray-600 rounded"></div>

            {/* Button Skeleton */}
            <div className="h-10 w-full bg-yellow-400/50 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardSkeleton;
