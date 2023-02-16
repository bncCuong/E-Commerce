import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const KEY_API = 'ebc3cb54174444b3a01121613230902';
export const productsCoreApi = createApi({
    reducerPath: 'productsCoreAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kohls.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3f9510a9c4msh152986455a804ebp14a0b2jsn59b3331973e2');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `/categories/list`,
        }),
    }),
});

export const { useGetCategoriesQuery } = productsCoreApi;
