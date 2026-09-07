import { useDispatch, useSelector } from "react-redux";
import {
  selectPortfolioCurrentPage,
  selectPortfolioTotalPages,
  setItemsPerPage,
  setPage,
} from "../../../../../entities/portfolio/PortfolioCard";

import { AppPagination } from "../../../../../shared";

const PortfolioPagination = () => {
  const dispatch = useDispatch();

  const itemsPerPage = useSelector((state) => state.portfolio.itemsPerPage);
  const totalItems = useSelector((state) => state.portfolio.items.length);
  const totalPages = useSelector(selectPortfolioTotalPages);
  const currentPage = useSelector(selectPortfolioCurrentPage);

  return (
    <AppPagination
      count={totalPages}
      page={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onChange={(_, page) => dispatch(setPage(page))}
      onItemsPerPageChange={(val) => dispatch(setItemsPerPage(val))}
    />
  );
};

export default PortfolioPagination;
