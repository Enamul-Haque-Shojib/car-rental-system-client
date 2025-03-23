import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
const CarDetailsModal = ({car}) => {
    console.log(car)
    const {_id, registrationNumber, image,brand, carModel,year, type, fuelType, seats, transmission, mileAge, pricePerDay, location, availability, features} = car;
    return (
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
        <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src={image}
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
          <DialogTitle className='flex justify-between items-center'>
            <h1>{registrationNumber}</h1>
            <p>{availability ? 'Available' : 'Booked'}</p>
          </DialogTitle>
          <Separator className='my-3'></Separator>
          <DialogDescription>
            <div className='flex justify-between'>
            <div className=''>
            <p>Brand: {brand}</p>
          <p>Model: {carModel}</p>
          <p>Year: {year}</p>
          <p>Type: {type}</p>
          <p>Fuel Type: {fuelType}</p>
            </div>
            <div className=''>
            <p>Seats: {seats}</p>
          <p>Transmission: {transmission}</p>
          <p>Mile Age: {mileAge}</p>
          <p>Price Per Day: {pricePerDay}</p>
          <p>Location: {location}</p>
            </div>
            </div>
            <Separator className='my-3'></Separator>
            <div className='flex flex-wrap gap-x-3'>
                {features.airConditioner ? <Badge variant="secondary">Air Conditioner</Badge> : ''}
                {features.gps ? <Badge variant="secondary">GPS</Badge> : ''}
                {features.bluetooth ? <Badge variant="secondary">Bluetooth</Badge> : ''}
                {features.rearCamera ? <Badge variant="secondary">Rear Camera</Badge> : ''}
                {features.sunroof ? <Badge variant="secondary">Sun Roof</Badge> : ''}
                {features.fourWheelDrive ? <Badge variant="secondary">Four Wheel Drive</Badge> : ''}
            </div>
           
          </DialogDescription>
        </DialogHeader>
       
      </DialogContent>
    );
};

export default CarDetailsModal;