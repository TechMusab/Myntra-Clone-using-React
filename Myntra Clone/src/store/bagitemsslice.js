import { createSlice } from "@reduxjs/toolkit";
const Bagitemsslice = createSlice({
  name: "Bagitems",
  initialState: [],

  reducers: {
    additem: (state, action) => {
      state.push(action.payload);
    },
    removeitem: (state, action) => {
      console.log("Removing item with id:", action.payload);
      return state.filter((item) => item !== action.payload);
    },
  },
});
export default Bagitemsslice;
export const Bagitemsactions = Bagitemsslice.actions;
