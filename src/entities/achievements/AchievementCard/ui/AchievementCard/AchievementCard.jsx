import { Card, Typography, Chip, Box, alpha, IconButton } from "@mui/material";
import { STATUS_MAP } from "../../model/const/constants";
import { ACHIEVEMENTS_GRID_TEMPLATE } from "../../../../../shared/const/grid_templates";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AchievementCard = ({ data }) => {
  const statusInfo = STATUS_MAP[data.status] || {
    label: data.status,
    color: "default",
  };

  const Icon = statusInfo.icon;

  return (
    <Card
      sx={{
        borderLeft: 6,
        borderColor: `${statusInfo.color}.main`,
        boxShadow: "none",
        border: "1px solid #F5F7F9",
        borderRadius: 1,
        transition: "0.2s",
        "&:hover": { bgcolor: "#FBFCFD" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ACHIEVEMENTS_GRID_TEMPLATE,
          alignItems: "center",
          "& > div": {
            p: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            borderRight: "3px solid #F5F7F9",
          },
          "& > div:last-child": {
            borderRight: "none",
          },
        }}
      >
        <Box>
          <Typography variant="body2" fontWeight={500}>
            {data.title}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2">{data.workType}</Typography>
        </Box>

        <Box sx={{ justifyContent: "space-between !important" }}>
          <Chip
            icon={Icon ? <Icon sx={{ fontSize: 16 }} /> : null}
            label={statusInfo.label}
            sx={{
              fontWeight: 700,
              flex: 1,
              mr: 1,
              height: 36,
              borderRadius: 1,
              fontSize: "12px",
              color: (theme) =>
                statusInfo.color.includes(".")
                  ? theme.palette.text.secondary
                  : theme.palette[statusInfo.color].main,
              bgcolor: (theme) => {
                const baseColor = statusInfo.color.includes(".")
                  ? theme.palette.text.secondary
                  : theme.palette[statusInfo.color].main;
                return alpha(baseColor, 0.08);
              },
              border: "none",
              "& .MuiChip-icon": { color: "inherit", ml: 1 },
            }}
          />
          <IconButton size="small">
            <MoreVertIcon fontSize="small" sx={{ color: "text.secondary" }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default AchievementCard;
