import { baseApi } from "../../api/baseApi";



const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCar: builder.mutation({
            query: (carInfo) => ({
                url: '/cars/car-add',
                method: 'POST',
                body: carInfo
            }),
            invalidatesTags: ["cars"],
        }),
        updateCar: builder.mutation({
            query: (args) => ({
                url: `/cars/car-update/${args.id}`,
                method: 'PATCH',
                body: args.data
            }),
            invalidatesTags: ["cars"],
        }),
      
        deleteCar: builder.mutation({
            query: (id) => ({
                url: `/cars/car-delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["cars"],
        }),
    })
})

export const {useAddCarMutation, useUpdateCarMutation, useDeleteCarMutation} = adminApi;

