import { baseApi } from "@/redux/api/baseApi";



const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (args) => ({
                url: `auth/register/${args.email}`,
                method: 'POST',
                body: args.userInfo
            }),
            invalidatesTags: ["users"],
        }),
        updateUser: builder.mutation({
            query: (args) => ({
                url: `auth/update-user/${args.id}`,
                method: 'PATCH',
                body: args.data
            }),
            invalidatesTags: ["users"],
        }),
        loginUser: builder.mutation({
            
            query: (args) => ({
                url: `auth/login`,
                method: 'POST',
                body: args.userInfo
            }),
            invalidatesTags: ["users"],
        }),
      
     
        getOneUser: builder.query({
            query: (id) => ({
                url: `/auth/one-user/${id}`,
              
                method: 'GET'
            }),
            providesTags: ['users']
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: `/auth`,
              
                method: 'GET'
            }),
            providesTags: ['users'],
            
        }),
    })
})

export const {useRegisterUserMutation, useGetOneUserQuery, useGetAllUsersQuery, useUpdateUserMutation} = userApi;