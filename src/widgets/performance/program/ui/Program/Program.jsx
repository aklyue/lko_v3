import React from "react";
import { renderProgramContent, usePerformanceNavigation } from "../../lib";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { PerformanceNavigation } from "../../../../../features/performance/performanceNavigation";
import { PerformanceTabs } from "../../../../../features/performance/performanceTabs";

function Program() {
  const programData = useSelector((state) => state.program.data);

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
        Результаты освоения образовательной программы
      </Typography>
      <PerformanceTabs
        tabs={pages}
        activeTab={activeTabId}
        onChange={setActiveTabId}
      />
      <Box sx={{ mt: 2, p: 3, bgcolor: "#FFFFFF", borderRadius: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            mb: 3,
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          Результаты освоения образовательной программы ({activeTabId} курс)
        </Typography>

        {renderProgramContent(activeTabId, programData)}
      </Box>

      <PerformanceNavigation
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < pages.length - 1}
      />
    </Box>
  );
}

export default Program;
