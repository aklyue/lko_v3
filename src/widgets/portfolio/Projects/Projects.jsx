import { useSelector } from "react-redux";
import {
  Box,
  Stack,
  Typography,
  Paper,
  Divider,
  Container,
  Card,
} from "@mui/material";
import {
  PortfolioCard,
  selectVisiblePortfolioItems,
} from "../../../entities/portfolio/PortfolioCard";

const Projects = () => {
  const items = useSelector(selectVisiblePortfolioItems);

  return (
    <>
      <Stack spacing={1}>
        {items.map((item) => (
          <PortfolioCard key={item.id} data={item} />
        ))}
      </Stack>
    </>
  );
};

export default Projects;
