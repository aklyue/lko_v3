import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { getNotificationIcon } from "../../lib/utils/getNotificationIcon";

const NotificationItem = ({ type, text, time, initials }) => {
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        p: 2,
        flexDirection: "column",
        "&:hover": { bgcolor: "#fbfbfb", cursor: "pointer" },
        transition: "background 0.2s",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
        <ListItemAvatar sx={{ minWidth: 68, mt: 0 }}>
          <Avatar
            sx={{
              bgcolor: "#F4EFFF",
              color: "#8E59FF",
              width: 60,
              height: 60,
              fontSize: "18px",
              fontWeight: 700,
              borderRadius: 2,
              "& svg": { fontSize: "30px" },
            }}
          >
            {getNotificationIcon(type, initials)}
          </Avatar>
        </ListItemAvatar>

        <Box
          sx={{
            ml: 0.5,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
              {type}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "13px",
                lineHeight: "1.4",
                mt: 0.5,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {text}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "text.disabled",
                fontSize: "11px",
                mt: 1,
                fontWeight: 500,
              }}
            >
              {time}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};

export default NotificationItem;
