import { useDispatch, useSelector } from "react-redux";
import { AppTabs } from "../../../../../shared";
import {
  setFilters,
  selectFilteredThemes,
} from "../../../../../entities/education";
import { useParams } from "react-router-dom";
import { tabItems } from "../../model/const/constants";

const EducationCoursesTabs = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const courseStats = useSelector((state) => selectFilteredThemes(state, id));
  const selectCourseFilter = useSelector(
    (state) => state.education.filters.selectCourseFilter || "all",
  );

  const handleChange = (_, newValue) => {
    dispatch(setFilters({ selectCourseFilter: newValue }));
  };

  return (
    <AppTabs
      value={selectCourseFilter}
      onChange={handleChange}
      items={tabItems(courseStats)}
      sx={{ borderBottom: 0 }}
    />
  );
};

export default EducationCoursesTabs;
