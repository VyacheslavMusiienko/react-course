import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProducts } from '../../interface';

type FetchData = {
    products: IProducts[];
};
export const getProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<FetchData>(
                'https://dummyjson.com/products?limit=10'
            );
            return response.data.products;
        } catch (e) {
            return thunkApi.rejectWithValue(
                (e as Error)?.message || 'Unknown error occurred'
            );
        }
    }
);
