import React from "react";
import Title from "../components/Title/page";
import ReviewCard from "../components/ReviewCard/page";

export const metadata = {
  title: "Customers Review",
};

const getReviews = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/reviews",
  );
  const data = await res.json();
  return data.reviews;
};

const reviews = await getReviews();

const ReviewsPage = () => {
  return (
    <div>
      <Title>
        Explore Reviews (
        <span className="text-yellow-400">{reviews.length}</span>)
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review?.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
