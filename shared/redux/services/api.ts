import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CreationState } from '../types/stores';

export const creationApi = createApi({
  reducerPath: 'creationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: builder => ({
    getCreations: builder.query<CreationState[], void>({
      query: () => '/creations',
    }),
    getCreationsById: builder.query<CreationState, number>({
      query: (id: number) => `/creations/${id}`,
    }),
  }),
});

export const { useGetCreationsQuery, useGetCreationsByIdQuery } = creationApi;
