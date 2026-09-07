import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export const getStatusColor = (status) => {
  switch (status) {
    case "ready":
      return {
        bgcolor: "#E8F5E9",
        color: "#027A48",
        label: "Готово",
        icon: <CheckCircleIcon color="#027A48" fontSize="small" />,
      };
    case "pending":
      return {
        bgcolor: "#F5F7F9",
        color: "#6F767E",
        label: "В обработке",
        icon: <HourglassEmptyIcon color="#6F767E" fontSize="small" />,
      };
    default:
      return {
        bgcolor: "#F5F7F9",
        color: "#6F767E",
        label: "Неизвестно",
        icon: <QuestionMarkIcon color="#6F767E" fontSize="small" />,
      };
  }
};
