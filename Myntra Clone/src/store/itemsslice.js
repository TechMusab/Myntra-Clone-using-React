import {  createSlice } from "@reduxjs/toolkit";
 import {items} from "../data/items";
const getitemsslice = createSlice({
  name: "items",
  initialState: items,
  reducers: {

  }
});
export default getitemsslice;


