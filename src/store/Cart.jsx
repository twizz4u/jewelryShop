import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },

  reducers: {
    additemToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items;
      const itemExist = existingItems.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!itemExist) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        itemExist.quantity++;
        itemExist.totalPrice = itemExist.totalPrice + newItem.price;
      }
    },

    removeItemCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      if (existingItems) {
        state.totalQuantity--;
        if (existingItems.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItems.quantity--;
          existingItems.totalPrice -= existingItems.price;
        }
      }
    },

    removeAllItem(state) {
      if (state.items.length > 0) {
        state.items.splice(0);
      }
    },
  },
});

export const cartActions = cartStore.actions;

export default cartStore;
