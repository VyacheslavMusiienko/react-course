import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts } from '../interface';

type FetchData = {
    products: IProducts[];
};

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        fetchAllProduct: builder.query<FetchData, string>({
            query: (product) => ({
                url: `/products/search?q=${product}`,
            }),
        }),
    }),
});
