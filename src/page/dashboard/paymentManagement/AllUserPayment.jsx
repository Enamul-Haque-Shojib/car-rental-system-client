import useAuth from '@/hooks/useAuth';
import { useGetAllOwnerPaymentQuery } from '@/redux/features/payment/paymentApi';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Loader } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';


const AllUserPayment = () => {
    const {user} = useAuth();

  
  
    //  const {data: bookingsData, isLoading} = useGetAllOwnerBookQuery(user?._id);
    const { data: paymentData, isLoading } = useGetAllOwnerPaymentQuery(user?._id, {
      skip: !user?._id, 
    });


//   const[approvedBook] = useApprovedBookMutation(undefined)

    //  const handleApprovedBook = async(id, carId)=>{
       
    //       try {
    //         const res = await approvedBook({id, car_id:{carId:carId._id}}).unwrap();
    //         console.log(res);
    //         toast.success(res.message)
    //       } catch (error) {
    //         console.log(error)
    //         toast.error(error)
    //       }
       
      
    // }
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-96">
          <Loader className="animate-spin text-gray-400 w-10 h-10" />
        </div>
      );
    }
    return (
        <div className=''>
        <h1 className='text-2xl text-center font-bold'>All User Payments</h1>
        <Table>
      <TableCaption>A list of User Booked.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Avatar</TableHead>
          <TableHead className="">Registration</TableHead>
          <TableHead className="">User</TableHead>
          <TableHead>Pick Location</TableHead>
    
          <TableHead>Drop Location</TableHead>
       
          <TableHead>Pick Date</TableHead>
          <TableHead>Drop Date</TableHead>
          <TableHead className="">Total Cost</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="">Transaction Id</TableHead>
          <TableHead className="">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {paymentData?.data?.map(({_id, carId, userId, pickUpLocation,dropOffLocation, pickUpDate, dropOffDate, totalCost, status, transactionId}) => (
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
                    <AvatarImage src={userId?.photoURL} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <p>{userId?.name}</p>
                    <p>{userId?.email}</p>
                </div>
            </TableCell>
            <TableCell>{pickUpLocation}</TableCell>
         
            <TableCell className="">{dropOffLocation}</TableCell>
           
            <TableCell className="">{pickUpDate}</TableCell>
            <TableCell className="">{dropOffDate}</TableCell>
            <TableCell className="">${totalCost}</TableCell>
            <TableCell className="">{status}</TableCell>
            <TableCell className="">{transactionId}</TableCell>
            <TableCell className="flex justify-around items-center ">
                {/* <button className='cursor-pointer bg-green-600 p-2 rounded-lg' onClick={()=>{handleApprovedBook(_id,carId)}}>Approved</button> */}
                delete
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

export default AllUserPayment;