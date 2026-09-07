import { Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Materials } from "../../widgets/education/Materials";
import { selectThemeById } from "../../entities/education";

function MaterialsPage() {
  const { subjectId, themeId } = useParams();
  const theme = useSelector((state) =>
    selectThemeById(state, subjectId, themeId),
  );

  if (!theme) {
    return (
      <Container>
        <Typography>Тема не найдена</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 2, maxWidth: 1200, boxShadow: 0 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: "bold",
          lineHeight: 1.3,
          maxWidth: {
            xs: "100%",
            md: "100%",
            lg: "60%",
          },
          wordBreak: "break-word",
        }}
      >
        {theme.title}
      </Typography>
      <Materials theme={theme} />
    </Container>
  );
}

export default MaterialsPage;
