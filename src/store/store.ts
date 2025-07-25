import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api/api";
import authSlice from "./slices/authSlice";
import filtersSlice from "./slices/filtersSlice";
import selectProductSlice from "./slices/selectProductSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    filters: filtersSlice,
    selectProduct: selectProductSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
