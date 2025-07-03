import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item: Product = action.payload.product;
      const quantity: number = action.payload.quantity;
      const existingProductIndex = state.items.findIndex(
        ({ product }) => product.slug === item.slug
      );

      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity += quantity;
      } else {
        state.items.push({ product: item, quantity });
      }

      localStorage.setItem("cart-data", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const productSlug = action.payload.slug;
      state.items = state.items.filter(
        ({ product }) => product.slug !== productSlug
      );

      localStorage.setItem("cart-data", JSON.stringify(state.items));
    },
    incrementQuantity: (state, action) => {
      const productSlug = action.payload.slug;
      const quantity = action.payload.quantity || 1;
      const productIndex = state.items.findIndex(
        ({ product }) => product.slug === productSlug
      );

      if (productIndex !== -1) {
        state.items[productIndex].quantity += quantity;
      }

      localStorage.setItem("cart-data", JSON.stringify(state.items));
    },
    decrementQuantity: (state, action) => {
      const productSlug = action.payload.slug;
      const productIndex = state.items.findIndex(
        ({ product }) => product.slug === productSlug
      );

      if (productIndex !== -1) {
        if (state.items[productIndex].quantity === 1) {
          state.items = state.items.filter(
            ({ product }) => product.slug !== productSlug
          );
        } else {
          state.items[productIndex].quantity -= 1;
        }
      }

      localStorage.setItem("cart-data", JSON.stringify(state.items));
    },
    setCart: (state, action) => {
      if (action.payload.data) {
        state.items = action.payload.data;
      }
    },
  },
});

export const {
  addToCart,
  setCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.reduce((a, b) => a + b.quantity, 0);

export default cartSlice;
