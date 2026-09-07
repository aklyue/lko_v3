import { Box, Typography } from "@mui/material";

export const InfoRow = ({ label, value, isDark }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: "10px 16px",
      bgcolor: isDark ? "#F5F7F9" : "transparent",
      borderRadius: 1,
      minHeight: 30,
    }}
  >
    <Typography sx={{ color: "#1A1D1F", flex: 1, fontSize: 14 }}>
      {label}
    </Typography>
    <Typography sx={{ flex: 1, fontWeight: 400, fontSize: 14 }}>{value}</Typography>
  </Box>
);
