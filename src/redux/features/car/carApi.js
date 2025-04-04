import { baseApi } from "@/redux/api/baseApi";

const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getAllCars: builder.query({
            query: () => ({
                url: `/cars`, // Conditionally set the URL
                method: 'GET'
            }),
            providesTags:['cars']
        }),
        getAllSearchQueryCars: builder.mutation({
            query: (search) => ({
                url: `/cars/query?searchTerm=${search}`, 
                method: 'POST',
            }),
            invalidatesTags: ["cars"],
        }),
        getAllFilterQueryCars: builder.mutation({
            query: (slug) => ({
                url: slug=='all' ? `/cars/query` : `/cars/query?slugType=${slug}`, 
                method: 'POST',
            }),
            invalidatesTags: ["cars"],
        }),
    
        getOneCar: builder.query({
            query: (id) => ({
                url: `/cars/car-one/${id}`,
                method: 'GET'
            }),
            providesTags:['cars']
        }),
    
    })
})

export const { useGetAllCarsQuery, useGetOneCarQuery, useGetAllSearchQueryCarsMutation, useGetAllFilterQueryCarsMutation } = carApi;
