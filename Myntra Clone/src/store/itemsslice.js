import {  createSlice } from "@reduxjs/toolkit";
const getitemsslice = createSlice({
  name: "items",
  initialState: [],
    reducers: {
      addInitialItems: (state, action) => {
        console.log(action.payload);
        return action.payload;
      }
    }
});
export default getitemsslice;
export const itemsactions = getitemsslice.actions;


