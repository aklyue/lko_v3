import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { History } from "../../widgets/documents/History";
import { OrderFormWidget } from "../../widgets/documents/OrderFormWidget";
import { DOCUMENT_TEMPLATES } from "../../entities/documents";
import { PreviewWidget } from "../../widgets/documents/PreviewWidget";

function DocumentsPage() {
  const [selectedDocId, setSelectedDocId] = useState("stipend");
  return (
    <Container
      sx={{
        py: 2,
        maxWidth: 1200,
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <OrderFormWidget onSelect={setSelectedDocId} />
        <History />
      </Box>
      <PreviewWidget template={DOCUMENT_TEMPLATES[selectedDocId]} />
    </Container>
  );
}

export default DocumentsPage;
