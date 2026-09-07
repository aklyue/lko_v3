import { Box } from "@mui/material";
import { StudendInfo, StudentCard } from "../../../features/profile/profileInfo";

function Profile() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: 3,
        borderRadius: 1,
      }}
    >
      <StudentCard />
      <StudendInfo />
    </Box>
  );
}

export default Profile;
