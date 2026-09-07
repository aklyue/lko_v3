import { Box, Typography, Stack, Paper } from "@mui/material";
import { getProgressStyles } from "../../lib/utils/getProgressStyles";

const CourseCard = ({ data }) => {
  const { title, status, deadline, progress } = data;

  const progressStyle = getProgressStyles(progress);

  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        bgcolor: "#ffffff00",
        boxShadow: "none"
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontSize: 16,
          lineHeight: 1.3,
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 4 }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{ width: "100%" }}
      >
        <Box sx={{ flex: 0.3 }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ display: "block", mb: 0.5, fontSize: 14 }}
          >
            Статус курса:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 500 }}>
            {status}
          </Typography>
        </Box>

        <Box sx={{ flex: 0.3 }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ display: "block", mb: 0.5, fontSize: 14 }}
          >
            Выполнить до:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 500 }}>
            {deadline}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "flex-start" },
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 1,
              borderRadius: 1,
              bgcolor: progressStyle.bg,
              color: progressStyle.color,
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            Пройдено {progress}
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
};

export default CourseCard;
