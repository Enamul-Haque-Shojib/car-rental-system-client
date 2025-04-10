import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import useAuth from '@/hooks/useAuth';
import { useGetPieChartBookingsQuery, useGetPieChartCarsQuery } from '@/redux/features/statistics/statisticsApi';
import React from 'react';
import Chart from "react-apexcharts";

const OwnerDashboard = () => {
    const {user} = useAuth();

const {data: carsData, isLoading} = useGetPieChartCarsQuery(user?._id,{
    skip: !user?._id, 
  });
const {data: bookingsData} = useGetPieChartBookingsQuery(user?._id,{
    skip: !user?._id, 
  });


    const pieChartCarsOptions = {
        labels: ["Available", "Booked", "Disabled"],
      };
 
    const pieChartBookingsOptions = {
        labels: ["Pending", "Approved", "Canceled", "Completed"],
      };

      const pieChartCarSeries = [carsData?.data?.not_rent, carsData?.data?.rent, carsData?.data?.disable];

      const pieChartBookingsSeries = [bookingsData?.data?.Pending, bookingsData?.data?.Approved, bookingsData?.data?.Canceled, bookingsData?.data?.Completed];

      if(isLoading){
        <p>Loading....</p>
      }
    return (
        <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    
        
        <Card className="col-span-1 flex items-center p-4">
          <Avatar className="w-16 h-16">
            <img src={user?.photoURL} alt="User" />
          </Avatar>
          <div className="ml-4">
            <h2 className="text-lg font-bold">Welcome, {user?.name}!</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <p className="text-sm text-gray-500">{user?.role}</p>
          </div>
        </Card>
        
        
        <Card className="col-span-2">
          <CardContent>
            <Chart options={pieChartCarsOptions} series={pieChartCarSeries} type="pie" height={250} />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardContent>
            <Chart options={pieChartBookingsOptions} series={pieChartBookingsSeries} type="pie" height={250} />
          </CardContent>
        </Card>

        
         <div className="border col-span-1 md:col-span-2 lg:col-span-3 flex justify-around p-4">
          <div className="text-center">
            <h4 className="text-xl font-bold">{bookingsData?.data?.Pending}</h4>
            <p className="text-gray-500">Pending</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">{bookingsData?.data?.Approved}</h4>
            <p className="text-gray-500">Approved</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">{bookingsData?.data?.Completed}</h4>
            <p className="text-gray-500">Completed</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">{bookingsData?.data?.Canceled}</h4>
            <p className="text-gray-500">Canceled</p>
          </div>
        </div>
  
       
  
       
      </div>
    );
};

export default OwnerDashboard;