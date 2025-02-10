import { configureStore } from "@reduxjs/toolkit";

import cartStore from "./Cart";
import uiStore from "./UI";

const store = configureStore({
  reducer: { cart: cartStore.reducer, ui: uiStore.reducer },
});

export default store;
