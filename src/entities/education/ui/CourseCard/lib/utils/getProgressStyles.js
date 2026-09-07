export const getProgressStyles = (prog) => {
  if (!prog) return { color: "text.primary", bg: "action.hover" };

  const [current, total] = prog.split("/").map((num) => parseInt(num.trim()));

  if (current === total && total > 0) {
    return { color: "#2e7d32", bg: "#edf7ed" };
  }
  return { color: "#ed6c02", bg: "#fff4e5" };
};
