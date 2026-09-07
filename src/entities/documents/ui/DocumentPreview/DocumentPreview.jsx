import { Box, Typography } from "@mui/material";

const DocumentPreview = ({ template }) => {
  if (!template) return <Box>Выберите документ</Box>;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "min-content" }}
    >
      <Box
        component="img"
        src={template.preview}
        alt="Образец"
        sx={{
          width: 292,
          height: 142,
          border: "2px dashed #1464FF",
          borderRadius: 1,
          objectFit: "cover",
          p: 0.5,
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ color: "#6F767E", fontSize: 14 }}>
          Срок изготовления:{" "}
          <Box component="span" sx={{ color: "#1A1D1F" }}>
            {template.leadTime}
          </Box>
        </Typography>

        <Typography sx={{ color: "#6F767E", fontSize: 14 }}>
          Структурное подразделение:{" "}
          <Box component="span" sx={{ color: "#1A1D1F" }}>
            {template.department}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default DocumentPreview;
