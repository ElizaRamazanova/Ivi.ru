import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '../../Config/Config.tsx'
import { MovieType } from '../../shared/models'

interface GetPopularMoviesResponse {
    docs: MovieType[];
}

interface GetMovieIdResponse {
    data: MovieType;
    persons: string
}

interface GetAllTypesResponse {
    docs: MovieType[];
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query<GetPopularMoviesResponse, void>({
            query: () => 'movie?page=1&limit=10&token=4BKNN31-7JVMPAY-NAN7EYJ-J3H8AQ2',
        }),

        getMovieId: builder.query<GetMovieIdResponse, string>({
            query: (id) => `movie/${id}?token=4BKNN31-7JVMPAY-NAN7EYJ-J3H8AQ2`,
        }),
        getAllTypes: builder.query<GetAllTypesResponse, string[]>({
            query: (type) => `movie?type=${type}&token=4BKNN31-7JVMPAY-NAN7EYJ-J3H8AQ2`,
        }),
    }),
})

export const { useGetPopularMoviesQuery, useGetMovieIdQuery, useGetAllTypesQuery } = moviesApi