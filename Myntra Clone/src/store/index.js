import { configureStore } from "@reduxjs/toolkit";
import getitemsslice from "./itemsslice";
const store = configureStore({
  reducer: {
    items: getitemsslice.reducer,
  }
});
export const itemsactions=getitemsslice.actions;
export default store;
