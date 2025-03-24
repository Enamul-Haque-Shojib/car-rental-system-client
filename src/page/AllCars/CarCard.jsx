// eslint-disable-next-line no-unused-vars
import { MdGroup } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineLuggage } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";
import { Button } from "@/components/ui/button"
import { FaCheck } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
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
        availability,
        features,
        image,
        description,
        registrationNumber,
    } = car

    return (
        <div className="flex flex-col mx-10 sm:max-w-md sm:mx-auto md:max-w-6xl md:justify-center md:gap-8 lg:gap-16 md:px-8 md:flex-row ">
            {/* car image */}
            <div className="md:w-52 lg:w-80">
                <img src={image} className="w-full h-full " alt="" />

            </div>

            {/* car details */}

            <TooltipProvider>
                <div className="flex flex-col items-start md:justify-center mt-2  gap-2">
                    <h3 className="font-bold text-xl lg:text-2xl">{brand}</h3>

                    <div className="flex gap-3 justify-center ">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="flex items-center gap-1"><MdGroup /> <span>{seats}</span></div>
                            </TooltipTrigger>
                            <TooltipContent>
                                {seats} Adult passengers
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <div className="flex items-center gap-1"><GiCarDoor /> <span>4</span></div>
                            </TooltipTrigger>
                            <TooltipContent>
                                4 Doors
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger >
                                <div className="flex items-center gap-1"><MdOutlineLuggage /> <span>4</span></div>
                            </TooltipTrigger>
                            <TooltipContent className=" p-2">
                                4 Large Bag
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="flex items-center gap-1"><TbManualGearbox /> <span>{transmission}</span></div>
                            </TooltipTrigger>
                            <TooltipContent>
                                {transmission} transmission
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <div className="flex items-center gap-1"><TbAirConditioning /> <span>{features?.airConditioner ? "Available" : "Unavailable"}</span></div>
                            </TooltipTrigger>
                            <TooltipContent>
                            Air Conditioning {features?.airConditioner ? "Available" : "Unavailable"}
                            </TooltipContent>
                        </Tooltip>

                    </div>

                    <div>
                        <div className="flex items-center gap-1 ">
                        <FaCheck className="text-xs text-[#009900]"/> <span>Basic protection included</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                        <FaCheck className="text-xs text-[#009900]" /> <span>Unlimited Mileage</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                        <FaCheck className="text-xs text-[#009900]"/> <span>Theft Protection</span>
                        </div>

                    </div>


                </div>
            </TooltipProvider>

            {/* car price section */}
            <div className="my-3 md:my-0 items-end flex-col flex md:justify-center lg:ml-10">
                <p className=""> From </p>
                <p className="font-bold text-xl">${pricePerDay} <span className="font-semibold">/day</span> </p>
                <Link to={`/detailsCar/${_id}`}><Button className="bg-primaryColor text-black hover:bg-primaryColor/90 cursor-pointer mt-2 w-full h-10">Details</Button></Link>
            </div>

        </div>
    )
}

export default CarCard
