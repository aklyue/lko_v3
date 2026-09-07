import { Box, Typography } from "@mui/material";
import { PerformanceTabs } from "../../../../../features/performance/performanceTabs";
import { PerformanceNavigation } from "../../../../../features/performance/performanceNavigation";
import { usePerformanceNavigation, renderGradebookContent } from "../../lib";
import { useSelector } from "react-redux";

const Gradebook = () => {
  const {
    activeTabId,
    pages,
    setActiveTabId,
    handleNext,
    handlePrev,
    currentIndex,
    getDisplayTitle,
  } = usePerformanceNavigation();

  const gradebookData = useSelector((state) => state.gradebook.data);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        Зачетная книжка
      </Typography>

      <PerformanceTabs
        tabs={pages}
        activeTab={activeTabId}
        onChange={setActiveTabId}
      />

      <Box sx={{ mt: 2, p: 2, bgcolor: "#FFFFFF", borderRadius: 1 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontWeight: 500,
            mb: 2,
            fontSize: 16,
            color: "#1A1D1F",
          }}
        >
          {getDisplayTitle()}
        </Typography>
        {renderGradebookContent(activeTabId, gradebookData)}
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

export default Gradebook;
