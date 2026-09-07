import { createSlice } from "@reduxjs/toolkit";
import { PROGRAM_DATA_MOCK, PROGRAM_PAGES } from "../const/constants";

const programSlice = createSlice({
  name: "program",
  initialState: {
    activeTabId: "1",
    data: PROGRAM_DATA_MOCK,
    pages: PROGRAM_PAGES,
  },
  reducers: {
    setProgramTab: (state, action) => {
      state.activeTabId = action.payload;
    },
    nextProgramTab: (state) => {
      const currentIndex = state.pages.findIndex(
        (p) => p.id === state.activeTabId,
      );
      if (currentIndex < state.pages.length - 1) {
        state.activeTabId = state.pages[currentIndex + 1].id;
      }
    },
    prevProgramTab: (state) => {
      const currentIndex = state.pages.findIndex(
        (p) => p.id === state.activeTabId,
      );
      if (currentIndex > 0) {
        state.activeTabId = state.pages[currentIndex - 1].id;
      }
    },
  },
});

export const { setProgramTab, nextProgramTab, prevProgramTab } =
  programSlice.actions;
export default programSlice.reducer;
