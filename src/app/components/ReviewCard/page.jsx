import Image from "next/image";
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="group relative bg-white/20 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden transition-all duration-300 flex flex-col h-full">
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <Image
            src={review.photo}
            alt={review.user}
            width={200}
            height={200}
            className="w-12 h-12 rounded-full object-cover border border-yellow-400/40"
          />
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition line-clamp-1">
              {review.user}
            </h3>
            <p className="text-xs text-gray-400">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex mt-4">
          {[...Array(review.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-sm text-gray-200 mt-4 line-clamp-4">
          {review.review}
        </p>

        {/* Bottom Section */}
        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center text-sm text-gray-400">
          <span>{review.likes.length} Likes</span>
          <button className="hover:text-yellow-400 transition">Like ❤️</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
