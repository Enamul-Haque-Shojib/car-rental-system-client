import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import useAuth from '@/hooks/useAuth';
import { useGetPieChartBookingsQuery, useGetPieChartCarsQuery, useGetPieChartUsersQuery } from '@/redux/features/statistics/statisticsApi';
import React from 'react';
import Chart from "react-apexcharts";

const AdminDashboard = () => {
     const {user} = useAuth();
    
    const {data: carsData, isLoading} = useGetPieChartCarsQuery(user?._id,{
        skip: !user?._id, 
      });
    const {data: usersData} = useGetPieChartUsersQuery();

    
        const pieChartCarsOptions = {
            labels: ["Available", "Booked", "Disabled"],
          };
     
        const pieChartUsersOptions = {
            labels: ["Admin", "Owner", "Users"],
          };
    
          const pieChartCarSeries = [carsData?.data?.not_rent, carsData?.data?.rent, carsData?.data?.disable];
    
          const pieChartUsersSeries = [usersData?.data?.admin, usersData?.data?.owner, usersData?.data?.user];
    
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
                <Chart options={pieChartUsersOptions} series={pieChartUsersSeries} type="pie" height={250} />
              </CardContent>
            </Card>
    
            
             <div className="border col-span-1 md:col-span-2 lg:col-span-3 flex justify-around p-4">
              <div className="text-center">
                <h4 className="text-xl font-bold">{usersData?.data?.admin}</h4>
                <p className="text-gray-500">Admin</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold">{usersData?.data?.owner}</h4>
                <p className="text-gray-500">Owner</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold">{usersData?.data?.user}</h4>
                <p className="text-gray-500">User</p>
              </div>
             
            </div>
      
           
      
           
          </div>
        );
};

export default AdminDashboard;