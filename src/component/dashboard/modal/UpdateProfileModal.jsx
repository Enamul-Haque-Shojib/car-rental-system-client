import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import uploadImage from '@/hooks/uploadImage';
import { useGetOneUserQuery, useUpdateUserMutation } from '@/redux/features/user/userApi';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(2).max(50),
    photoURL: z.any(),  // what should be used for file

     
  })
const UpdateProfileModal = ({user}) => {
  
  const [imagePreview, setImagePreview] = useState(null);
  // const {data: userData ,isLoading} = useGetOneUserQuery(id); 
const [updateUser, {isLoading}] = useUpdateUserMutation(undefined);



    const form = useForm({
          resolver: zodResolver(formSchema),
          defaultValues: {
              name:'', 
              photoURL:null,
          }   
        })


        useEffect(() => {
          if (user) {
            form.reset({
              name: user?.name,
              photoURL: null,  
            });
        
            if (user?.photoURL) {
              setImagePreview(user?.photoURL); 
            }
          }
        }, [user, form]);
        

        const onSubmit= async (data) => {
         
          const imageFile = data?.photoURL?.[0];
          let userImg = imagePreview;
          
  
          if (typeof data?.photoURL === 'object' && data?.photoURL?.length > 0) {
            userImg = await uploadImage(imageFile);;
          }
      
            data.photoURL = userImg;
      
          try {
              const res = await updateUser({ id: user?._id, data }).unwrap();
              console.log(res)
              form.reset();
            
              toast.success(res.message);
          } catch (error) {
              toast.error('Could not be updated the profile')
              console.error('Error submitting form:', error);
          }
      };
    
      if(isLoading){
        return <p>Loading.....</p>
      }
    return (
        <DialogContent className="w-full max-w-md rounded-lg bg-white shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Edit Profile</DialogTitle>
          <DialogDescription className="text-gray-500">
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Name Field */}
            <FormField

              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
  control={form.control}
  name="photoURL"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="font-medium text-gray-700">Profile Image</FormLabel>
      <FormControl>
        <Input
          type="file"
          accept="image/*"
          className="border p-2 rounded-md"
          onChange={(e) => {
            const file = e.target.files?.[0];
            field.onChange(e.target.files); // Pass selected files to form state
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              setImagePreview(imageUrl); // Update preview with new file
            }
          }}
        />
      </FormControl>

      {/* Image Preview */}
      {imagePreview && (
        <div className="mt-3 flex justify-center">
          <img
            src={imagePreview}
            width={100}
            height={100}
            alt="Profile Preview"
            className="rounded-md border p-1"
          />
        </div>
      )}
      <FormMessage />
    </FormItem>
  )}
/>



            {/* Submit Button */}
            <div className="flex justify-end space-x-2">
              <Button type="submit" className="bg-[#ff004f] hover:bg-red-600 transition">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>

    );
};

export default UpdateProfileModal;