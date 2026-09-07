import { Box, Button, Paper } from "@mui/material";
import React from "react";
import { notifications } from "../../../shared/const/notifications";
import { AllNotificationsItem } from "../../../entities/profile/Notifications";

const Notifications = () => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          bgcolor: "#FFFFFF",
          p: 2,
          pb: 0,
        }}
      >
        {notifications.map((notif) => (
          <Paper
            key={notif.id}
            elevation={0}
            sx={{
              borderRadius: 1,
              overflow: "hidden",
              transition: "border-color 0.2s",
              borderBottom: "2px solid #F5F7F9",
              mb: 2,
              pb: 1,
              "&:last-child": {
                borderBottom: "none",
                mb: 0,
              },
            }}
          >
            <AllNotificationsItem {...notif} />
          </Paper>
        ))}
      </Box>

     {/* Далее вынести в фичи при добавлении функционала */}
      <Button
        sx={{
          width: "100%",
          bgcolor: "#FFFFFF",
          textTransform: "none",
          color: "#EC5962",
          borderRadius: 0,
          py: 2,
        }}
      >
        Очистить все уведомления
      </Button>
    </Box>
  );
};

export default Notifications;
