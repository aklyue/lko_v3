import { Container } from "@mui/material";
import React from "react";
import { Program } from "../../widgets/performance/program";

function ProgramPage() {
  return (
    <Container
      sx={{
        py: 2,
        maxWidth: 1200,
        flexGrow: 1,
      }}
    >
      <Program />
    </Container>
  );
}

export default ProgramPage;
