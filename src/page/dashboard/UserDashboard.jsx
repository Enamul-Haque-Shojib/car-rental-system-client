import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import useAuth from '@/hooks/useAuth';
import { useGetPieChartBookingsQuery } from '@/redux/features/statistics/statisticsApi';
import React from 'react';
import Chart from "react-apexcharts";
const UserDashboard = () => {
const {user} = useAuth();

const {data: bookingsData, isLoading} = useGetPieChartBookingsQuery(user?._id,{
    skip: !user?._id, 
  });


    const pieChartOptions = {
        labels: ["Pending", "Approved", "Canceled", "Completed"],
      };
      const pieChartSeries = [bookingsData?.data?.Pending, bookingsData?.data?.Approved, bookingsData?.data?.Canceled, bookingsData?.data?.Completed];
    return (
        <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* Profile Section */}
        
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
        
        {
            bookingsData?.data ? <Card className="col-span-1">
            <CardContent>
              <Chart options={pieChartOptions} series={pieChartSeries} type="pie" height={250} />
            </CardContent>
          </Card>
          :
          <p>Loading---</p>
  
        }
        
        
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
  
        {/* {
          role == "Admin" && (
            <Card className="col-span-1">
          <CardContent>
            <h3 className="font-semibold mb-2">Users</h3>
            {dashboardData?.userData?.map((user, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <Avatar className="w-10 h-10">
                  <img src={user.authImgUrl} alt='user' />
                </Avatar>
                <p>{user.authName}</p>
              </div>
            ))}
          </CardContent>
        </Card>
          )
        }
  
        {role === 'Admin' && (
          <Card className="col-span-1">
          <CardContent>
            <h3 className="font-semibold mb-2">Delivery Men</h3>
            {dashboardData?.deliverMenData?.map((man, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <Avatar className="w-10 h-10">
                  <img src={man.authImgUrl} alt='deliverman' />
                </Avatar>
                <p>{man.authName}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        )}
         */}
  
       
      </div>
    );
};

export default UserDashboard;