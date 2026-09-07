import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    pageType: "default",
  },
  reducers: {
    setHeaderType: (state, action) => {
      state.pageType = action.payload;
    },
  },
});

export const { setHeaderType } = headerSlice.actions;

export default headerSlice.reducer;
