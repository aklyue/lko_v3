import { Box, Typography } from "@mui/material";

export const LabelValue = ({ label, value }) => (
  <Box sx={{ mb: 1 }}>
    <Typography variant="caption" color="text.secondary" display="block">
      {label}
    </Typography>
    <Typography variant="body2">{value || "—"}</Typography>
  </Box>
);
