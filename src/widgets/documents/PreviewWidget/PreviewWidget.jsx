import { Box, Typography } from "@mui/material";
import { DocumentPreview } from "../../../entities/documents";

const PreviewWidget = ({ template }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <Typography
        sx={{ fontWeight: 600, fontSize: 24, mb: 2, color: "#1A1D1F" }}
      >
        Образец документа
      </Typography>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 3,
          borderRadius: 1,
          width: "min-content",
          height: "min-content",
        }}
      >
        <DocumentPreview template={template} />
      </Box>
    </Box>
  );
};

export default PreviewWidget;
