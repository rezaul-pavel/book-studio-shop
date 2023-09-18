import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tokenApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.webmanza.com/",
    prepareHeaders(headers, { getState }) {
      headers.set("X-Custom-Origin", "bookshop.webmanza.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.mutation({
      query: (newPost) => ({
        url: "auth/v2/get-access-token",
        method: "POST",
        body: newPost,
      }),
    }),
    getTemplateInfo: builder.query({
      query: () => "posts",
    }),
  }),
});

export const { useGetAccessTokenMutation } = tokenApi;
