import { Typography } from "@mui/material";

export const LabelUnderline = ({ label }) => (
  <Typography
    variant="caption"
    sx={{ display: "block", textAlign: "center", mt: -0.5, fontSize: "12px", pt: 0.5 }}
  >
    ({label})
  </Typography>
);
