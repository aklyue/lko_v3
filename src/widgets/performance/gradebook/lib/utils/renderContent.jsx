import {
  FirstPageSheet,
  PerformanceTable,
  VKRSheet,
} from "../../../../../entities/performance";
import {
  COURSE_COLUMNS,
  COURSEWORK_COLUMNS,
  PRACTICE_COLUMNS,
} from "../../model/const/constants";

export const renderGradebookContent = (tabId, allData) => {
  if (!allData) return null;

  const contentMap = {
    first: () => <FirstPageSheet data={allData.student} />,
    1: () => (
      <PerformanceTable columns={COURSE_COLUMNS} rows={allData.courses["1"]} />
    ),
    2: () => (
      <PerformanceTable columns={COURSE_COLUMNS} rows={allData.courses["2"]} />
    ),
    3: () => (
      <PerformanceTable columns={COURSE_COLUMNS} rows={allData.courses["3"]} />
    ),
    4: () => (
      <PerformanceTable columns={COURSE_COLUMNS} rows={allData.courses["4"]} />
    ),
    practice: () => (
      <PerformanceTable columns={PRACTICE_COLUMNS} rows={allData.practice} />
    ),
    "course-work": () => (
      <PerformanceTable columns={COURSEWORK_COLUMNS} rows={allData.courseWork} />
    ),
    vkr: () => <VKRSheet data={allData.vkr} />,
  };

  const renderFn = contentMap[tabId];
  return renderFn ? renderFn() : null;
};
