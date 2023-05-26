import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/' }),
  reducerPath: 'adminApi',
  tagTypes: ["User", 'Products'],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ['User']
    }),
    getProducts: build.query({
      query: () => `client/products`,
      providesTags: ['Products']
    }),
    getCustomers: build.query({
       query: () => `client/customers`,
      providesTags: ['Customers']
    }),
    getTransactions: build.query({
      query: () => `client/transactions`,
      providesTags: ['transactions']
    })
  }
  )
})

export const {
  useGetUserQuery,
   useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery
} = api