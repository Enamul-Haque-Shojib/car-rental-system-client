import AddReviewModal from '@/component/dashboard/modal/AddReviewModal';
import PayModal from '@/component/dashboard/modal/PayModal';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAuth from '@/hooks/useAuth';
import { useCanceledBookMutation } from '@/redux/features/booking/bookingApi';
import { useGetAllUserPaymentQuery, useRefundPaymentMutation } from '@/redux/features/payment/paymentApi';
import { Loader, Star } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const AllMyPayment = () => {
    const {user} = useAuth();
    // const {data: bookingsData, isLoading} = useGetAllUserBookQuery(user?._id);

    const { data: paymentData, isLoading } = useGetAllUserPaymentQuery(user?._id, {
          skip: !user?._id, 
        });

      const [refundPayment,{isLoading:isRefundProcessing}]  = useRefundPaymentMutation()



    // const [canceledBook] = useCanceledBookMutation(undefined);

    // const handleCancelBook = async(id)=>{
    //   try {
    //     const res = await canceledBook(id).unwrap();
    //     console.log(res);
    //     toast.success(res.message)
    //   } catch (error) {
    //     console.log(error)
    //     toast.error(error)
    //   }
    // }

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-96">
          <Loader className="animate-spin text-gray-400 w-10 h-10" />
        </div>
      );
    }

    const handleRefund = async (transactionId) => {
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(async (result) => {
        if (result.isConfirmed) {

          const res = await refundPayment(transactionId).unwrap()
          if (res.success) {
            Swal.fire({
              title: "Refund Successful",
              text: "Your refund has been processed successfully.",
              icon: "success"
            });
          } else {
            Swal.fire({
              title: "Refund Failed",
              text: "Something went wrong. Please try again.",
              icon: "error"
            });
          }
          
        }
      });
    
    };
    
    return (
          <div className=''>
                    <h1 className='text-2xl text-center font-bold'>All My Payments</h1>
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
                   
                      <TableHead className="">Transaction Id</TableHead>
                      <TableHead className="">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentData?.data?.map(({_id, ownerId, userId, carId, pickUpLocation,dropOffLocation, pickUpDate, dropOffDate, totalCost, status, transactionId}) => (
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
                     
                        <TableCell className="">{transactionId}</TableCell>
                        
                         <TableCell className="flex  items-center justify-center ">

                          {/* {
                            status === 'paid' ? <Button disabled={isRefundProcessing} className={'bg-red-600 cursor-pointer'} onClick={() => handleRefund(transactionId)} >Cancel & Refund</Button> :  <Button className={'bg-yellow-600'} >Booking cancelled</Button>
                          } */}

<Button disabled={isRefundProcessing} className={'bg-red-600 cursor-pointer'} onClick={() => handleRefund(transactionId)} >Cancel & Refund</Button>
                         
                        
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

export default AllMyPayment;