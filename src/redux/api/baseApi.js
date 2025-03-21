
import {

  createApi,

  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api',
  credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState()).authenticate.token;

//     if (token) {
//       headers.set('authorization', `${token}`);
//     }

//     return headers;
//   },
});



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['cars'],
    endpoints: (builder) => ({
      getAllCars: builder.query({
        query: () => '/cars',
        providesTags: ['cars']
      }),
    }),
  });



// export const baseApi = createApi({
//     reducerPath: 'baseApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
//     tagTypes: ['cars'],
//     endpoints: (builder) => ({
//       getAllCars: builder.query({
//         query: () => '/cars',
//         providesTags: ['cars']
//       }),
//     }),
//   });


//   export const { useGetAllCarsQuery } = baseApi;