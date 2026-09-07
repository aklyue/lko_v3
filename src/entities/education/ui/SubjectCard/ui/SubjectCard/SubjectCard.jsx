import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";

const SubjectCard = ({ data }) => {
  const { title, teacher, specialtyCode, progress, completed, total } = data;

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 0,
        width: "100%",
        height: "100%",
        bgcolor: "#ffffff00"
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          boxSizing: "border-box",
          "&.MuiCardContent-root:last-child": {
            pb: 2,
            pt: 4,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="div"
          sx={{ mb: 2, fontWeight: "bold", lineHeight: 1.2, minHeight: 38.4 }}
        >
          {title}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ mb: 2 }}
        >
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              sx={{ fontSize: 14 }}
            >
              Преподаватель:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: 14 }}>
              {teacher}
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              sx={{ fontSize: 14 }}
            >
              Код специальности:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: 14 }}>
              {specialtyCode}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100%", mb: 1 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 4,
              borderRadius: 5,
              backgroundColor: "#F3F3F3",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#1464FF",
                borderRadius: 5,
              },
            }}
          />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Пройдено:{" "}
            <span style={{ color: "rgba(0, 0, 0, 0.87)" }}>{progress}%</span>
          </Typography>
          <Typography variant="body2">
            {completed} / {total}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
