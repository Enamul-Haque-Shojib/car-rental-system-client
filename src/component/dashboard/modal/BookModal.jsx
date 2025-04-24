

// import React from 'react';
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import toast from 'react-hot-toast';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Controller, useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { useAddBookMutation } from '@/redux/features/booking/bookingApi';
// import useAuth from '@/hooks/useAuth';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';




// import { format } from "date-fns"
// import { CalendarIcon } from "lucide-react"
 
// import { cn } from "@/lib/utils"

// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { useState } from 'react';



// // const getCoordinates = async (location) => {
// //     const apiKey = import.meta.env.VITE_LOCATION_API_KEY; // Replace with your actual OpenCage API key
// //     const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`);
// //     const data = await response.json();
  
// //     if (data.results.length > 0) {
// //       const { lat, lng } = data.results[0].geometry;
// //       return { lat, lng };
// //     } else {
// //     //   console.warn("No results found for location:", location);
// //     //   toast.error(`No results found for location: ${location}`)
// //       return null;
// //     }
// //   };

// const getCoordinates = async (location) => {
//     const apiKey = import.meta.env.VITE_LOCATION_API_KEY;
//     const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`);
//     const data = await response.json();
  
//     if (data.results.length > 0) {
//       const result = data.results[0];
//       const { lat, lng } = result.geometry;
//       const country = result.components?.country;
  
//       // ✅ Check if the location is in Bangladesh
//       if (country === "Bangladesh") {
//         return { lat, lng };
//       } else {
//         toast.error(`Location "${location}" is not in Bangladesh.`);
//         return null;
//       }
//     } else {
//       toast.error(`No results found for location: ${location}`);
//       return null;
//     }
//   };
  


//   const formSchema = z.object({
//     pickUpLocation: z.string().min(2, { message: "Pick-up location is required" }),
//     dropOffLocation: z.string().min(2, { message: "Drop-off location is required" }),
//     pickUpDate: z.string().min(1, { message: "Pick-up date is required" }),
//     dropOffDate: z.string().min(1, { message: "Drop-off date is required" }),
//   }).refine(data => new Date(data.dropOffDate) > new Date(data.pickUpDate), {
//     message: "Drop-off date must be after pick-up date",
//     path: ["dropOffDate"],
//   });
  

// function countDaysBetween(pickUpDate, dropOffDate) {
//     const startDate = new Date(pickUpDate);
//     const endDate = new Date(dropOffDate);

//     const timeDifference = endDate - startDate;

//     const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

//     return dayDifference;
// }
// const BookModal = ({carData}) => {
   
//        const {user} = useAuth();

//        const [addBook, {isLoading}] = useAddBookMutation(undefined);

//     //    const [pickupCoords, setPickupCoords] = useState(null);
//     //     const [dropoffCoords, setDropoffCoords] = useState(null);

      
    
//        const form = useForm({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             pickUpLocation: '',
//             dropOffLocation: '',
//             pickUpDate: undefined,  // Fix: Start as undefined
//             dropOffDate: undefined, // Fix: Start as undefined
//         },
//     });
    
    
    
    
//     const onSubmit= async (data) => {
//         console.log("Submitting with data:", data);
//         console.log("Errors:", form.formState.errors);

//       const pickupCoords = await getCoordinates(data.pickUpLocation)
//       const dropoffCoords = await getCoordinates(data.dropOffLocation)

//       console.log(pickupCoords, dropoffCoords)
      
//       if(pickupCoords && dropoffCoords){

//         data.ownerId=carData?.userId?._id;
//             data.carId=carData?._id;
//             data.userId=user?._id;
//             data.totalCost = countDaysBetween(data.pickUpDate, data.dropOffDate) * parseFloat(carData?.pricePerDay)
//             data.pickUpCoord = pickupCoords;
//             data.dropOffCoord = dropoffCoords;

//             console.log(data)

//         try {
//             const res = await addBook(data).unwrap();
//             console.log(res)
//             form.reset();
          
//             toast.success(res.message);
//         } catch (error) {
//             toast.error('Could not be Booked car')
//             console.error('Error submitting form:', error);
//         }
//       }else{
//         // toast.error(`No results found for location: ${location}`)
//         toast.error(`Invalid location. Please enter valid areas within Bangladesh.`);
//       }
        
    
        
//     };
//     return (
//         <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Booking Car</DialogTitle>
//           <DialogDescription>
//             {`Add location and Date. Per Day: ${carData?.pricePerDay}`} 
//           </DialogDescription>
//         </DialogHeader>
//         <Card className="w-full max-w-2xl text-black">
//             <CardContent>
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                     <FormField control={form.control} name="pickUpLocation" render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Pick Up Location</FormLabel>
//                             <FormControl>
//                             <Input
//                                 placeholder="Enter pick-up location"
//                                 required
//                                 {...field}
//                                 // onBlur={async (e) => {
//                                 // field.onBlur?.();
//                                 // const coords = await getCoordinates(e.target.value);
//                                 // setPickupCoords(coords); // Store in state
//                                 // }}
//                             />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                         )} />

// <FormField control={form.control} name="dropOffLocation" render={({ field }) => (
//   <FormItem>
//     <FormLabel>Drop Off Location</FormLabel>
//     <FormControl>
//       <Input
//         placeholder="Enter drop-off location"
//         required
//         {...field}
//         // onBlur={async (e) => {
//         //   field.onBlur?.();
//         //   const coords = await getCoordinates(e.target.value);
//         //   setDropoffCoords(coords);
//         // }}
//       />
//     </FormControl>
//     <FormMessage />
//   </FormItem>
// )} />

                    

// <Controller
//     control={form.control}
//     name="pickUpDate"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>Pick Up Date</FormLabel>
//             <FormControl>
//                 <Popover>
//                     <PopoverTrigger asChild>
//                         <Button
//                             variant={"outline"}
//                             className={cn(
//                                 "w-[240px] justify-start text-left font-normal",
//                                 !field.value && "text-muted-foreground"
//                             )}
//                         >
//                             <CalendarIcon />
//                             {field.value ? format(new Date(field.value), "PPP") : <span>Pick a date</span>}
//                         </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                         <Calendar
//                             mode="single"
//                             selected={field.value ? new Date(field.value) : undefined}
//                             onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")} // Convert to string
//                             initialFocus
//                             disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                            
//                         />
//                     </PopoverContent>
//                 </Popover>
//             </FormControl>
//             <FormMessage />
//         </FormItem>
//     )}
// />

// <Controller
//     control={form.control}
//     name="dropOffDate"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>Drop Off Date</FormLabel>
//             <FormControl>
//                 <Popover>
//                     <PopoverTrigger asChild>
//                         <Button
//                             variant={"outline"}
//                             className={cn(
//                                 "w-[240px] justify-start text-left font-normal",
//                                 !field.value && "text-muted-foreground"
//                             )}
//                         >
//                             <CalendarIcon />
//                             {field.value ? format(new Date(field.value), "PPP") : <span>Pick a date</span>}
//                         </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                         <Calendar
//                             mode="single"
//                             selected={field.value ? new Date(field.value) : undefined}
//                             onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")} // Convert to string
//                             initialFocus
//                             disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
//                         />
//                     </PopoverContent>
//                 </Popover>
//             </FormControl>
//             <FormMessage />
//         </FormItem>
//     )}
// />

                        
                     

//                         {/* <Button disabled={pickupCoords == null || dropoffCoords==null} type="submit" className="w-full bg-[#ff004f] hover:bg-red-700 transition">
//                             Submit
//                         </Button> */}
//                         <Button type="submit" className="w-full bg-[#ff004f] hover:bg-red-700 transition">
//                             Submit
//                         </Button>
//                     </form>
//                 </Form>
//             </CardContent>
//         </Card>
     
//       </DialogContent>
//     );
// };

// export default BookModal;



import React from 'react';
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAddBookMutation } from '@/redux/features/booking/bookingApi';
import useAuth from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";




 




const getCoordinates = async (location) => {
  const apiKey = import.meta.env.VITE_LOCATION_API_KEY;
  const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`);
  const data = await response.json();

  if (data.results.length > 0) {
    const result = data.results[0];
    const { lat, lng } = result.geometry;
    const country = result.components?.country;

    if (country === "Bangladesh") {
      return { lat, lng };
    } else {
      toast.error(`Location "${location}" is not in Bangladesh.`);
      return null;
    }
  } else {
    toast.error(`No results found for location: ${location}`);
    return null;
  }
};

const formSchema = z.object({
  pickUpLocation: z.string().min(2, { message: "Pick-up location is required" }),
  dropOffLocation: z.string().min(2, { message: "Drop-off location is required" }),
  pickUpDate: z.string().min(1, { message: "Pick-up date is required" }),
  dropOffDate: z.string().min(1, { message: "Drop-off date is required" }),
}).refine(data => new Date(data.dropOffDate) > new Date(data.pickUpDate), {
  message: "Drop-off date must be after pick-up date",
  path: ["dropOffDate"],
});

function countDaysBetween(pickUpDate, dropOffDate) {
  const startDate = new Date(pickUpDate);
  const endDate = new Date(dropOffDate);
  return (endDate - startDate) / (1000 * 60 * 60 * 24);
}

const BookModal = ({ carData }) => {
  const { user } = useAuth();
  const [addBook, { isLoading }] = useAddBookMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickUpLocation: '',
      dropOffLocation: '',
      pickUpDate: undefined,
      dropOffDate: undefined,
    },
  });

  const onSubmit = async (data) => {
    const pickupCoords = await getCoordinates(data.pickUpLocation);
    const dropoffCoords = await getCoordinates(data.dropOffLocation);

    if (pickupCoords && dropoffCoords) {
      data.ownerId = carData?.userId?._id;
      data.carId = carData?._id;
      data.userId = user?._id;
      data.totalCost = countDaysBetween(data.pickUpDate, data.dropOffDate) * parseFloat(carData?.pricePerDay);
      data.pickUpCoord = pickupCoords;
      data.dropOffCoord = dropoffCoords;

      try {
        const res = await addBook(data).unwrap();
        form.reset();
        toast.success(res.message);
      } catch (error) {
        toast.error('Could not book the car');
        console.error('Error submitting form:', error);
      }
    } else {
      toast.error('Invalid location. Please enter valid areas within Bangladesh.');
    }
  };

  return (
    <DialogContent className="sm:max-w-[500px] rounded-2xl shadow-xl p-6 bg-white">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">Book This Car</DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground">
          <h1>Add your location and rental dates. Rate: <span className="font-semibold text-primary">${carData?.pricePerDay} / day</span></h1>
          <h1>Please Enter valid location</h1>
        </DialogDescription>
      </DialogHeader>

      <Card className="w-full">
        <CardContent className="p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField name="pickUpLocation" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Pick-Up Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter pick-up location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="dropOffLocation" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Drop-Off Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter drop-off location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Controller name="pickUpDate" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Pick-Up Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left", !field.value && "text-muted-foreground")}> 
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(new Date(field.value), "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                        className=''
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Controller name="dropOffDate" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Drop-Off Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left", !field.value && "text-muted-foreground")}> 
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(new Date(field.value), "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 transition font-semibold rounded-xl py-2">
                {isLoading ? "Booking..." : "Submit Booking"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </DialogContent>
  );
};

export default BookModal;
