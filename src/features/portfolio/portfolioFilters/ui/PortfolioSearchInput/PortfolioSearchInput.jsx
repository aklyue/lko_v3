import { TextField, InputAdornment } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../entities/portfolio/PortfolioCard";
import { SearchInput } from "../../../../../shared";

const PortfolioSearchInput = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.portfolio.filters.search);

  return (
    <SearchInput
      value={value}
      onChange={(val) => dispatch(setFilters({ search: val }))}
      placeholder="Название работы"
    />
  );
};

export default PortfolioSearchInput;
