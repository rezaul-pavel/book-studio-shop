import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.webmanza.com" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) => `product/v2/list/by/category/${id}`,
    }),
  }),
  middleware: (options, handler) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }
    return handler(options);
  },
});

export const {
  useGetProductsQuery,
  util: { getRunningQueriesThunk },
} = productApi;
export const { getProducts } = productApi.endpoints;
