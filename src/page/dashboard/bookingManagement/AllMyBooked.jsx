import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAuth from '@/hooks/useAuth';
import { useCanceledBookMutation, useGetAllUserBookQuery } from '@/redux/features/booking/bookingApi';
import React from 'react';
import toast from 'react-hot-toast';

const AllMyBooked = () => {
  const {user} = useAuth();
    // const {data: bookingsData, isLoading} = useGetAllUserBookQuery(user?._id);

    const { data: bookingsData, isLoading } = useGetAllUserBookQuery(user?._id, {
          skip: !user?._id, 
        });



    const [canceledBook] = useCanceledBookMutation(undefined);

    const handleCancelBook = async(id)=>{
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
        return <p>Loading...</p>
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
                      <TableHead>Pick Location</TableHead>
                
                      <TableHead>Drop Location</TableHead>
                   
                      <TableHead>Pick Date</TableHead>
                      <TableHead>Drop Date</TableHead>
                      <TableHead className="">Total Cost</TableHead>
                      <TableHead className="">Status</TableHead>
                      <TableHead className="">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookingsData?.data?.map(({_id, ownerId, carId, pickUpLocation,dropOffLocation, pickUpDate, dropOffDate, totalCost, status}) => (
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
                        <TableCell>{pickUpLocation}</TableCell>
                     
                        <TableCell className="">{dropOffLocation}</TableCell>
                       
                        <TableCell className="">{pickUpDate}</TableCell>
                        <TableCell className="">{dropOffDate}</TableCell>
                        <TableCell className="">${totalCost}</TableCell>
                        <TableCell className="">{status}</TableCell>
                         <TableCell className="flex justify-around items-center ">
                            <button className='cursor-pointer bg-red-600 p-2 rounded-lg' onClick={()=>{handleCancelBook(_id)}}>Cancel</button>
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