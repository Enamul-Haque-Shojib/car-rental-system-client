import { baseApi } from "@/redux/api/baseApi";

const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addReview: builder.mutation({
            query: (args) => ({
                url: `auth/add-review/${args.id}`,
                method: 'PATCH',
                body: args.data
            }),
            invalidatesTags: ["reviews"],
        }),
        
        getOneReview: builder.query({
            query: (id) => ({
                url: `/auth/get-one-review/${id}`,
              
                method: 'GET'
            }),
            providesTags: ['reviews']
        }),
        getAllReviews: builder.query({
            query: () => ({
                url: `/auth/get-reviews`,
              
                method: 'GET'
            }),
            providesTags: ['reviews'],
            
        }),
    })
})

export const {useAddReviewMutation, useGetAllReviewsQuery, useGetOneReviewQuery} = reviewApi;