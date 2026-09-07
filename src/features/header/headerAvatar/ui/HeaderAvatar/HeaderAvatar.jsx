import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderAvatar() {
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        minWidth: 0,
        maxWidth: 40,
        maxHeight: 40,
      }}
      onClick={() => navigate("/profile")}
    >
      <Avatar
        sx={{
          borderRadius: 1,
          bgcolor: "#E8F0FF",
          color: "#1464FF",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        ФИ
      </Avatar>
    </Button>
  );
}

export default HeaderAvatar;
