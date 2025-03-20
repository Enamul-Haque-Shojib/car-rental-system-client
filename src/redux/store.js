import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi';


export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]: baseApi.reducer,
        // [imageUploadBaseApi.reducerPath] : imageUploadBaseApi.reducer,
       
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        
    })
    .concat(baseApi.middleware)
    // .concat(imageUploadBaseApi.middleware),
});