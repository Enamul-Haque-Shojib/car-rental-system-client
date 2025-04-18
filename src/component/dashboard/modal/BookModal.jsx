

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
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAddBookMutation } from '@/redux/features/booking/bookingApi';
import useAuth from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';




import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';



const getCoordinates = async (location) => {
    const apiKey = 'f2e2f68e66824dc0b867442c52a2a616'; // Replace with your actual OpenCage API key
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`);
    const data = await response.json();
  
    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lng };
    } else {
      console.warn("No results found for location:", location);
      toast.error(`No results found for location: ${location}`)
      return null;
    }
  };


const formSchema = z.object({
    pickUpLocation: z.string().min(2),
    dropOffLocation: z.string().min(2),
    // pickUpDate: z.date(),
    // dropOffDate: z.date()
    pickUpDate: z.string().min(1),  // Store as string
    dropOffDate: z.string().min(1) 
});

function countDaysBetween(pickUpDate, dropOffDate) {
    const startDate = new Date(pickUpDate);
    const endDate = new Date(dropOffDate);

    const timeDifference = endDate - startDate;

    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    return dayDifference;
}
const BookModal = ({carData}) => {
   
       const {user} = useAuth();

       const [addBook, {isLoading}] = useAddBookMutation(undefined);

       const [pickupCoords, setPickupCoords] = useState(null);
        const [dropoffCoords, setDropoffCoords] = useState(null);

        // console.log('pick: ',pickupCoords, 'drop: ', dropoffCoords)
    
       const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pickUpLocation: '',
            dropOffLocation: '',
            pickUpDate: undefined,  // Fix: Start as undefined
            dropOffDate: undefined, // Fix: Start as undefined
        },
    });
    
    
    
    
    const onSubmit= async (data) => {
      
    
        data.ownerId=carData?.userId?._id;
            data.carId=carData?._id;
            data.userId=user?._id;
            data.totalCost = countDaysBetween(data.pickUpDate, data.dropOffDate) * parseFloat(carData?.pricePerDay)
            data.pickUpCoord = pickupCoords;
            data.dropOffCoord = dropoffCoords;

            console.log(data)

        try {
            const res = await addBook(data).unwrap();
            console.log(res)
            form.reset();
          
            toast.success(res.message);
        } catch (error) {
            toast.error('Could not be Booked car')
            console.error('Error submitting form:', error);
        }
    };
    return (
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Booking Car</DialogTitle>
          <DialogDescription>
            {`Add location and Date. Per Day: ${carData?.pricePerDay}`} 
          </DialogDescription>
        </DialogHeader>
        <Card className="w-full max-w-2xl text-black">
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="pickUpLocation" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pick Up Location</FormLabel>
                            <FormControl>
                            <Input
                                placeholder="Enter pick-up location"
                                required
                                {...field}
                                onBlur={async (e) => {
                                field.onBlur?.();
                                const coords = await getCoordinates(e.target.value);
                                setPickupCoords(coords); // Store in state
                                }}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )} />

<FormField control={form.control} name="dropOffLocation" render={({ field }) => (
  <FormItem>
    <FormLabel>Drop Off Location</FormLabel>
    <FormControl>
      <Input
        placeholder="Enter drop-off location"
        required
        {...field}
        onBlur={async (e) => {
          field.onBlur?.();
          const coords = await getCoordinates(e.target.value);
          setDropoffCoords(coords);
        }}
      />
    </FormControl>
    <FormMessage />
  </FormItem>
)} />

                    

<Controller
    control={form.control}
    name="pickUpDate"
    render={({ field }) => (
        <FormItem>
            <FormLabel>Pick Up Date</FormLabel>
            <FormControl>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[240px] justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon />
                            {field.value ? format(new Date(field.value), "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")} // Convert to string
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
/>

<Controller
    control={form.control}
    name="dropOffDate"
    render={({ field }) => (
        <FormItem>
            <FormLabel>Drop Off Date</FormLabel>
            <FormControl>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[240px] justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon />
                            {field.value ? format(new Date(field.value), "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")} // Convert to string
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
/>

                        
                     

                        <Button disabled={pickupCoords == null || dropoffCoords==null} type="submit" className="w-full bg-[#ff004f] hover:bg-red-700 transition">
                            Submit
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
     
      </DialogContent>
    );
};

export default BookModal;
