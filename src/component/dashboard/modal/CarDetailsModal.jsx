import React from 'react';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const CarDetailsModal = ({ car }) => {
  const {
    registrationNumber,
    image,
    brand,
    carModel,
    year,
    type,
    fuelType,
    seats,
    transmission,
    mileAge,
    pricePerDay,
    location,
    availability,
    features,
  } = car;

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            src={image}
            alt="Car Image"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>

        <DialogTitle className="flex justify-between items-center">
          <span className="text-lg font-semibold">{registrationNumber}</span>
          <span className={`px-2 py-1 rounded ${availability ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {availability ? "Available" : "Booked"}
          </span>
        </DialogTitle>

        <Separator className="my-3" />
      </DialogHeader>

      {/* ✅ Replace <DialogDescription> with <div> to prevent hydration error */}
      <div className="text-sm text-gray-600">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div><strong>Brand:</strong> {brand}</div>
            <div><strong>Model:</strong> {carModel}</div>
            <div><strong>Year:</strong> {year}</div>
            <div><strong>Type:</strong> {type}</div>
            <div><strong>Fuel Type:</strong> {fuelType}</div>
          </div>
          <div>
            <div><strong>Seats:</strong> {seats}</div>
            <div><strong>Transmission:</strong> {transmission}</div>
            <div><strong>Mileage:</strong> {mileAge}</div>
            <div><strong>Per Day:</strong> ${pricePerDay}</div>
            <div><strong>Location:</strong> {location}</div>
          </div>
        </div>

        <Separator className="my-3" />

        <div className="flex flex-wrap gap-3">
          {features.airConditioner && <Badge variant="secondary">Air Conditioner</Badge>}
          {features.gps && <Badge variant="secondary">GPS</Badge>}
          {features.bluetooth && <Badge variant="secondary">Bluetooth</Badge>}
          {features.rearCamera && <Badge variant="secondary">Rear Camera</Badge>}
          {features.sunroof && <Badge variant="secondary">Sun Roof</Badge>}
          {features.fourWheelDrive && <Badge variant="secondary">Four Wheel Drive</Badge>}
        </div>
      </div>
    </DialogContent>
  );
};

export default CarDetailsModal;
