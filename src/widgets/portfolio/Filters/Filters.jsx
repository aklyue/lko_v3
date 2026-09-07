import { Box, Stack, Divider, Paper, Container, Card } from "@mui/material";
import {
  PortfolioFilterSelect,
  PortfolioSearchInput,
} from "../../../features/portfolio/portfolioFilters";
import {
  DISCIPLINES,
  WORK_TYPES,
  STATUS_MAP,
  PORTFOLIO_STATUS,
} from "../../../entities/portfolio/PortfolioCard/model/const/constants";

import { PORTFOLIO_GRID_TEMPLATE } from "../../../shared/const/grid_templates";

const Filters = () => {
  return (
    <Card sx={{ mb: 1, boxShadow: "none", border: "1px solid #F5F7F9" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: PORTFOLIO_GRID_TEMPLATE,
          alignItems: "center",
          height: 72,
          "& > div": {
            height: "100%",
            display: "flex",
            alignItems: "center",
            borderRight: "3px solid #F5F7F9",
            px: 2,
          },
          "& > div:last-child": { borderRight: "none" },
        }}
      >
        <Box>
          <PortfolioSearchInput />
        </Box>
        <Box>
          <PortfolioFilterSelect
            name="discipline"
            label="Дисциплина"
            options={DISCIPLINES}
          />
        </Box>
        <Box>
          <PortfolioFilterSelect
            name="workType"
            label="Вид работы"
            options={WORK_TYPES}
          />
        </Box>
        <Box sx={{ justifyContent: "center" }}>
          <PortfolioFilterSelect
            name="status"
            label="Статус"
            options={Object.keys(PORTFOLIO_STATUS)}
            mapping={STATUS_MAP}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default Filters;
