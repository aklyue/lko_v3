import { useSelector } from "react-redux";
import {
  Stack,
} from "@mui/material";
import {
  AchievementCard,
  selectVisibleAchievementsItems,
} from "../../../entities/achievements/AchievementCard";

const Achievements = () => {
  const items = useSelector(selectVisibleAchievementsItems);

  return (
    <>
      <Stack spacing={1}>
        {items.map((item) => (
          <AchievementCard key={item.id} data={item} />
        ))}
      </Stack>
    </>
  );
};

export default Achievements;
