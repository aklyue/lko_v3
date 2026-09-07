import { Box, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const HeaderBreadcrumbs = ({ previous = [], current }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{
          "& .MuiBreadcrumbs-separator": {
            mx: 1,
            color: "text.secondary",
            opacity: 0.5,
          },
        }}
      >
        {previous.map((item, index) => (
          <MuiLink
            key={index}
            component={RouterLink}
            to={item.path}
            underline="hover"
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              color: "text.secondary",
              "&:hover": { color: "text.primary", textDecoration: "none" },
              transition: "all 0.2s",
            }}
          >
            {item.label}
          </MuiLink>
        ))}

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "text.primary",
          }}
        >
          {current}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default HeaderBreadcrumbs;
