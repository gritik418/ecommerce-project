import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    [productSlice.name]: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
