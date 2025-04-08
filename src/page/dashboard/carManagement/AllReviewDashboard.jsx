
import ReviewCard from '@/component/dashboard/reviewCard/ReviewCard';
import { useGetOneReviewQuery } from '@/redux/features/reviews/reviewApi';
import { Loader } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router';

const AllReviewDashboard = () => {
     const {id} = useParams();
      const { data: reviewsData, isLoading } = useGetOneReviewQuery(id, {
              skip: !id, 
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {reviewsData?.data?.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        );
};

export default AllReviewDashboard;