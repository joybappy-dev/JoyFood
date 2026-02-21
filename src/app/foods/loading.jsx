import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index} 
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

export default LoadingSkeleton;
