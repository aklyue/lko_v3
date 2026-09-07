import { FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../entities/portfolio/PortfolioCard";
import { FilterSelect } from "../../../../../shared";

const PortfolioFilterSelect = ({ name, label, options, mapping, flex }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.portfolio.filters[name]);

  const handleChange = (newValue) => {
    dispatch(setFilters({ [name]: newValue }));
  };  

  return (
    <FormControl fullWidth sx={{ flex: flex }}>
      <FilterSelect
        label={label}
        options={options}
        value={value}
        onChange={handleChange}
        mapping={mapping}
      />
    </FormControl>
  );
};

export default PortfolioFilterSelect;
