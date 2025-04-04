import React, { useEffect, useState } from 'react';

import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import './CheckoutForm.css';
import { useCreatePaymentMutation } from '@/redux/features/booking/bookingApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import useAuth from '@/hooks/useAuth';
import { useAddPaymentMutation } from '@/redux/features/payment/paymentApi';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
const CheckoutForm = ({myBookingData}) => {
    const {user} = useAuth();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    const [clientSecret, setClientSecret] = useState('');

    const [createPayment] = useCreatePaymentMutation(undefined);

    const {_id, ownerId, userId, carId, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, totalCost, status} = myBookingData;
  
    const [addPayment, {isLoading}] = useAddPaymentMutation(undefined);
    
    useEffect(() => {
        const fetchPayment = async()=>{
            const res = await createPayment({id:_id}).unwrap();
            setClientSecret(res?.data?.clientSecret)
            // console.log(res.data.clientSecret);
        }
        fetchPayment();
    },[createPayment, _id])


    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

      // confirm payment

    const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                name: 'Unknown User',
                email: 'unknown@example.com',
                address: {
                    line1: '123 Default St',
                    city: 'Default City',
                    state: 'Default State',
                    postal_code: '000000',
                    country: 'IN',  // Change based on user's actual country
                }
            },
        },
    });

     
  
      if (paymentIntent.status === 'succeeded') {
        try {
          // Save data in db
          const res = await addPayment({
            ...myBookingData,
            transactionId: paymentIntent?.id,
          })
          console.log(res)
      
          toast.success('Payment Successful!')
          
          // navigate('/dashboard/all_my_booked')
        } catch (error) {
          console.log(error)
        } finally {
        //   setProcessing(false)
          
        }
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {/* <button className='btn bg-green-500 p-5 rounded-lg text-xl' type="submit" disabled={!stripe}>
          Pay
        </button> */}
        <div className='flex justify-around mt-2 gap-2'>
        <button className='btn bg-green-500 p-5 rounded-lg text-xl'
          disabled={!stripe || !clientSecret || isLoading}
          type='submit'
         
        >
          
          {
            isLoading ? <Loader className="animate-spin text-gray-400 w-10 h-10" />:
          `Pay ${myBookingData?.totalCost}$`}
          </button>
        
      </div>
      </form>
    );
};

export default CheckoutForm;