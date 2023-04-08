import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
  quantity: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }
      state.quantity += 1;
      state.totalAmount += payload.price;
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id,
      );
      state.quantity--;
      state.totalAmount -= payload.price * payload.quantity;
    },
    addItemsQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },
  },
});

export const { addToCart, removeFromCart, addItemsQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
