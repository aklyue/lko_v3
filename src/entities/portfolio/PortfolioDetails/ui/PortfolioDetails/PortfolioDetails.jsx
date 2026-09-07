import { Box, Typography, Stack, Chip, alpha } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/DescriptionOutlined";
import { STATUS_MAP } from "../../../PortfolioCard/model/const/constants";

const PortfolioDetails = ({ data }) => {
  const statusInfo = STATUS_MAP[data.status] || {
    label: data.status,
    color: "default",
  };
  return (
    <Box display="grid" gridTemplateColumns="250px 1fr" gap={3}>
      <Typography color="text.secondary" variant="body2" fontSize={14}>
        ВИД РАБОТЫ:
      </Typography>
      <Typography variant="body2" fontSize={14}>
        {data.workType}
      </Typography>

      <Typography color="text.secondary" variant="body2" fontSize={14}>
        ДИСЦИПЛИНА:
      </Typography>
      <Typography variant="body2" fontSize={14}>
        {data.discipline}
      </Typography>

      <Typography color="text.secondary" variant="body2" fontSize={14}>
        ПРЕПОДАВАТЕЛЬ:
      </Typography>
      <Typography variant="body2" fontSize={14}>
        {data.teacher}
      </Typography>

      <Typography color="text.secondary" variant="body2" fontSize={14}>
        ОЦЕНКА:
      </Typography>
      <Chip
        label={data.grade}
        sx={{
          fontSize: 14,
          bgcolor: "#F4EFFF",
          color: "#8E59FF",
          borderRadius: 1,
          width: "fit-content",
        }}
      />

      <Typography color="text.secondary" variant="body2" fontSize={14}>
        ОПИСАНИЕ:
      </Typography>
      <Typography variant="body2" fontSize={14}>
        {data.description}
      </Typography>

      <Typography color="text.secondary" variant="body2" fontSize={14}>
        СТАТУС:
      </Typography>
      <Chip
        label={statusInfo.label}
        sx={{
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
          borderRadius: 1,
          width: "fit-content",
          fontSize: 14,
        }}
      />

      <Typography color="text.secondary" variant="body2" fontSize={14}>
        ФАЙЛЫ:
      </Typography>
      <Stack direction="row" spacing={1}>
        {data.files?.map((file, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "center",
              py: 1,
              px: 2,
              bgcolor: "#F5F7F9",
              borderRadius: 1,
              minWidth: 200,
            }}
          >
            <InsertDriveFileIcon sx={{ mr: 1.5 }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="caption"
                display="block"
                fontWeight={500}
                fontSize={14}
              >
                {file.name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontSize={12}
              >
                {file.size}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default PortfolioDetails;
