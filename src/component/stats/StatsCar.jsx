import { useGetStatisticsStatesQuery } from '@/redux/features/statistics/statisticsApi';
import React from 'react';

const StatsCar = () => {
  const {data: statsData, isLoading} = useGetStatisticsStatesQuery();
  console.log(statsData)
    return (
        
        <div className="lg:w-[90%] w-[95%] mx-auto my-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-xl bg-white">
    <div className="stat flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="stat-title text-lg font-semibold text-gray-600 text-center">Cars</div>
      <div className="stat-value text-4xl font-bold text-blue-600 text-center">{statsData?.data?.totalCars}+</div>
      <div className="stat-desc text-sm text-gray-500 text-center">Total Cars</div>
    </div>

    <div className="stat flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="stat-title text-lg font-semibold text-gray-600 text-center">Reviews</div>
      <div className="stat-value text-4xl font-bold text-blue-600 text-center">{statsData?.data?.averageReview}+</div>
      <div className="stat-desc text-sm text-gray-500 text-center">5-star car avg reviews</div>
    </div>

    <div className="stat flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="stat-title text-lg font-semibold text-gray-600 text-center">Owners</div>
      <div className="stat-value text-4xl font-bold text-blue-600 text-center">{statsData?.data?.totalOwners}+</div>
      <div className="stat-desc text-sm text-gray-500 text-center">Car Owners</div>
    </div>

    <div className="stat flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="stat-title text-lg font-semibold text-gray-600 text-center">App User</div>
      <div className="stat-value text-4xl font-bold text-blue-600 text-center">{statsData?.data?.totalUsers}+</div>
      <div className="stat-desc text-sm text-gray-500 text-center">Users joined</div>
    </div>
  </div>
</div>

        
    );
};

export default StatsCar;