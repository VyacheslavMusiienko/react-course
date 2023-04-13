import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../service/productService';
import productsReducer from './reducer/productsSlice';

const rootReducer = combineReducers({
    productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productsApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppSore = ReturnType<typeof setupStore>;
export type AppDispatch = AppSore['dispatch'];
