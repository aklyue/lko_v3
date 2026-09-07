import { Paper, Box, Typography, Button } from "@mui/material";
import { notifications } from "../../../shared/const/notifications";
import { NotificationItem } from "../../../entities/profile/Notifications";
import EastIcon from "@mui/icons-material/East";
import { Arrow } from "../../../features/profile/profileArrow";

const Notifications = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Уведомления
        </Typography>

        <Arrow to={"/profile/notifications"} title={"Все уведомления"} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {notifications.slice(-3).map((notif) => (
          <Paper
            key={notif.id}
            elevation={0}
            sx={{
              flex: "1 1 300px",
              borderRadius: 1,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}
          >
            <NotificationItem {...notif} />
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Notifications;
