import { FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../entities/achievements/AchievementCard";
import { FilterSelect } from "../../../../../shared";

const AchievementsFilterSelect = ({ name, label, options, mapping, flex }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.achievements.filters[name]);

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

export default AchievementsFilterSelect;
