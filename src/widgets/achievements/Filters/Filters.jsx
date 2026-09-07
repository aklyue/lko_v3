import { Box, Stack, Divider, Paper, Container, Card } from "@mui/material";
import {
  AchievementsFilterSelect,
  AchievementsSearchInput,
} from "../../../features/achievements/achievementsFilters";
import {
  WORK_TYPES,
  STATUS_MAP,
  ACHIEVEMENT_STATUS,
} from "../../../entities/achievements/AchievementCard/model/const/constants";

import { ACHIEVEMENTS_GRID_TEMPLATE } from "../../../shared/const/grid_templates";

const Filters = () => {
  return (
    <Card sx={{ mb: 1, boxShadow: "none", border: "1px solid #F5F7F9" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ACHIEVEMENTS_GRID_TEMPLATE,
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
          <AchievementsSearchInput />
        </Box>
        <Box>
          <AchievementsFilterSelect
            name="workType"
            label="Вид работы"
            options={WORK_TYPES}
          />
        </Box>
        <Box sx={{ justifyContent: "center" }}>
          <AchievementsFilterSelect
            name="status"
            label="Статус"
            options={Object.keys(ACHIEVEMENT_STATUS)}
            mapping={STATUS_MAP}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default Filters;
