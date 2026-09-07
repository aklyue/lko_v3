import { Box } from "@mui/material";

const HeaderLayout = ({ leftContent, rightContent }) => (
  <Box
    sx={{
      bgcolor: "#FFFFFF",
      height: 76,
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #F5F7F9",
    }}
  >
    <Box
      sx={{
        mx: 2,
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {leftContent}
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        {rightContent}
      </Box>
    </Box>
  </Box>
);

export default HeaderLayout;
