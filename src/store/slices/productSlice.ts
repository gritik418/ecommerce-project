import { dummyProducts } from "@/data/products";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  products: dummyProducts,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.product.products;

export default productSlice;
