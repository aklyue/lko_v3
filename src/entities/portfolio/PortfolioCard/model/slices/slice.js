import { createSelector, createSlice } from "@reduxjs/toolkit";
import { PORTFOLIO_DATA } from "../const/constants";
import {
  calculateTotalPages,
  commonPaginationReducers,
  getPaginatedSlice,
} from "../../../../../shared";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    items: PORTFOLIO_DATA,
    currentPage: 1,
    itemsPerPage: 10,
    filters: {
      search: "",
      discipline: "all",
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

export const { setPage, setItemsPerPage, setFilters } = portfolioSlice.actions;

export const selectFilteredPortfolioData = (state) => {
  const { items, filters } = state.portfolio;

  return items.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchDiscipline =
      filters.discipline === "all" || item.discipline === filters.discipline;
    const matchWorkType =
      filters.workType === "all" || item.workType === filters.workType;
    const matchStatus =
      filters.status === "all" || item.status === filters.status;

    return matchSearch && matchDiscipline && matchWorkType && matchStatus;
  });
};

export const selectVisiblePortfolioItems = (state) => {
  const filtered = selectFilteredPortfolioData(state);
  const { currentPage, itemsPerPage } = state.portfolio;

  return getPaginatedSlice(filtered, currentPage, itemsPerPage);
};

export const selectPortfolioItemById = (state, id) => {
  return state.portfolio.items.find((item) => String(item.id) === String(id));
};

export const selectPortfolioTotalPages = (state) => {
  const filtered = selectFilteredPortfolioData(state);
  const { itemsPerPage } = state.portfolio;

  return calculateTotalPages(filtered.length, itemsPerPage);
};

export const selectPortfolioCurrentPage = (state) =>
  state.portfolio.currentPage;

export default portfolioSlice.reducer;
