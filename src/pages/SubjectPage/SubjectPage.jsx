import { Container, Typography } from "@mui/material";
import React from "react";
import Courses from "../../widgets/education/Courses/Courses";
import { useSelector } from "react-redux";
import { selectSubjectById } from "../../entities/education";
import { useParams } from "react-router-dom";

function SubjectPage() {
  const { id } = useParams();
  const subject = useSelector((state) => selectSubjectById(state, id));

  if (!subject) {
    return <Typography>Предмет не найден</Typography>;
  }

  return (
    <Container sx={{ py: 2, maxWidth: 1200, boxShadow: 0 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: "bold",
          maxWidth: {
            xs: "100%",
            md: "100%",
            lg: "60%",
          },
          wordBreak: "break-word",
        }}
      >
        {subject.title}
      </Typography>
      <Courses />
    </Container>
  );
}

export default SubjectPage;
