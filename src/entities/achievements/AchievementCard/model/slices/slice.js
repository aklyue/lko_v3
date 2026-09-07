import { createSlice } from "@reduxjs/toolkit";
import { ACHIEVEMENT_DATA } from "../const/constants";
import { calculateTotalPages, commonPaginationReducers, getPaginatedSlice } from "../../../../../shared";

export const achievementsSlice = createSlice({
  name: "achievements",
  initialState: {
    items: ACHIEVEMENT_DATA,
    currentPage: 1,
    itemsPerPage: 10,
    filters: {
      search: "",
      workType: "all",
      status: "all",
    },
  },
  reducers: {
    ...commonPaginationReducers,
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
    },
  },
});

export const { setPage, setItemsPerPage, setFilters } =
  achievementsSlice.actions;

export const selectFilteredAchievementsData = (state) => {
  const { items, filters } = state.achievements;

  return items.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchWorkType =
      filters.workType === "all" || item.workType === filters.workType;
    const matchStatus =
      filters.status === "all" || item.status === filters.status;

    return matchSearch && matchWorkType && matchStatus;
  });
};

export const selectVisibleAchievementsItems = (state) => {
  const filtered = selectFilteredAchievementsData(state);
  const { currentPage, itemsPerPage } = state.achievements;

  return getPaginatedSlice(filtered, currentPage, itemsPerPage);
};

export const selectAchievementsTotalPages = (state) => {
  const filtered = selectFilteredAchievementsData(state);
  const { itemsPerPage } = state.achievements;

  return calculateTotalPages(filtered.length, itemsPerPage);
};

export const selectAchievementsCurrentPage = (state) =>
  state.achievements.currentPage;

export default achievementsSlice.reducer;
