import UpdateProfileModal from '@/component/dashboard/modal/UpdateProfileModal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import useAuth from '@/hooks/useAuth';
import { useGetOneUserQuery } from '@/redux/features/user/userApi';
import React from 'react';


const Profile = () => {
    const {user} = useAuth();
     const {data: userData ,isLoading} = useGetOneUserQuery(user?._id);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <Card className="w-full max-w-3xl bg-white shadow-lg hover:shadow-xl transition-all rounded-xl p-6 lg:flex lg:items-center">
          {/* Profile Image */}
          <div className="lg:flex lg:flex-row flex flex-col justify-between items-center">
          <div className="flex flex-col items-center lg:w-1/3">
            <Avatar className="w-50 h-50 border border-gray-200 shadow-sm">
              <AvatarImage src={userData?.data?.photoURL || ""} alt="User Avatar" />
              <AvatarFallback className="bg-gray-300 text-gray-700 font-semibold">
                {userData?.data?.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
          </div>
  
          {/* User Info */}
          <div className="lg:w-2/3 flex flex-col justify-between mt-6 lg:mt-0 lg:pl-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 text-center">{userData?.data?.name || "User Name"}</CardTitle>
              <CardDescription className="text-gray-600 mt-1 text-center">{userData?.data?.email || "user@example.com"}</CardDescription>
            </CardHeader>
  
            <CardContent>
              <p className="text-gray-700 font-medium text-center">
                <span className="font-semibold ">Role:</span> {userData?.data?.role || "N/A"}
              </p>
            </CardContent>
  
            {/* Edit Profile Button */}
           <CardFooter className="flex justify-center items-center">
           <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full lg:w-auto bg-[#ff004f] hover:bg-red-600 transition text-white">
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <UpdateProfileModal user={userData?.data}></UpdateProfileModal>
              </Dialog>
           </CardFooter>
             
        
          </div>
          </div>
        </Card>
      </div>
    );
};

export default Profile;