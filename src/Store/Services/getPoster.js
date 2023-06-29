import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_V1 } from '../../Config/Config.tsx'

export const posterApi = createApi({
    reducerPath: 'posterApi',
    baseQuery: fetchBaseQuery({
        baseUrl: URL_V1
    }),
    endpoints: (builder) => ({
        getPoster: builder.query({
            query: () => 'image?page=1&limit=100&token=4BKNN31-7JVMPAY-NAN7EYJ-J3H8AQ2',
        }),
        getReview: builder.query({
            query: (id) => `review?page=1&limit=10&movieId=${id}&token=4BKNN31-7JVMPAY-NAN7EYJ-J3H8AQ2`,
        }),
    }),
})

export const { useGetPosterQuery, useGetReviewQuery } = posterApi