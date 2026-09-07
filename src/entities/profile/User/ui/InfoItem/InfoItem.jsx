import { Typography, Box } from "@mui/material";

const InfoItem = ({ label, value }) => (
  <Box sx={{ mb: 2 }}>
    <Typography
      sx={{
        color: "text.secondary",
        fontSize: "12px",
        textTransform: "uppercase",
        fontWeight: 600,
        mb: 0.5,
      }}
    >
      {label}
    </Typography>
    <Typography
      sx={{ color: "text.primary", fontSize: "14px", fontWeight: 500 }}
    >
      {value}
    </Typography>
  </Box>
);

export default InfoItem;
