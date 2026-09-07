import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavButton = ({ icon, label, to, inset }) => {
  return (
    <ListItemButton
      component={NavLink}
      to={to}
      sx={{
        pl: inset ? 4 : 1,
        mx: inset ? 0 : 1,
        mb: 0.5,
        borderRadius: 2,
        color: "text.primary",
        "&.active": {
          bgcolor: "#F5F7F9",
          color: "#1464FF",
        },
        "&:hover": {
          bgcolor: "#F5F7F9",
          color: "#1464FF",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        transition: "all 0.1s",
      }}
    >
      {icon && (
        <ListItemIcon sx={{ minWidth: 18, color: "inherit" }}>
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        primaryTypographyProps={{
          fontSize: "14px",
        }}
        primary={label}
        sx={{
          my: 0,
        }}
      />
    </ListItemButton>
  );
};
