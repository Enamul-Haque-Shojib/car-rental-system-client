import { baseApi } from "@/redux/api/baseApi";


const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addPayment: builder.mutation({
            query: (paymentInfo) => ({
                url: '/payments/payment-add',
                method: 'POST',
                body: paymentInfo
            }),
            invalidatesTags: ['payments'],
        }),
       
        
      
      
        deletePayment: builder.mutation({
            query: (id) => ({
                url: `/payments/payment-delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["payments"],
        }),
        
        getAllOwnerPayment: builder.query({
            query: (id) => ({
                url: `/payments/payment-all-owner/${id}`,
                method: 'GET'
            }),
            providesTags:["payments"]
        }),
       
      
    })
})

export const {useAddPaymentMutation, useGetAllOwnerPaymentQuery, useDeletePaymentMutation} = paymentApi;

