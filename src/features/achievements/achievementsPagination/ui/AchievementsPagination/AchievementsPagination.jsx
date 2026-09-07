import { useDispatch, useSelector } from "react-redux";
import { AppPagination } from "../../../../../shared";
import {
  selectAchievementsCurrentPage,
  selectAchievementsTotalPages,
  setItemsPerPage,
  setPage,
} from "../../../../../entities/achievements/AchievementCard";

const AchievementsPagination = () => {
  const dispatch = useDispatch();

  const itemsPerPage = useSelector((state) => state.achievements.itemsPerPage);
  const totalItems = useSelector((state) => state.achievements.items.length);
  const totalPages = useSelector(selectAchievementsTotalPages);
  const currentPage = useSelector(selectAchievementsCurrentPage);

  return (
    <AppPagination
      count={totalPages}
      page={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onChange={(_, page) => dispatch(setPage(page))}
      onItemsPerPageChange={(val) => dispatch(setItemsPerPage(val))}
    />
  );
};

export default AchievementsPagination;
