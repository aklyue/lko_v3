import { ProgramTable } from "../../../../../entities/performance";
import { Box, Typography } from "@mui/material";

export const renderProgramContent = (tabId, allData) => {
  const rowData = allData[tabId] || [];

  return (
    <Box>
      <ProgramTable rows={rowData} />

      <Typography
        variant="caption"
        sx={{
          mt: 2,
          display: "block",
          color: "#6F767E",
          fontSize: 14,
          lineHeight: 1.2,
        }}
      >
        * - Содержание компетенции (знать, уметь, владеть) представлено в
        рабочих программах дисциплин программах практик.
      </Typography>
    </Box>
  );
};
