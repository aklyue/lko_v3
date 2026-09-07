import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { getStatusColor } from "../../../../lib/utils/getStatusColor";
import { getTypeColor } from "../../../../lib/utils/getTypeColor";

function SpecificMaterialCard({ data }) {
  const { type, isCompleted, deadline } = data;

  const statusColor = getStatusColor(isCompleted);
  const typeColor = getTypeColor(type);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          color="textSecondary"
          fontSize={14}
          textTransform={"uppercase"}
        >
          Тип учебного материала:{" "}
        </Typography>
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
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          color="textSecondary"
          fontSize={14}
          textTransform={"uppercase"}
        >
          Статус:{" "}
        </Typography>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          color="textSecondary"
          fontSize={14}
          textTransform={"uppercase"}
        >
          Выполнить до:{" "}
        </Typography>
        <Typography fontSize={14}>{deadline}</Typography>
      </Box>
    </Box>
  );
}

export default SpecificMaterialCard;
