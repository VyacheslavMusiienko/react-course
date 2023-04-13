import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts } from '../interface';

type FetchData = {
    products: IProducts[];
};

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        fetchAllUsers: builder.query<FetchData, number>({
            query: (limit = 5) => ({
                url: '/products',
                params: {
                    limit,
                },
            }),
        }),
    }),
});
