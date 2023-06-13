import { configureStore } from '@reduxjs/toolkit'
import { moviesApi } from './Services/getAllMovie'
import { posterApi } from './Services/getPoster'
import React from 'react';
import axios from 'axios';


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



const Home = () => {
    const handleLogout = () => {

        localStorage.removeItem('token');


    };
}

