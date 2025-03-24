import { baseApi } from "../../api/baseApi";



const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBook: builder.mutation({
            query: (carInfo) => ({
                url: '/bookings/book-add',
                method: 'POST',
                body: carInfo
            }),
            invalidatesTags: ["cars", 'bookings'],
        }),
        updateBook: builder.mutation({
            query: (args) => ({
                url: `/bookings/book-update/${args.id}`,
                method: 'PATCH',
                body: args.data
            }),
            invalidatesTags: ["cars", 'bookings'],
        }),
        approvedBook: builder.mutation({
            query: (args) => ({
                url: `/bookings/book-approved/${args.id}`,
                method: 'PATCH',
                body: args.car_id
            }),
            invalidatesTags: ["cars", 'bookings'],
        }),
        canceledBook: builder.mutation({
            query: (id) => ({
                url: `/bookings/book-canceled/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ["cars", 'bookings'],
        }),
      
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/bookings/book-delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["cars", 'bookings'],
        }),
        getAllUserBook: builder.query({
            query: (id) => ({
                url: `/bookings/book-all-user/${id}`,
                method: 'GET'
            }),
            providesTags:['cars', 'bookings']
        }),
        getAllOwnerBook: builder.query({
            query: (id) => ({
                url: `/bookings/book-all-owner/${id}`,
                method: 'GET'
            }),
            providesTags:['cars', 'bookings']
        }),
      
    })
})

export const {useAddBookMutation, useUpdateBookMutation, useApprovedBookMutation, useDeleteBookMutation, useGetAllOwnerBookQuery, useGetAllUserBookQuery, useCanceledBookMutation} = bookingApi;

