export const getGradeColor = (grade) => {
  const map = {
    5: "#2e7d32",
    4: "#2e7d32",
    3: "#ed6c02",
    2: "#d32f2f",
    1: "#d32f2f",
  };
  return map[grade] || "#757575";
};
