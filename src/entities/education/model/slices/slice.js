import { createSlice } from "@reduxjs/toolkit";
import { calculateProgress } from "../../../../shared";
import { SUBJECTS_MOCK } from "../const/constants";

const initialState = {
  items: SUBJECTS_MOCK,
  isLoading: false,
  error: null,
  filters: {
    selectedCourse: null,
    selectedSemester: null,
    selectCourseFilter: null,
  },
};

export const educationReducer = createSlice({
  name: "education",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = {
        selectedCourse: null,
        selectedSemester: null,
        selectCourseFilter: "all",
      };
    },
  },
});

export const selectCoursesStats = (state) => {
  const items = state.education.items;
  const stats = items.reduce((acc, item) => {
    acc[item.course] = (acc[item.course] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(stats)
    .map(([number, count]) => ({ number: Number(number), count }))
    .sort((a, b) => a.number - b.number);
};

export const selectFilteredSubjects = (state) => {
  const { items, filters } = state.education;
  const subjectsWithProgress = items.map((item) => ({
    ...item,
    progress: calculateProgress(item.completed, item.total),
  }));

  const currentCourse = filters.selectedCourse || 1;

  return subjectsWithProgress
    .filter((item) => item.course === currentCourse)
    .reduce((acc, item) => {
      let semEntry = acc.find((s) => s.semester === item.semester);
      if (!semEntry) {
        semEntry = { semester: item.semester, items: [] };
        acc.push(semEntry);
      }
      semEntry.items.push(item);
      return acc;
    }, [])
    .sort((a, b) => a.semester - b.semester);
};

export const selectAvailableSemesters = (state) => {
  const { items, filters } = state.education;
  const currentCourse = filters.selectedCourse || 1;

  const semesters = items
    .filter((item) => item.course === currentCourse)
    .map((item) => item.semester);

  return [...new Set(semesters)].sort((a, b) => a - b);
};

export const selectSubjectById = (state, id) => {
  return state.education.items.find((item) => item.id === id);
};

export const selectThemeById = (state, subjectId, themeId) => {
  const subject = state.education.items.find((item) => item.id === subjectId);
  if (!subject) return null;
  return subject.themes.find((theme) => theme.id === themeId);
};

export const selectMaterialById = (state, subjectId, themeId, materialId) => {
  const subject = state.education.items.find((item) => item.id === subjectId);
  if (!subject) return null;
  const theme = subject.themes.find((theme) => theme.id === themeId);
  if (!theme) return null;
  return theme.materials.find((material) => material.id === materialId);
};

export const selectFilteredThemes = (state, subjectId) => {
  const subject = state.education.items.find((item) => item.id === subjectId);

  if (!subject)
    return {
      items: [],
      stats: { all: 0, completed: 0, uncompleted: 0 },
      subjectExists: false,
    };

  const themes = subject.themes || [];
  const filter = state.education.filters.selectCourseFilter || "all";

  const stats = {
    all: themes.length,
    completed: themes.filter((t) => {
      const [curr, total] = t.progress.split("/").map(Number);
      return curr === total && total > 0;
    }).length,
    uncompleted: 0,
  };
  stats.uncompleted = stats.all - stats.completed;

  const filteredItems = themes.filter((theme) => {
    const [curr, total] = theme.progress.split("/").map(Number);
    const isDone = curr === total && total > 0;

    if (filter === "completed") return isDone;
    if (filter === "uncompleted") return !isDone;
    return true;
  });

  return { items: filteredItems, stats, subjectExists: true };
};

export const selectMaterialNavigation = (
  state,
  subjectId,
  materialId,
) => {
  const subject = state.education.items.find((s) => s.id === subjectId);
  if (!subject) return { prev: null, next: null };

  const allMaterials = subject.themes.flatMap((theme) =>
    theme.materials.map((m) => ({
      ...m,
      themeId: theme.id,
    })),
  );

  const currentIndex = allMaterials.findIndex((m) => m.id === materialId);

  if (currentIndex === -1) return { prev: null, next: null };

  const prevMaterial = allMaterials[currentIndex - 1] || null;
  const nextMaterial = allMaterials[currentIndex + 1] || null;

  return {
    prev: prevMaterial
      ? { themeId: prevMaterial.themeId, materialId: prevMaterial.id }
      : null,
    next: nextMaterial
      ? { themeId: nextMaterial.themeId, materialId: nextMaterial.id }
      : null,
  };
};

export const { setFilters, resetFilters } = educationReducer.actions;
export default educationReducer.reducer;
