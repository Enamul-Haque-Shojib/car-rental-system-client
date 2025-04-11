
import {

  createApi,

  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: 'https://car-rental-system-server-gray.vercel.app/api',
  // baseUrl: 'http://localhost:5000/api',
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
    tagTypes: ['cars', 'bookings', 'users', 'reviews', 'payments', 'statistics'],
    endpoints: () => ({}),
  });


