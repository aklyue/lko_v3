export const getStatusStyles = (statusName) => {
  switch (statusName?.toLowerCase()) {
    case "важное":
      return { bg: "#FEEFF0", color: "#EC5962" };
    case "событие":
      return { bg: "rgba(20, 100, 255, 0.1)", color: "#1464FF" };
    case "объявление":
      return { bg: "rgba(0, 150, 136, 0.1)", color: "#009688" };
    default:
      return { bg: "rgba(128, 128, 128, 0.1)", color: "#757575" };
  }
};
