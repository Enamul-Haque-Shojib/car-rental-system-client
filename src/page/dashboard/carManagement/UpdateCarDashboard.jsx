import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


import { useState } from 'react';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { useUpdateCarMutation } from '@/redux/features/admin/adminApi';
import toast from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';
import uploadImage from '@/hooks/uploadImage';
import { useGetOneCarQuery } from '@/redux/features/car/carApi';
import { useParams } from 'react-router';

const formSchema = z.object({
    registrationNumber: z.string().min(2).max(50),
    image: z.any(),  // what should be used for file
     brand:z.string().min(2), 
        carModel:z.string().min(2),
        year: z.string().min(2),
        type: z.string().min(2), 
        fuelType: z.string().min(2), 
        seats: z.string().min(1), 
        transmission: z.string().min(2),  
        mileAge: z.string().min(2),  
        pricePerDay: z.string().min(2),  
        location: z.string().min(2),  
        description: z.string().min(2),
        availability: z.boolean(),
        features: z.object({
                airConditioner: z.boolean(),
                gps: z.boolean(),
                bluetooth: z.boolean(),
                rearCamera: z.boolean(),
                fourWheelDrive: z.boolean(),
                sunroof: z.boolean()
              }), 

  });
  const formatSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "_") + "s"; // Simple pluralization
  };
const UpdateCarDashboard = () => {
    const {id} = useParams();

     const {user} = useAuth();
       const [updateCar, {isLoading}] = useUpdateCarMutation(undefined);
       const {data: oneCarData} = useGetOneCarQuery(id);
    
    const [imagePreview, setImagePreview] = useState(null);

      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            registrationNumber:'', 
            image:null,
            brand:'', 
            carModel: '',
            year: '', 
            type: '', 
            fuelType: '', 
            seats: '', 
            transmission: '', 
            mileAge: '', 
            pricePerDay: '', 
            location: '',  
            description: '', 
            availability: false,
            features: {
                airConditioner: false,
                gps: false,
                bluetooth: false,
                rearCamera: false,
                fourWheelDrive: false,
                sunroof: false,
              },
        },
      })

      useEffect(() => {
        if (oneCarData?.data) {
            form.reset({
                registrationNumber: oneCarData.data.registrationNumber || '',
                image: oneCarData.data.image || null,
                brand: oneCarData.data.brand || '',
                carModel: oneCarData.data.carModel || '',
                year: String(oneCarData.data.year || ''), 
                type: oneCarData.data.type || '',
                fuelType: oneCarData.data.fuelType || '',
                seats: String(oneCarData.data.seats || ''),
                transmission: oneCarData.data.transmission || '',
                mileAge: String(oneCarData.data.mileAge || ''),
                pricePerDay: String(oneCarData.data.pricePerDay || ''),
                location: oneCarData.data.location || '',
                description: oneCarData.data.description || '',
                availability: oneCarData.data.availability || false,
                features: {
                    airConditioner: oneCarData.data.features?.airConditioner || false,
                    gps: oneCarData.data.features?.gps || false,
                    bluetooth: oneCarData.data.features?.bluetooth || false,
                    rearCamera: oneCarData.data.features?.rearCamera || false,
                    fourWheelDrive: oneCarData.data.features?.fourWheelDrive || false,
                    sunroof: oneCarData.data.features?.sunroof || false,
                },
            });
    
            setImagePreview(oneCarData.data.image);
        }
    }, [oneCarData, form]);
    
    
    
    
    const onSubmit= async (data) => {
        const imageFile = data.image?.[0];
        let carImgUrl = imagePreview;
        

        if (typeof data.image === 'object' && data.image.length > 0) {
            carImgUrl = await uploadImage(imageFile);;
        }
    
        data.userId = user?._id;
        data.image = carImgUrl;
        data.slugType = formatSlug(data.type)
        // data.year = parseInt(data.year);
        // data.mileAge = parseInt(data.mileAge);
        // data.seats = parseInt(data.seats);
        // data.pricePerDay = parseInt(data.pricePerDay);
 console.log(data);
    
        try {
            const res = await updateCar({ id, data }).unwrap();
            console.log(res)
            form.reset();
          
            toast.success(res.message);
        } catch (error) {
            toast.error('Could not add car')
            console.error('Error submitting form:', error);
        }
    };
    return (
       <div className="flex items-center justify-center min-h-screen p-4">
               <Card className="w-full max-w-2xl text-black shadow-xl">
                   <CardHeader>
                       <CardTitle className="text-center text-xl">Update Car</CardTitle>
                   </CardHeader>
                   <CardContent>
                       <Form {...form}>
                           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                               <FormField control={form.control} name="brand" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Brand</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter brand name" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="carModel" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Model</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter model name" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="registrationNumber" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Registration Number</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter model name" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="year" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>year</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter year" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="type" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Type</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter type" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="fuelType" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Fuel Type</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter fuel type" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="seats" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Seats</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter Seats number" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="transmission" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Transmission</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter transmission" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="mileAge" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Mile Age</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter mile age" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="pricePerDay" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Price Per Day</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter price" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               <FormField control={form.control} name="location" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Location</FormLabel>
                                       <FormControl>
                                           <Input placeholder="Enter location" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
       
       <FormField
                                   control={form.control}
                                   name="availability"
                                   render={({ field }) => (
                                       <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                           <FormControl>
                                               <Checkbox
                                                   checked={field.value}
                                                   onCheckedChange={field.onChange} // This ensures state updates correctly
                                               />
                                           </FormControl>
                                           <FormLabel>Availability</FormLabel>
                                       </FormItem>
                                   )}
                               />
                               <FormField control={form.control} name="image" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Car Image</FormLabel>
                                       <FormControl>
                                           <Input type="file" accept="image/*" onChange={(e) => {
                                               const file = e.target.files?.[0];
                                               field.onChange(e.target.files);
                                               if (file) {
                                                   const imageUrl = URL.createObjectURL(file);
                                                   setImagePreview(imageUrl);
                                               }
                                           }} />
                                       </FormControl>
                                       {imagePreview && <img src={imagePreview} width={100} height={100} alt="Preview" className="rounded-lg mt-2" />}
                                       <FormMessage />
                                   </FormItem>
                               )} />
       
                               <FormField control={form.control} name="description" render={({ field }) => (
                                   <FormItem>
                                       <FormLabel>Description</FormLabel>
                                       <FormControl>
                                           <Textarea placeholder="Project description" required {...field} />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )} />
                               
       
                               <FormField
                                   control={form.control}
                                   name="features.airConditioner"
                                   render={({ field }) => (
                                       <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                           <FormControl>
                                               <Checkbox
                                                   checked={field.value}
                                                   onCheckedChange={field.onChange} // This ensures state updates correctly
                                               />
                                           </FormControl>
                                           <FormLabel>Air Conditioner</FormLabel>
                                       </FormItem>
                                   )}
                               />
                               <FormField
                                   control={form.control}
                                   name="features.gps"
                                   render={({ field }) => (
                                       <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                           <FormControl>
                                               <Checkbox
                                                   checked={field.value}
                                                   onCheckedChange={field.onChange} // This ensures state updates correctly
                                               />
                                           </FormControl>
                                           <FormLabel>GPS</FormLabel>
                                       </FormItem>
                                   )}
                               />
                               <FormField
                                   control={form.control}
                                   name="features.bluetooth"
                                   render={({ field }) => (
                                       <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                           <FormControl>
                                               <Checkbox
                                                   checked={field.value}
                                                   onCheckedChange={field.onChange} // This ensures state updates correctly
                                               />
                                           </FormControl>
                                           <FormLabel>Blue Tooth</FormLabel>
                                       </FormItem>
                                   )}
                               />
                               <FormField
                                   control={form.control}
                                   name="features.rearCamera"
                                   render={({ field }) => (
                                       <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                           <FormControl>
                                               <Checkbox
                                                   checked={field.value}
                                                   onCheckedChange={field.onChange} // This ensures state updates correctly
                                               />
                                           </FormControl>
                                           <FormLabel>Rear Camera</FormLabel>
                                       </FormItem>
                                   )}
                               />
                               <FormField
                                   control={form.control}
                                   name="features.sunroof"
                                   render={({ field }) => (
                                       <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                           <FormControl>
                                               <Checkbox
                                                   checked={field.value}
                                                   onCheckedChange={field.onChange} // This ensures state updates correctly
                                               />
                                           </FormControl>
                                           <FormLabel>Sun Roof</FormLabel>
                                       </FormItem>
                                   )}
                               />
                               <FormField
                                   control={form.control}
                                   name="features.fourWheelDrive"
                                   render={({ field }) => (
                                       <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                           <FormControl>
                                               <Checkbox
                                                   checked={field.value}
                                                   onCheckedChange={field.onChange} // This ensures state updates correctly
                                               />
                                           </FormControl>
                                           <FormLabel>Four Wheel Drive</FormLabel>
                                       </FormItem>
                                   )}
                               />
                               
       
                            
       
                               <Button type="submit" className="w-full bg-[#ff004f] hover:bg-red-700 transition">
                                   Submit
                               </Button>
                           </form>
                       </Form>
                   </CardContent>
               </Card>
           </div>
    );
};

export default UpdateCarDashboard;