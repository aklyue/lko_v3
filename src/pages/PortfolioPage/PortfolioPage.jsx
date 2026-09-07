import { Box, Container } from "@mui/material";
import React from "react";
import { Projects } from "../../widgets/portfolio/Projects";
import PaginationWidget from "../../widgets/portfolio/PaginationWidget";
import Filters from "../../widgets/portfolio/Filters";

function PortfolioPage() {
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
        <Projects />
      </Container>

      <PaginationWidget />
    </Box>
  );
}

export default PortfolioPage;
