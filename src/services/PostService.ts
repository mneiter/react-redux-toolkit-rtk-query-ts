import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

// Define a service using a base URL and expected endpoints
export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const localPostAPI = createApi({
  reducerPath: 'localPostAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    fetchAllLocalPosts: builder.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: `/posts/`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ['Post'],
    }),
    createLocalPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts/',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updateLocalPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts/' + post.id,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    deleteLocalPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts/' + post.id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchAllPostsQuery } = postAPI;
export const { useFetchAllLocalPostsQuery } = localPostAPI;
export const { useCreateLocalPostMutation } = localPostAPI;
export const { useUpdateLocalPostMutation } = localPostAPI;
export const { useDeleteLocalPostMutation } = localPostAPI;
