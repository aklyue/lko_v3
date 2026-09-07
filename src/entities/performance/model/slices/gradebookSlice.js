import { createSlice } from "@reduxjs/toolkit";
import { GRADEBOOK_DATA_MOCK, GRADEBOOK_PAGES } from "../const/constants";

const gradebookSlice = createSlice({
  name: "gradebook",
  initialState: {
    activeTabId: "first",
    data: GRADEBOOK_DATA_MOCK,
    pages: GRADEBOOK_PAGES,
  },
  reducers: {
    setGradebookTab: (state, action) => {
      state.activeTabId = action.payload;
    },
    nextGradebookTab: (state) => {
      const currentIndex = state.pages.findIndex(
        (p) => p.id === state.activeTabId,
      );
      if (currentIndex < state.pages.length - 1) {
        state.activeTabId = state.pages[currentIndex + 1].id;
      }
    },
    prevGradebookTab: (state) => {
      const currentIndex = state.pages.findIndex(
        (p) => p.id === state.activeTabId,
      );
      if (currentIndex > 0) {
        state.activeTabId = state.pages[currentIndex - 1].id;
      }
    },
  },
});

export const { setGradebookTab, nextGradebookTab, prevGradebookTab } =
  gradebookSlice.actions;
export default gradebookSlice.reducer;
