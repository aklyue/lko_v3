import { Paper, Typography, Box, Stack } from "@mui/material";
import { PortfolioDetails } from "../../../entities/portfolio/PortfolioDetails";
import { PortfolioActions } from "../../../features/portfolio/portfolioActions";
import { selectPortfolioItemById } from "../../../entities/portfolio/PortfolioCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PortfolioDetailsCard = () => {
  const { portfolioId: id } = useParams();
  const data = useSelector((state) => selectPortfolioItemById(state, id));
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={700} fontSize={24}>
          Информация о записи
        </Typography>
        <PortfolioActions id={data.id} />
      </Stack>

      <Paper
        sx={{
          p: 4,
          border: "1px solid #F1F5F9",
          boxShadow: "none",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={4} fontWeight={500} fontSize={20}>
          {data.title}
        </Typography>
        <PortfolioDetails data={data} />
      </Paper>
    </Box>
  );
};

export default PortfolioDetailsCard;
