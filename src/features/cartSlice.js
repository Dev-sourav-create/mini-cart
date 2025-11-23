import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const existingitem = state.item.find(
        (item) => item.id === action.payload.id
      );
      if (existingitem) {
        existingitem.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingitem = state.item.find(
        (item) => item.id === action.payload
      );
      if (!existingitem) return;
      if (existingitem.quantity > 1) {
        existingitem.quantity -= 1;
      } else {
        state.item = state.item.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addtoCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
