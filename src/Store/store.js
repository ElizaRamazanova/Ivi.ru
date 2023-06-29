import { configureStore } from '@reduxjs/toolkit'
import { posterApi } from './Services/getPoster'
import { moviesApi } from './Services/getAllMovie.tsx';


export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [posterApi.reducerPath]: posterApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            moviesApi.middleware,
            posterApi.middleware,
        ),
})