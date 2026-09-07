import React from "react";
import { Button } from "@mui/material";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";

function LoadMaterialButton() {
  return (
    <Button
      variant="contained"
      disableElevation
      startIcon={<FilePresentOutlinedIcon />}
      sx={{
        bgcolor: "#1464FF",
        color: "#fff",
        textTransform: "none",
        borderRadius: 2,
        px: 3,
        py: 1,
        fontSize: "14px",
        fontWeight: 500,
        "&:hover": {
          bgcolor: "#004ed0",
        },
        width: "fit-content"
      }}
    >
      Скачать учебный материал
    </Button>
  );
}

export default LoadMaterialButton;
