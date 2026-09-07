import { Box, darken, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MaterialCard } from "../../../entities/education";

function Materials({ theme }) {
  const { subjectId, themeId } = useParams();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {theme.materials.map((material) => (
        <Box
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 calc(50% - 16px)",
            },
            borderRadius: 1,
            bgcolor: "#ffffff",
            "&:hover": { bgcolor: darken("#ffffff", 0.02), cursor: "pointer" },
            transition: "all 0.2s",
          }}
          onClick={() =>
            navigate(`/education/${subjectId}/${themeId}/${material.id}`)
          }
          key={material.id}
        >
          <MaterialCard data={material} />
        </Box>
      ))}
    </Box>
  );
}

export default Materials;
