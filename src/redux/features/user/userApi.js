import { baseApi } from "@/redux/api/baseApi";



const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            
            query: (args) => ({
                url: `users/register/${args.email}`,
                method: 'POST',
                body: args.userInfo
            }),
            invalidatesTags: ["Users"],
        }),
        loginUser: builder.mutation({
            
            query: (args) => ({
                url: `users/login`,
                method: 'POST',
                body: args.userInfo
            }),
            invalidatesTags: ["Users"],
        }),
      
     
        getOneUser: builder.mutation({
            query: (email) => ({
                url: `/users/one-user/${email}`,
              
                method: 'GET'
            }),
        invalidatesTags:['Users']
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: `/users`,
              
                method: 'GET'
            }),
            providesTags: ['Users'],
            
        }),
    })
})

export const {useRegisterUserMutation, useGetOneUserQuery, useGetAllUsersQuery} = userApi;