import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import tokenReducer from "./Slices/tokenSlice";
import themeInfoReducer from "./Slices/themeInfoSlice";
import { productApi } from "@/api/productApi";
import specialBooksReducer from "@/Slices/specialBooksSlice";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    token: tokenReducer,
    themeInfo: themeInfoReducer,
    specialBooks: specialBooksReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

setupListeners(store.dispatch);

export default store;

export const wrapper = createWrapper(store);
