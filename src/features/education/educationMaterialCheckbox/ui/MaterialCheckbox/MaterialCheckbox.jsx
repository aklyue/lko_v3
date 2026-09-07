import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";

function MaterialCheckbox({ isCompleted, onChange }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Checkbox
        checked={isCompleted}
        onChange={onChange}
        sx={{
          p: 0,
          color: "#1464FF",
          "&.Mui-checked": {
            color: "#1464FF",
          },
          "& .MuiSvgIcon-root": {
            fontSize: 28,
          },
        }}
      />
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          color: "#333",
          userSelect: "none",
        }}
      >
        Отметить материал как прочитанный
      </Typography>
    </Box>
  );
}

export default MaterialCheckbox;
