import React from "react";
import { News } from "../../widgets/news/News";
import { Container, Typography } from "@mui/material";

const AllNewsPage = () => {
  return (
    <Container sx={{ py: 2, maxWidth: 1200, boxShadow: 0 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Новости СГУГиТ
      </Typography>
      <News />
    </Container>
  );
};

export default AllNewsPage;
