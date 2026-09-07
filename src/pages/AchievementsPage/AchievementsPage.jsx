import { Box, Container } from "@mui/material";
import React from "react";
import { PaginationWidget } from "../../widgets/achievements/PaginationWidget";
// import Filters from "../../widgets/achievments/Filters";
import { Achievements } from "../../widgets/achievements/Achievements";
import { Filters } from "../../widgets/achievements/Filters";

function AchievementsPage() {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          py: 2,
          maxWidth: 1200,
          flexGrow: 1,
        }}
      >
        <Filters />
        <Achievements />
      </Container>

      <PaginationWidget />
    </Box>
  );
}

export default AchievementsPage;
