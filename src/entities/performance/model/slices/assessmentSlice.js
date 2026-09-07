import { createSlice } from "@reduxjs/toolkit";
import { ASSESSMENT_DATA_MOCK, ASSESSMENT_PAGES } from "../const/constants";

const assessmentSlice = createSlice({
  name: "assessment",
  initialState: {
    activeTabId: "1",
    pages: ASSESSMENT_PAGES,
    data: ASSESSMENT_DATA_MOCK,
  },
  reducers: {
    setAssessmentTab: (state, action) => {
      state.activeTabId = action.payload;
    },
    nextAssessmentTab: (state) => {
      const currentIndex = state.pages.findIndex(
        (p) => p.id === state.activeTabId,
      );
      if (currentIndex < state.pages.length - 1) {
        state.activeTabId = state.pages[currentIndex + 1].id;
      }
    },
    prevAssessmentTab: (state) => {
      const currentIndex = state.pages.findIndex(
        (p) => p.id === state.activeTabId,
      );
      if (currentIndex > 0) {
        state.activeTabId = state.pages[currentIndex - 1].id;
      }
    },
  },
});

export const { setAssessmentTab, nextAssessmentTab, prevAssessmentTab } = assessmentSlice.actions;
export default assessmentSlice.reducer;
