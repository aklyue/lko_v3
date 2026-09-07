import { Box, Container } from "@mui/material";
import { PortfolioDetailsCard } from "../../widgets/portfolio/PortfolioDetailsCard";

const PortfolioDetailsPage = () => {
  return (
    <Container sx={{ py: 2, maxWidth: 1200, boxShadow: 0 }}>
      <PortfolioDetailsCard />
    </Container>
  );
};

export default PortfolioDetailsPage;
