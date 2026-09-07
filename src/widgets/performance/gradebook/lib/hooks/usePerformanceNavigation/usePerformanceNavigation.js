import { useSelector, useDispatch } from "react-redux";
import {
  setGradebookTab,
  nextGradebookTab,
  prevGradebookTab,
} from "../../../../../../entities/performance";

export const usePerformanceNavigation = () => {
  const dispatch = useDispatch();
  const { activeTabId, pages } = useSelector((state) => state.gradebook);

  const currentIndex = pages.findIndex((p) => p.id === activeTabId);

  const currentPage = pages.find((p) => p.id === activeTabId);

  const getDisplayTitle = () => {
    if (!currentPage) return "";
    if (!currentPage || activeTabId === "first") return null;

    const isCourse = !isNaN(Number(currentPage.id));

    if (isCourse) {
      return `Результаты промежуточной аттестации (${currentPage.label})`;
    }

    return currentPage.label;
  };

  return {
    activeTabId,
    setActiveTabId: (id) => dispatch(setGradebookTab(id)),
    handleNext: () => dispatch(nextGradebookTab()),
    handlePrev: () => dispatch(prevGradebookTab()),
    currentIndex,
    pages,
    getDisplayTitle,
  };
};
