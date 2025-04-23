import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetTopThreeCarsQuery } from '@/redux/features/statistics/statisticsApi';
import React from 'react';

const TopThreeCars = () => {

  const {data: carsData, isLoading} = useGetTopThreeCarsQuery();


    return (
      <div className="lg:w-[90%] w-[95%] mx-auto my-12">
        <h1 className="text-4xl font-extrabold text-center mb-10 ">
          Top 3 Cars
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData?.data?.map((car, index) => (
            <Card
              key={index}
              className="group w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-200"
            >


              <CardHeader className="p-4">
                <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-md">
                  <img
                    src={car?.image}
                    alt={car?.brand}
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
                <CardTitle className="text-xl font-bold mt-4 text-gray-700">
                  {car?.registrationNumber}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-blue-600">
                    Brand: <span className="font-bold">{car.brand}</span>
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Rating: {car?.avgRating} ★
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
};

export default TopThreeCars;