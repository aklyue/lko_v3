import { createSlice } from "@reduxjs/toolkit";
import { MOCK_ORDER_HISTORY } from "../const/constants";

const initialState = {
  history: MOCK_ORDER_HISTORY,
  isLoading: false,
  error: null,
};

export const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.history.unshift(action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const selectOrderHistory = (state) => state.documents.history;
export const selectIsLoading = (state) => state.documents.isLoading;

export const { addOrder, setLoading } = documentsSlice.actions;
export default documentsSlice.reducer;
