import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProducts } from '../../interface';

interface ProductState {
    products: IProducts[];
}
const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
});
export default productSlice.reducer;
