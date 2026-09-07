import { Button } from "@mui/material";
import React from "react";

function SendWorkButton() {
  return (
    <Button
      variant="contained"
      disableElevation
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
        width: "fit-content",
      }}
    >
      Отправить работу
    </Button>
  );
}

export default SendWorkButton;
