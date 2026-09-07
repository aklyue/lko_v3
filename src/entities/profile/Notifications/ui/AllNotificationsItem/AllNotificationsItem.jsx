import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { getNotificationIcon } from "../../lib/utils/getNotificationIcon";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AllNotificationsItem = ({ type, text, time, initials }) => {
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        p: 0,
        flexDirection: "column",
        "&:hover": { bgcolor: "#fbfbfb", cursor: "pointer" },
        transition: "background 0.2s",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", bgcolor: "#FFFFFF" }}>
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


        {/* Далее вынести в фичи при добавлении функционала и оставить пропс actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            flexGrow: 1,
          }}
        >
          <IconButton size="medium">
            <MoreVertIcon fontSize="medium" sx={{ color: "text.secondary" }} />
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  );
};

export default AllNotificationsItem;
