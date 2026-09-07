import { Tabs, Tab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppTabs } from "../../../../../shared";
import {
  setFilters,
  selectCoursesStats,
} from "../../../../../entities/education";

const EducationTabs = () => {
  const dispatch = useDispatch();
  const courseStats = useSelector(selectCoursesStats);
  const selectedCourse =
    useSelector((state) => state.education.filters.selectedCourse) || 1;

  const handleChange = (_, newValue) => {
    dispatch(setFilters({ selectedCourse: newValue, selectedSemester: null }));
  };

  const tabItems = courseStats.map((course) => ({
    label: `${course.number} курс (${course.count})`,
    value: course.number,
  }));

  return (
    <AppTabs
      value={selectedCourse}
      onChange={handleChange}
      items={tabItems}
      sx={{ borderBottom: 0 }}
    />
  );
};

export default EducationTabs;
