import { Container } from "@mui/material";
import React from "react";
import { SpecificMaterial } from "../../widgets/education/SpecificMaterial";

function SpecificMaterialPage() {
  return (
    <Container sx={{ py: 2, maxWidth: 1200, boxShadow: 0 }}>
      <SpecificMaterial />
    </Container>
  );
}

export default SpecificMaterialPage;
