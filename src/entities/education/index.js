export { default as educationReducer } from "./model/slices/slice";
export { default as SubjectCard } from "./ui/SubjectCard/ui/SubjectCard/SubjectCard";
export { default as CourseCard } from "./ui/CourseCard/ui/CourseCard/CourseCard";
export { default as MaterialCard } from "./ui/MaterialCard/ui/MaterialCard/MaterialCard";
export { default as SpecificMaterialCard } from "./ui/SpecificMaterialCard/ui/SpecificMaterialCard/SpecificMaterialCard";
export * from "./model/slices/slice";
export {
  selectFilteredSubjects,
  selectCoursesStats,
  selectAvailableSemesters,
  selectFilteredThemes,
  setFilters,
  resetFilters,
} from "./model/slices/slice";
