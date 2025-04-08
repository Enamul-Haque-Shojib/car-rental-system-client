
import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';



import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader, Star } from 'lucide-react'; // Icon for stars
import useAuth from '@/hooks/useAuth';
import { useAddReviewMutation } from '@/redux/features/reviews/reviewApi';
import toast from 'react-hot-toast';
const ReviewForm = ({carId}) => {
    const { user } = useAuth();
   
    const [addReview, {isLoading}] = useAddReviewMutation(undefined)
   
    const form = useForm({
      defaultValues: {
        feedback: '',
        rating: 0,
      },
    });
    const [selectedRating, setSelectedRating] = useState(0); // State for rating
  
    const handleStarClick = (rating) => {
      setSelectedRating(rating);
      form.setValue('rating', rating); // Set rating value in the form
    };
  
    const onSubmit = async (data) => {
 console.log(data);
  
      try {
        data.userId= user?._id;
  
        const res = await addReview({id: carId, data})
        console.log(res);
        form.reset();
        toast.success(res?.data?.message)
       
      } catch (error) {
        console.error('Error review:', error);
        toast.error('Review could not be added')
      }
    };


    // if (isLoading) {
    //     return (
    //       <div className="flex justify-center items-center h-96">
    //         <Loader className="animate-spin text-gray-400 w-10 h-10" />
    //       </div>
    //     );
    //   }


    return (
        <div>
            <div className="group w-full h-full transition-transform transform hover:scale-101 shadow-lg hover:shadow-xl bg-gradient-to-br rounded-xl overflow-hidden p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {/* Feedback Field */}
            <FormField
              control={form.control}
              name="feedback"
              rules={{ required: 'Feedback is required.' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about the Car"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Share your experience.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Star Rating */}
            <div className="flex flex-col space-y-2 my-4">
              <FormLabel className="mr-4">Rating</FormLabel>
              <div className='flex'>
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`lg:w-8 w-6 lg:h-8 h:6 cursor-pointer ${
                    selectedRating > index ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  onClick={() => handleStarClick(index + 1)}
                />
              ))}
              </div>
              {selectedRating === 0 && (
                <p className="text-red-500 text-sm">Rating is required.</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-span-full text-center">
              <Button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
        </div>
    );
};

export default ReviewForm;