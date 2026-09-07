export const getTypeColor = (type) => {
  if (!type) return { color: "text.primary", bg: "action.hover" };
  switch (type) {
    case "lab":
      return { color: "#1464FF", bg: "#E8F0FF" };
    case "test":
      return { color: "#8E59FF", bg: "#F4EFFF" };
    default:
      return { color: "#6F767E", bg: "#F5F7F9" };
  }
};
