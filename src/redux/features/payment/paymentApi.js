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
        getAllUserPayment: builder.query({
            query: (id) => ({
                url: `/payments/payment-all-user/${id}`,
                method: 'GET'
            }),
            providesTags:["payments"]
        }),
        refundPayment: builder.mutation({
            query:(transactionId) => ({
                url:`payments/refund`,
                method:'POST',
                body:{transactionId}
            }),
            invalidatesTags:['payments']
        })
       
      
    })
})

export const {useAddPaymentMutation, useGetAllOwnerPaymentQuery, useGetAllUserPaymentQuery,useDeletePaymentMutation,useRefundPaymentMutation} = paymentApi;

