import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    [productSlice.name]: productSlice.reducer,
  },
});

export default store;
