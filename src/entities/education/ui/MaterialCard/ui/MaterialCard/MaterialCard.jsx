import { Box, Typography, Stack, Paper } from "@mui/material";
import { getStatusColor } from "../../../../lib/utils/getStatusColor";
import { getTypeColor } from "../../../../lib/utils/getTypeColor";

const MaterialCard = ({ data }) => {
  const { title, isCompleted, type } = data;

  const statusColor = getStatusColor(isCompleted);
  const typeColor = getTypeColor(type);

  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        bgcolor: "#ffffff00",
        boxShadow: "none",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontSize: 14,
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2 }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{ width: "100%" }}
      >
        <Box>
          <Box
            sx={{
              px: 1,
              py: 0.5,
              borderRadius: 1,
              bgcolor: typeColor.bg,
              color: typeColor.color,
              fontSize: 12,
              whiteSpace: "nowrap",
            }}
          >
            {type === "lab"
              ? "Лабораторная работа"
              : type === "test"
                ? "Контрольная работа"
                : "Документ для изучения"}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "flex-start" },
          }}
        >
          <Box
            sx={{
              px: 1,
              py: 0.5,
              borderRadius: 1,
              bgcolor: statusColor.bg,
              color: statusColor.color,
              fontSize: 12,
              whiteSpace: "nowrap",
            }}
          >
            {isCompleted ? "Пройден" : "Не пройден"}
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
};

export default MaterialCard;
