import { Container, Typography } from "@mui/material";
import { Subjects } from "../../widgets/education/Subjects";

const EducationPage = () => {
  return (
    <Container sx={{ py: 2, maxWidth: 1200, boxShadow: 0 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Обучение
      </Typography>
      <Subjects />
    </Container>
  );
};

export default EducationPage;
