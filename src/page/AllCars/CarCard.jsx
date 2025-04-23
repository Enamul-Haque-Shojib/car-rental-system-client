import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { UserRound } from "lucide-react";
import { Link } from "react-router";
import { MotionConfig, motion } from "framer-motion";

const CarCard = ({ car }) => {
  const {
    _id,
    brand,
    carModel,

    type,




    pricePerDay,

    status,



    image,
    userId
  } = car

  return (<MotionConfig>
    <motion.div whileHover={{ scale: 1.05, y: -10 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
      <Card className="w-full lg:w-[320px] sm:w-[350px] light: bg-card  shadow-md rounded-lg overflow-hidden">
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
              <span className={status === 'not_rent' ? 'text-green-600' : 'text-red-600'}>
                {
                  status === 'disable' ? 'Disabled' : status === 'not_rent' ? 'Available' : 'Booked'
                }

              </span>
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="  text-sm ">
          <p><span className="font-semibold">Category:</span> {type}</p>
          <p><span className="font-semibold">Model:</span> {carModel}</p>
          <p><span className="font-semibold">Per Day:</span> ${}</p>
         
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="flex justify-between items-center w-full">
            {/* <div className="flex items-center justify-center gap-3">
              <Avatar>
                <AvatarImage src={userId?.photoURL} alt="user" />
                <AvatarFallback>
                  <UserRound className="text-gray-500" />
                </AvatarFallback>
              </Avatar>
              <span className="text-gray-700">Owner</span>
            </div> */}
 <p> <span className="font-bold text-3xl">${pricePerDay}</span>/Per Day</p>
            <Link to={`/detailsCar/${_id}`}>
              <Button className="w-full sm:w-auto">
                View Details
              </Button>
            </Link>
          </div>


        </CardFooter>
      </Card></motion.div></MotionConfig>
  )
}

export default CarCard
