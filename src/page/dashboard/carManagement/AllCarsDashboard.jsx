import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"



import { Edit, Eye, Trash } from 'lucide-react';
import { Link } from 'react-router';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CarDetailsModal from '@/component/dashboard/modal/CarDetailsModal';
import { useDeleteCarMutation } from '@/redux/features/admin/adminApi';
import toast from 'react-hot-toast';
import { useGetAllCarsQuery } from '@/redux/features/car/carApi';
   
 
const AllCarsDashboard = () => {
    const {data: carsData, isLoading} = useGetAllCarsQuery();
    const [deleteCar] = useDeleteCarMutation()


    
    const handleCarDelete =async(id)=>{
      try {
        const res = await deleteCar(id)
        console.log(res)
        toast.success(res?.data?.message)
      } catch (error) {
        toast.error('could not delete')
        console.log(error)        
      }
      
  }



    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className=''>
            <h1 className='text-2xl text-center font-bold'>All Cars</h1>
            <Table>
          <TableCaption>A list of your cars.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Avatar</TableHead>
              <TableHead className="">Registration</TableHead>
              <TableHead className="">Brand</TableHead>
              <TableHead>Model</TableHead>
        
              <TableHead>Type</TableHead>
           
              <TableHead>Per Day</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="">Available</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {carsData?.data?.map(({_id, registrationNumber, image,brand, carModel,year, type, fuelType, seats, transmission, mileAge, pricePerDay, location, availability, features}) => (
              <TableRow key={_id}>
                <TableCell className="">
                {/* <Avatar>
      <AvatarImage src={image} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar> */}
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src={image}
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
                </TableCell>
                <TableCell className="">{registrationNumber}</TableCell>
                <TableCell className="">{brand}</TableCell>
                <TableCell>{carModel}</TableCell>
             
                <TableCell className="">{type}</TableCell>
               
                <TableCell className="">${pricePerDay}</TableCell>
                <TableCell className="">{location}</TableCell>
                <TableCell className="">{availability ? 'Available' : 'Booked'}</TableCell>
                <TableCell className="flex justify-around items-center ">
                <Dialog>
                    <DialogTrigger asChild>
                        {/* <Button variant="outline">Edit Profile</Button> */}
                        <button className='cursor-pointer'><Eye></Eye></button>
                    </DialogTrigger>
                    <CarDetailsModal car={{_id, registrationNumber, image,brand, carModel,year, type, fuelType, seats, transmission, mileAge, pricePerDay, location, availability, features}}></CarDetailsModal>
                </Dialog>
                    
                    <Link to={`/dashboard/edit_car/${_id}`}><button className='cursor-pointer'><Edit></Edit></button></Link>
                    <button className='cursor-pointer' onClick={()=>{handleCarDelete(_id)}}><Trash></Trash></button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        </div>
      )
};

export default AllCarsDashboard;