import { Avatar, Typography, Box } from "@mui/material";
import { fullName, initials } from "../../lib/utils/getName";

const StudentCard = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
      <Avatar
        sx={{
          width: 100,
          height: 100,
          borderRadius: 2,
          fontSize: 40,
          bgcolor: "#E8F0FF",
          color: "#1464FF",
          fontWeight: "bold",
        }}
      >
        {initials}
      </Avatar>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {fullName}
        </Typography>
        <Typography sx={{ color: "#1464FF", fontSize: "14px" }}>
          Студент
        </Typography>
      </Box>
    </Box>
  );
};

export default StudentCard;
