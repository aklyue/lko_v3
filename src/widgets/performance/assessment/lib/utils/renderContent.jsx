import { PerformanceTable } from "../../../../../entities/performance";
import { ASSESSMENT_COLUMNS } from "../../model/const/constants";

export const renderAssessmentContent = (tabId, allData) => {
  const rowData = allData[tabId] || [];

  return <PerformanceTable columns={ASSESSMENT_COLUMNS} rows={rowData} />;
};
