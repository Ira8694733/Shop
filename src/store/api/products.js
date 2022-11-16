import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'https://dummyjson.com/'}
    ),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
            transformResponse: (response) => {
                return response.products.filter(el => el.category === 'smartphones' || el.category === 'laptops')?.sort((a, b) => b.rating - a.rating)?.splice(0,9);
            }
        })
    })
});

export const {useGetAllProductsQuery} = productsApi;