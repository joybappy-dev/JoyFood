import React from "react";

const DetailsPageSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto animate-pulse">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Image Skeleton */}
        <div className="relative rounded-sm overflow-hidden border border-white/10 bg-white/20 backdrop-blur-sm">
          <div className="w-full h-112.5 bg-gray-700/40"></div>
        </div>

        {/* Info Skeleton */}
        <div className="space-y-6">
          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-600 rounded-sm"></div>

          {/* Category + Area */}
          <div className="flex gap-3">
            <div className="h-8 w-24 bg-yellow-400/40 rounded-sm"></div>
            <div className="h-8 w-28 bg-gray-600 rounded-sm"></div>
          </div>

          {/* Description Lines */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-600 rounded-sm"></div>
            <div className="h-4 w-5/6 bg-gray-600 rounded-sm"></div>
            <div className="h-4 w-4/6 bg-gray-600 rounded-sm"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-yellow-400/50 rounded-sm"></div>
            <div className="h-12 w-40 bg-gray-600 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-white/20"></div>

      {/* Video Section */}
      <div className="space-y-6">
        <div className="h-8 w-52 bg-gray-600 rounded-sm"></div>

        <div className="aspect-video rounded-sm overflow-hidden border border-white/10 bg-gray-700/40"></div>
      </div>
    </div>
  );
};

export default DetailsPageSkeleton;
