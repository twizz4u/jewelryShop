import { createSlice } from "@reduxjs/toolkit";

const uiStore = createSlice({
  name: "ui",
  initialState: {
    showCart: false,
    showForm: false,
  },

  reducers: {
    toggle(state, action) {
      console.log(state.showCart);
      state.showCart = action.payload ? false : true;
    },

    formToggle(state) {
      state.showForm = state.showForm ? false : true;
    },
  },
});

export const uiActions = uiStore.actions;
export default uiStore;
