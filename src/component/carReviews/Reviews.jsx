import React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const renderRating = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="text-yellow-500 lg:w-8 w-4 lg:h-8 h:4" />);
  }

  if (halfStar) {
    stars.push(<StarHalf key="half" className="text-yellow-500 lg:w-8 w-4 lg:h-8 h:4" />);
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(
      <svg
        key={`empty-${i}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="lg:w-8 w-4 lg:h-8 h:4 text-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 17.25l-6.16 3.24 1.18-6.89L2.4 9.24l6.92-1L12 2.25l2.68 5.99 6.92 1-4.62 4.36 1.18 6.89L12 17.25z"
        />
      </svg>
    );
  }

  return stars;
};
const Reviews = ({ review }) => {
  
    return (
        <div>
            <Card className="group w-full h-full transition-transform transform hover:scale-101 shadow-lg hover:shadow-xl bg-gradient-to-br rounded-xl overflow-hidden">
      <CardHeader className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <img
              className="w-14 h-14 mr-4 rounded-full border-2 border-yellow-300"
              src={review.userId.photoURL || "https://via.placeholder.com/150?text=Avatar"}
              alt={review.userId.name}
            />
            <div>
              <CardTitle className="font-semibold text-yellow-800">
                {review.userId.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{review.reviewDate.slice(0, 10)}</p>
            </div>
          </div>
          <div className="flex items-center">{renderRating(review.rating)}</div>
        </div>
        <CardDescription className="text-gray-700 leading-relaxed">
          {review.feedback}
        </CardDescription>
      </CardHeader>
    </Card>
        </div>
    );
};

export default Reviews;