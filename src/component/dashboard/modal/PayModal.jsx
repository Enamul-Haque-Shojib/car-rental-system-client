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
} from "@/components/ui/dialog";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '@/component/Form/CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISH_KEY);

const PayModal = ({myBookingData}) => {
    
    const {_id, ownerId, userId, carId, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, totalCost, status} = myBookingData;
    return (
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment Rental Car</DialogTitle>
          <DialogDescription>
            Pay rent car 
          </DialogDescription>
        </DialogHeader>
        <div><strong>Pick Date:</strong> {pickUpDate}</div>
            <div><strong>Drop Off Date:</strong> {dropOffDate}</div>
        <div><strong>Pick Up:</strong> {pickUpLocation}</div>
            <div><strong>Drop Off:</strong> {dropOffLocation}</div>
            <div><strong>Car Number:</strong> {carId.registrationNumber}</div>
            <div><strong>Owner:</strong> {ownerId.name}</div>
            <div><strong>Total Cost:</strong> {totalCost}</div>
        <div>
        <Elements stripe={stripePromise}>
        <CheckoutForm myBookingData={myBookingData}/>
        </Elements>
        </div>
      </DialogContent>
    );
};

export default PayModal;