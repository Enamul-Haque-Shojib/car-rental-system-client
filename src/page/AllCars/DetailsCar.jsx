import BookModal from '@/component/dashboard/modal/BookModal';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useGetOneCarQuery } from '@/redux/features/car/carApi';
import { UserRound } from 'lucide-react';

import React from 'react';

import { useParams } from 'react-router';

const DetailsCar = () => {
    const {id} = useParams();
     const {data: oneCarData, isLoading} = useGetOneCarQuery(id);
   

   
    //  const {data} = oneCarData;
    //  const {
    //     registrationNumber,
    //     image,
    //     brand,
    //     carModel,
    //     year,
    //     type,
    //     fuelType,
    //     seats,
    //     transmission,
    //     mileAge,
    //     pricePerDay,
    //     location,
    //     availability,
    //     features,
    //     description
    //   } = data

      if(isLoading){
        return <p></p>
      }
    
    return (
        <div className="container mx-auto px-4 my-12">
      <Card className="flex flex-col lg:flex-row shadow-lg hover:shadow-xl transition-all overflow-hidden rounded-lg">
        <div className="lg:w-1/2 p-5 flex flex-col items-center">
          <AspectRatio ratio={16 / 9} className="bg-muted border rounded-lg overflow-hidden">
            <img
              src={oneCarData?.data?.image}
              alt={oneCarData?.data?.brand}
              fill
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </AspectRatio>
          <div className='flex items-center gap-4 mt-4 p-4 border rounded-lg w-full'>
            <Avatar>
              <AvatarImage src={oneCarData?.data?.userId?.photoURL} alt='user' />
              <AvatarFallback><UserRound /></AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{oneCarData?.data?.userId?.name}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">{oneCarData?.data?.userId?.email}</p>
            </div>
          </div>
        </div>
        <div className="p-6 lg:w-1/2 flex flex-col justify-between">
   
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white flex justify-between items-center">{oneCarData?.data?.registrationNumber} <p><span className="font-semibold"></span><span className={!oneCarData?.data?.availability ?'text-red-600' : 'text-green-600'}>{oneCarData?.data?.availability ? 'Available' : 'Booked'}</span></p></CardTitle>
            <CardDescription className=" text-gray-600 dark:text-gray-400">{oneCarData?.data?.description}</CardDescription>
            <Separator></Separator>
          <CardContent className="text-gray-800 dark:text-gray-300">
            <div className='flex justify-between items-center'>
                <div>
                <p><span className="font-semibold">Category: </span> {oneCarData?.data?.type}</p>
            <p><span className="font-semibold">Brand: </span> {oneCarData?.data?.brand}</p>
            <p><span className="font-semibold">Model: </span> {oneCarData?.data?.carModel}</p>
            <p><span className="font-semibold">Year: </span> {oneCarData?.data?.year}</p>
            <p><span className="font-semibold">Fuel Type: </span> {oneCarData?.data?.fuelType}</p>
                </div>
                <div>
                <p><span className="font-semibold">Seats: </span> {oneCarData?.data?.seats}</p>
            <p><span className="font-semibold">Transmission: </span> {oneCarData?.data?.transmission}</p>
            <p><span className="font-semibold">Mile Age: </span> {oneCarData?.data?.mileAge}</p>
            <p><span className="font-semibold">Location: </span> {oneCarData?.data?.location}</p>
            <p><span className="font-semibold">Per Day: </span> ${oneCarData?.data?.pricePerDay}</p>
                </div>
            </div>
          
          </CardContent>
          <Separator></Separator>
            <div className="flex flex-wrap gap-3">
          {oneCarData?.data?.features?.airConditioner && <Badge variant="secondary">Air Conditioner</Badge>}
          {oneCarData?.data?.features?.gps && <Badge variant="secondary">GPS</Badge>}
          {oneCarData?.data?.features?.bluetooth && <Badge variant="secondary">Bluetooth</Badge>}
          {oneCarData?.data?.features?.rearCamera && <Badge variant="secondary">Rear Camera</Badge>}
          {oneCarData?.data?.features?.sunroof && <Badge variant="secondary">Sun Roof</Badge>}
          {oneCarData?.data?.features?.fourWheelDrive && <Badge variant="secondary">Four Wheel Drive</Badge>}
        </div>


          <CardFooter className="flex justify-center mt-4">
            {/* {user && user?._id !== userId?._id && ( */}
              <Dialog>
            <DialogTrigger asChild>
            <Button disabled={oneCarData?.data?.availability=== false} variant="default" size="lg" 
               className="px-6 py-2 text-lg">
                Book Now
              </Button>
            </DialogTrigger>
            <BookModal carData={oneCarData?.data}></BookModal>
            </Dialog>
            {/* )} */}
          </CardFooter>
        </div>
      </Card>


    </div>
  
    );
};

export default DetailsCar;