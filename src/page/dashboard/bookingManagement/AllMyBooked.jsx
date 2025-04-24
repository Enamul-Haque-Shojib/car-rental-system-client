import MapWithPins from '@/component/dashboard/map/MapWithPins';
import AddReviewModal from '@/component/dashboard/modal/AddReviewModal';
import PayModal from '@/component/dashboard/modal/PayModal';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAuth from '@/hooks/useAuth';
import { useCanceledBookMutation, useGetAllUserBookQuery } from '@/redux/features/booking/bookingApi';
import { Loader, MapPin, Star, X } from 'lucide-react';


import React from 'react';
import toast from 'react-hot-toast';
import CountDownTimer from './CountDownTimer';


const AllMyBooked = () => {
  const { user } = useAuth();



  const { data: bookingsData, isLoading } = useGetAllUserBookQuery(user?._id, {
    skip: !user?._id,
  });



  const [canceledBook] = useCanceledBookMutation(undefined);


  console.log(bookingsData);

  const handleCancelBook = async (id) => {
    try {
      const res = await canceledBook(id).unwrap();
      console.log(res);
      toast.success(res.message)
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader className="animate-spin text-gray-400 w-10 h-10" />
      </div>
    );
  }

  return (
    <div className=''>
      <h1 className='text-2xl text-center font-bold'>All My Bookings</h1>
      <Table>
        <TableCaption>A list of My Booked.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Avatar</TableHead>
            <TableHead className="">Registration</TableHead>
            <TableHead className="">Owner</TableHead>
            <TableHead>Location</TableHead>

  

            <TableHead>Date</TableHead>
          
            <TableHead>Time Remaining</TableHead>

            <TableHead>Map</TableHead>
            <TableHead className="">Total Cost</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookingsData?.data?.map(({ _id, ownerId, userId, carId, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, totalCost, status, pickUpCoord, dropOffCoord }, index) => (
            <TableRow key={_id}>
              <TableCell className="">

                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img
                    src={carId?.image}  
                    alt="Photo by Drew Beamer"
                    fill
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
              </TableCell>
              <TableCell className="">{carId?.registrationNumber}</TableCell>
              <TableCell className="flex justify-start items-center gap-2">
                <Avatar>
                  <AvatarImage src={ownerId?.photoURL} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p>{ownerId?.name}</p>
                  <p>{ownerId?.email}</p>
                </div>
              </TableCell>
              <TableCell>{pickUpLocation} to {dropOffLocation}</TableCell>

          

              <TableCell className="">{pickUpDate} to {dropOffDate}</TableCell>
    
              <TableCell className="">
                  <CountDownTimer booking={{pickUpDate,dropOffDate}} index={index}/>     
              </TableCell>
              <TableCell className="text-center">
                        <Dialog>
                          <DialogTrigger asChild>
                          <MapPin variant="outline" className="w-full text-lg cursor-pointer">
                              View Location
                            </MapPin>
                          </DialogTrigger>
                          <MapWithPins
                            start_address={pickUpLocation}
                            start_latitude={pickUpCoord.lat}
                            start_longitude={pickUpCoord.lng}
                            end_address={dropOffLocation}
                            end_latitude={dropOffCoord.lat}
                            end_longitude={dropOffCoord.lng}
                          />
                        </Dialog>
                      </TableCell>
              <TableCell className="">${totalCost}</TableCell>
              <TableCell className="">{status}</TableCell>

              <TableCell className="flex justify-around items-center ">
                <Dialog>
                  <DialogTrigger asChild>
                    {
                      status==='Completed' && <button className='cursor-pointer'><Star></Star></button>
                    }
                    
                  </DialogTrigger>
                  <AddReviewModal carId={carId}></AddReviewModal>
                </Dialog>
              
                {
                      status==='Pending' && <X className='cursor-pointer text-red-600 m-1 text-lg' onClick={()=>{handleCancelBook(_id)}}>Cancel</X>
                  }
                <Dialog>
                  <DialogTrigger asChild>
                  {
                     <button className='cursor-pointer bg-green-500 p-2 rounded-lg'>Pay</button>
                  }
                    
                   
                  </DialogTrigger>
                  <PayModal myBookingData={{ _id, ownerId, userId, carId, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, totalCost, status }}></PayModal>
                </Dialog>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">0</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default AllMyBooked;