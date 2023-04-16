import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interface';

interface IUserState {
    users: IUser[];
}
const initialState: IUserState = {
    users: [],
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<IUser>) => {
            state.users.push(action.payload);
        },
    },
});
export default userSlice.reducer;
