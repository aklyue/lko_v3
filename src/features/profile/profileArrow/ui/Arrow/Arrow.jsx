import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

function Arrow({ to, title }) {
  const navigate = useNavigate();
  return (
    <Button
      variant="text"
      sx={{
        color: "#1464FF",
        textTransform: "none",
        fontWeight: 600,
        fontSize: "14px",
        "&:hover": {
          bgcolor: "transparent",
          textDecoration: "underline",
        },
      }}
      endIcon={<EastIcon sx={{ fontSize: "24px !important" }} />}
      onClick={() => navigate(to)}
    >
      {title}
    </Button>
  );
}

export default Arrow;
