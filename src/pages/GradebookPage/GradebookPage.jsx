import { Container } from "@mui/material";
import React from "react";
import { Gradebook } from "../../widgets/performance/gradebook";

function GradebookPage() {
  return (
    <Container
      sx={{
        py: 2,
        maxWidth: 1200,
        flexGrow: 1,
      }}
    >
      <Gradebook />
    </Container>
  );
}

export default GradebookPage;
