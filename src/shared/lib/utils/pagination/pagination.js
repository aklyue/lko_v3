export const commonPaginationReducers = {
  setPage: (state, action) => {
    state.currentPage = action.payload;
  },
  setItemsPerPage: (state, action) => {
    state.itemsPerPage = action.payload;
    state.currentPage = 1;
  },
};

export const paginateItems = (items, page, perPage) => {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
};

export const calculateTotalPages = (itemsLength, itemsPerPage) =>
  Math.ceil(itemsLength / itemsPerPage);

export const getPaginatedSlice = (items, page, perPage) => {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
};
