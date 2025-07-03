import { dummyProducts } from "@/data/products";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ProductState {
  products: Product[];
  selectedProduct?: Product;
}

const initialState: ProductState = {
  products: dummyProducts,
  selectedProduct: undefined,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      if (action.payload) {
        state.selectedProduct = state.products.find(
          (product) => product.slug === action.payload
        );
      }
    },
  },
});

export const { getProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product.products;
export const selectSelectedProduct = (state: RootState) =>
  state.product.selectedProduct;

export default productSlice;
