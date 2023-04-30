import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    value: string;
}

const initialState: IState = {
    value: '',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});
export default productsSlice.reducer;
