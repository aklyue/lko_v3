import React from "react";
import { AchievementsPagination } from "../../../features/achievements/achievementsPagination";
import { Box } from "@mui/material";

function PaginationWidget() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        bgcolor: "#FFFFFF",
        alignItems: "center",
        borderTop: "1px solid #F5F7F9",
        mt: 2,
      }}
    >
      <AchievementsPagination />
    </Box>
  );
}

export default PaginationWidget;
