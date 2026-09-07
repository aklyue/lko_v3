import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PerformanceTabs } from "../../../../../features/performance/performanceTabs";
import { renderAssessmentContent, usePerformanceNavigation } from "../../lib";
import { PerformanceNavigation } from "../../../../../features/performance/performanceNavigation";

const Assessment = () => {
  const assessmentData = useSelector((state) => state.assessment.data);

  const {
    activeTabId,
    pages,
    setActiveTabId,
    handleNext,
    handlePrev,
    currentIndex,
  } = usePerformanceNavigation();

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        Результаты аттестации
      </Typography>

      <PerformanceTabs
        tabs={pages}
        activeTab={activeTabId}
        onChange={setActiveTabId}
      />

      <Box sx={{ mt: 2, p: 3, bgcolor: "#FFFFFF", borderRadius: 1 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 3, fontSize: 16, fontWeight: 500 }}
        >
          Результаты аттестаций {activeTabId} курс
        </Typography>

        {renderAssessmentContent(activeTabId, assessmentData)}
      </Box>

      <PerformanceNavigation
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < pages.length - 1}
      />
    </Box>
  );
};

export default Assessment;
