
import CarCard from "./CarCard"
import { Button } from "@/components/ui/button"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaTimes } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";



const AllCars = () => {

    const [open, setOpen] = useState(false);

    const [value, setValue] = useState(2);

    // Available slider values
    const sliderSteps = [2, 4, 6, 8];

    const {data: carsData, isLoading, isError,error} = useGetAllCarsQuery();
console.log(carsData?.data)
    // const carsData = [
    //     {
    //         "id": 1,
    //         "name": "Toyota Corolla",
    //         "type": "Sedan",
    //         "seats": 5,
    //         "transmission": "Automatic",
    //         "air_conditioning": true,
    //         "doors": 4,

    //         "bags_capacity": 2,
    //         "price_per_day": 50,
    //         "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742293402/toyotaCorolla_kd6mu9.jpg"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Honda Civic",
    //         "type": "Sedan",
    //         "seats": 5,
    //         "transmission": "Manual",
    //         "air_conditioning": true,
    //         "doors": 4,

    //         "bags_capacity": 3,
    //         "price_per_day": 55,
    //         "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742292828/hondaCivic_b8nwcm.png"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Ford Mustang",
    //         "type": "Sports",
    //         "seats": 4,
    //         "transmission": "Automatic",
    //         "air_conditioning": true,
    //         "doors": 2,

    //         "bags_capacity": 1,
    //         "price_per_day": 120,
    //         "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742278806/car4_f1slhy.png"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Tesla Model 3",
    //         "type": "Electric",
    //         "seats": 5,
    //         "transmission": "Automatic",
    //         "air_conditioning": true,
    //         "doors": 4,

    //         "bags_capacity": 3,
    //         "price_per_day": 90,
    //         "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742278829/Tesla-Model-3_hb1c14.jpg"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Jeep Wrangler",
    //         "type": "SUV",
    //         "seats": 5,
    //         "transmission": "Manual",
    //         "air_conditioning": true,
    //         "doors": 4,

    //         "bags_capacity": 4,
    //         "price_per_day": 80,
    //         "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742292852/JeepWrangler_ewlojh.jpg"
    //     },
    //     {
    //         "id": 6,
    //         "name": "Mercedes-Benz S-Class",
    //         "type": "Luxury",
    //         "seats": 5,
    //         "transmission": "Automatic",
    //         "air_conditioning": true,
    //         "doors": 4,

    //         "bags_capacity": 3,
    //         "price_per_day": 150,
    //         "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742292872/Mercedes-Benz_sgftnd.jpg"
    //     }
    // ]
if(isLoading){
    return <p>Loading...</p>
}
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <div className="my-6 md:my-10 mb-10 md:mb-20 text-center">

                <h2 className="font-bold text-2xl md:text-3xl font-charm text-[#009900]">Find Your Perfect Ride </h2>
                <p className="px-8 mt-1 max-w-md mx-auto md:text-lg">Compare, explore, and discover the best cars to match your lifestyle and needs.</p>
                {/* filter bar for large screen */}
                <div className="md:flex justify-center hidden mt-4 gap-3 ">

                    <Select >
                        <SelectTrigger className="w-[140px] lg:w-[160px]">
                            <SelectValue placeholder="Select Seats" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Seats</SelectLabel>
                                <SelectItem value="2">2+</SelectItem>
                                <SelectItem value="4">4+</SelectItem>
                                <SelectItem value="6">6+</SelectItem>
                                <SelectItem value="8">8+</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select >
                        <SelectTrigger className="w-[140px] lg:w-[160px]">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Location</SelectLabel>
                                <SelectItem value="Dhaka">Dhaka</SelectItem>
                                <SelectItem value="Chattogram">Chattogram</SelectItem>
                                <SelectItem value="Khulna">Khulna</SelectItem>
                                <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                                <SelectItem value="Rangpur">Rangpur</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select >
                        <SelectTrigger className="w-[140px] lg:w-[160px]">
                            <SelectValue placeholder="Transmission" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Transmission</SelectLabel>
                                <SelectItem value="Automatic">Automatic</SelectItem>
                                <SelectItem value="Manual">Manual</SelectItem>
                                <SelectItem value="Both">Both</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select >
                        <SelectTrigger className="w-[140px] lg:w-[160px]">
                            <SelectValue placeholder="Air Conditioning" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Air Conditioning</SelectLabel>
                                <SelectItem value="Available">Available</SelectItem>
                                <SelectItem value="UnAvailable">Unavailable</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select >
                        <SelectTrigger className="w-[140px] lg:w-[160px]">
                            <SelectValue placeholder="Sort By" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sort By</SelectLabel>
                                <SelectItem value="lowerPrice">Low-to-High</SelectItem>
                                <SelectItem value="higherPrice">High-to-Low</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>


                <DialogTrigger>
                    <Button onClick={() => setOpen(true)} className="w-24 mt-3 bg-primaryColor hover:bg-primaryColor/90 cursor-pointer text-black md:hidden">
                        <HiOutlineAdjustmentsHorizontal /> Filter
                    </Button>
                </DialogTrigger>



                {/* cars container */}

                <div className="mt-5   md:space-y-4">

                    {
                        carsData?.data?.map(car => <CarCard key={car.id} car={car} />)
                    }
                </div>



                {/* sidebar in mobile device */}

                <DialogContent className="fixed right-0   h-auto w-72 sm:w-96 bg-white shadow-lg p-4 flex flex-col [&>button]:hidden">
                    {/* Header with Close Icon */}
                    <div className="flex justify-between items-center border-b pb-1">
                        <h2 className="text-lg font-semibold">Filters</h2>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                            <FaTimes />
                        </Button>
                    </div>

                    {/* Filter Options */}
                    <div className="flex flex-col gap-4 ">
                        {/*  Seats */}
                        <div>
                            <Label className="font-bold">Seats</Label>
                            {/* Display current value */}
                            <div className="text-center text-base font-semibold mb-4">
                                Selected: {value}+
                            </div>

                            {/* Slider */}
                            <Slider
                                value={[value]}
                                onValueChange={(newValue) => setValue(newValue[0])}
                                min={2}
                                max={8}
                                step={2}
                                marks={sliderSteps}

                            />

                            {/* Indicator Labels */}
                            <div className="flex justify-between mt-1  text-sm text-gray-600">
                                {sliderSteps.map((num) => (
                                    <span key={num} className="text-center ">
                                        {num}+
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Transmission */}
                        <div>
                            <Label className="font-bold">Transmission</Label>
                            <div className="flex gap-2 mt-2">
                                <Checkbox id="automatic" />
                                <Label htmlFor="automatic">Automatic</Label>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <Checkbox id="manual" />
                                <Label htmlFor="manual">Manual</Label>
                            </div>
                        </div>

                        {/* Air Conditioning */}
                        <div>
                            <Label className="font-bold ">Air Conditioning</Label>
                            <div className="flex gap-2 mt-2">
                                <Checkbox id="ac" />
                                <Label htmlFor="ac">Available</Label>
                            </div>
                        </div>
                        {/* price sorting */}
                        <div>
                            <Label className="font-bold mb-2">Sort By</Label>
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">Low-to-High</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">High-to-Low</Label>
                                </div>

                            </RadioGroup>
                        </div>
                    </div>

                    {/* Apply & Clear Buttons */}
                    <div className="mt-auto flex gap-4 justify-center">
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Clear
                        </Button>
                        <Button onClick={() => setOpen(false)}>Apply</Button>
                    </div>
                </DialogContent>



            </div>
        </Dialog>
    )
}

export default AllCars
