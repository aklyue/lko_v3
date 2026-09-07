import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../../../widgets/layout/Sidebar";
import Header from "../../../widgets/layout/Header";
import { useHeaderControl } from "../../../features/header/headerContentController";

const LayoutProvider = () => {
  useHeaderControl();
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#F5F7F9",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutProvider;
