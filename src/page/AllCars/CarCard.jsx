import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { UserRound } from "lucide-react";
import { Link } from "react-router";


const CarCard = ({ car }) => {
    const {
        _id,
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
        status,
        features,
        image,
        description,
        registrationNumber,
        userId
    } = car

    return (
        <Card className="w-full lg:w-[320px] sm:w-[350px] bg-white shadow-md rounded-lg overflow-hidden">
        <CardHeader className="p-4">
          <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-md">
            <img
              src={image}
              alt="item"
              fill
              className="h-full w-full object-cover rounded-md"
            />
          </AspectRatio>
          <CardTitle className="text-lg font-bold text-gray-900 dark:text-white flex justify-between items-center">
                        {brand} 
                        <p>
                        <span className="font-semibold"></span>
                        <span className={status==='not_rent' ? 'text-green-600' : 'text-red-600'}>
                          {
                            status==='disable' ? 'Disabled' : status==='not_rent' ? 'Available' : 'Booked'
                          }
                        
                        </span>
                        </p>
                        </CardTitle>
        </CardHeader>
        <CardContent className=" text-gray-600 text-sm ">
          <p><span className="font-semibold">Category:</span> {type}</p>
          <p><span className="font-semibold">Model:</span> {carModel}</p>
          <p><span className="font-semibold">Per Day:</span> ${pricePerDay}</p>
          
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center gap-3">
            <Avatar>
              <AvatarImage src={userId?.photoURL} alt="user" />
              <AvatarFallback>
                <UserRound className="text-gray-500" />
              </AvatarFallback>
            </Avatar>
            <span className="text-gray-700">Owner</span>
          </div>
          <Link to={`/detailsCar/${_id}`}>
            <Button variant="outline" className="w-full sm:w-auto">
              View Details
            </Button>
          </Link>
          </div>
        
          
        </CardFooter>
      </Card>
    )
}

export default CarCard
