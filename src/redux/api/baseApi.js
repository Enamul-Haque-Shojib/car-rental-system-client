
import {

  createApi,

  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState()).authenticate.token;

    if (token) {
      headers.set('authorization', `${token}`);
    }

    return headers;
  },
});



export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: ['admin', 'cars'],
  endpoints: () => ({}),
});

// export const imageUploadBaseApi = createApi({
//   reducerPath: 'imageUploadApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.imgbb.com/1' }),
//   endpoints: () => ({}),
// });

