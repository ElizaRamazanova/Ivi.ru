import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '../../Config/Config'

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => 'movie?page=1&limit=10&token=4BKNN31-7JVMPAY-NAN7EYJ-J3H8AQ2',
        }),
        getMovieId: builder.query({
            query: (id) => `movie/${id}?token=4BKNN31-7JVMPAY-NAN7EYJ-J3H8AQ2`,
        }),
        getAllTypes: builder.query({
            query: (type) => `movie?type=${type}&token=4BKNN31-7JVMPAY-NAN7EYJ-J3H8AQ2`,
        }),
    }),
})

export const { useGetPopularMoviesQuery, useGetMovieIdQuery, useGetAllTypesQuery } = moviesApi