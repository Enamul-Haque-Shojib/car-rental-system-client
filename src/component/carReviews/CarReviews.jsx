import React from 'react';
import Reviews from './Reviews';
import useAuth from '@/hooks/useAuth';
import { useGetOneReviewQuery } from '@/redux/features/reviews/reviewApi';
import { Loader } from 'lucide-react';


const CarReviews = ({carId}) => {

    const {user} = useAuth()
      const { data: reviewsData, isLoading } = useGetOneReviewQuery(carId, {
          skip: !carId, 
        });


  
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-96">
          <Loader className="animate-spin text-gray-400 w-10 h-10" />
        </div>
      );
    }
  
    if (reviewsData?.data?.length === 0) {
      return (
        <div className="flex justify-center items-center h-96 text-gray-500 text-lg">
          No reviews available.
        </div>
      );
    }
  
    return (
      <div className="">
        {reviewsData?.data?.map((review) => (
          <Reviews key={review._id} review={review} />
        ))}
      </div>
    );
};

export default CarReviews;