import React from "react";
import { Notifications } from "../../widgets/notifications/Notifications";
import { Container, Typography } from "@mui/material";

const AllNotificationsPage = () => {
  return (
    <Container sx={{ py: 2, maxWidth: 1200, boxShadow: 0 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Уведомления
      </Typography>
      <Notifications />
    </Container>
  );
};

export default AllNotificationsPage;
