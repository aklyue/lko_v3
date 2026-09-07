import { Container } from "@mui/material";
import React from "react";
import { Assessment } from "../../widgets/performance/assessment";

function AssessmentPage() {
  return (
    <Container
      sx={{
        py: 2,
        maxWidth: 1200,
        flexGrow: 1,
      }}
    >
      <Assessment />
    </Container>
  );
}

export default AssessmentPage;
