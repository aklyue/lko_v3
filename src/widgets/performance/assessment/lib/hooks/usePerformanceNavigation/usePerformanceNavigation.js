import { useSelector, useDispatch } from "react-redux";
import {
  setAssessmentTab,
  nextAssessmentTab,
  prevAssessmentTab,
} from "../../../../../../entities/performance";

export const usePerformanceNavigation = () => {
  const dispatch = useDispatch();
  const { activeTabId, pages } = useSelector((state) => state.assessment);

  const currentIndex = pages.findIndex((p) => p.id === activeTabId);

  const currentPage = pages.find((p) => p.id === activeTabId);

  const getDisplayTitle = () => {
    if (!currentPage) return "";

    const isCourse = !isNaN(Number(currentPage.id));

    if (isCourse) {
      return `Результаты аттестаций (${currentPage.label})`;
    }

    return currentPage.label;
  };

  return {
    activeTabId,
    setActiveTabId: (id) => dispatch(setAssessmentTab(id)),
    handleNext: () => dispatch(nextAssessmentTab()),
    handlePrev: () => dispatch(prevAssessmentTab()),
    currentIndex,
    pages,
    getDisplayTitle,
  };
};
