import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../entities/achievements/AchievementCard";
import { SearchInput } from "../../../../../shared";

const AchievementsSearchInput = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.achievements.filters.search);

  return (
    <SearchInput
      value={value}
      onChange={(val) => dispatch(setFilters({ search: val }))}
      placeholder="Название работы"
    />
  );
};

export default AchievementsSearchInput;
