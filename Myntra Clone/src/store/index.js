import { configureStore } from "@reduxjs/toolkit";
import getitemsslice from "./itemsslice";
import fetchStatusSlice from "./fetchslice";
import Bagitemsslice from "./bagitemsslice";
const store = configureStore({
  reducer: {
    items: getitemsslice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    Bagitems: Bagitemsslice.reducer,
  }
});
export const itemsactions=getitemsslice.actions;
export default store;
