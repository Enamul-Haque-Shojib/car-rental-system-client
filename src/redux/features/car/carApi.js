import { baseApi } from "@/redux/api/baseApi";



const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getAllCars: builder.query({
            query: () => ({
                url: '/cars',
                method: 'GET'
            }),
            providesTags:['cars']
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

export const {useGetAllCarsQuery, useGetOneCarQuery} = carApi;

