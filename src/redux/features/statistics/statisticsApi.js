import { baseApi } from "@/redux/api/baseApi";


const statisticsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        getStatisticsStates: builder.query({
            query: () => ({
                url: `/statistics/states`,
                method: 'GET'
            }),
            providesTags:["statistics"]
        }),
        getTopThreeCars: builder.query({
            query: () => ({
                url: `/statistics/top-three-cars`,
                method: 'GET'
            }),
            providesTags:["statistics"]
        }),
       
        getPieChartCars: builder.query({
            query: (id) => ({
                url: `/statistics/piechart-cars/${id}`,
                method: 'GET'
            }),
            providesTags:["statistics"]
        }),
       
        getPieChartUsers: builder.query({
            query: () => ({
                url: `/statistics/piechart-users`,
                method: 'GET'
            }),
            providesTags:["statistics"]
        }),
        getPieChartBookings: builder.query({
            query: (id) => ({
                url: `/statistics/piechart-bookings/${id}`,
                method: 'GET'
            }),
            providesTags:["statistics"]
        }),
       
      
    })
})

export const {useGetPieChartBookingsQuery, useGetPieChartCarsQuery, useGetPieChartUsersQuery, useGetStatisticsStatesQuery, useGetTopThreeCarsQuery} = statisticsApi;

