import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProducts } from '../../interface';
import { getProducts } from './actionCreate';

interface ProductState {
    products: IProducts[];
    error: string;
    count: number;
    isLoading: boolean;
}
const initialState: ProductState = {
    products: [],
    error: '',
    count: 0,
    isLoading: false,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
    },
    extraReducers: {
        [getProducts.fulfilled.type]: (
            state,
            action: PayloadAction<IProducts[]>
        ) => {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        [getProducts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getProducts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});
export default productSlice.reducer;
