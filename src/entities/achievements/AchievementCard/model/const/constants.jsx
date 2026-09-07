import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ErrorIcon from "@mui/icons-material/Error";

export const ACHIEVEMENT_STATUS = {
  ACCEPTED: "ACCEPTED",
  IN_PROGRESS: "IN_PROGRESS",
  ERROR: "ERROR",
};

export const STATUS_MAP = {
  ACCEPTED: {
    label: "Принято",
    color: "success",
    icon: CheckCircleIcon,
  },
  IN_PROGRESS: {
    label: "В процессе",
    color: "text.secondary",
    icon: HourglassEmptyIcon,
  },
  ERROR: {
    label: "Ошибка",
    color: "error",
    icon: ErrorIcon,
  },
};

export const WORK_TYPES = [
  "Научно-исследовательская деятельность",
  "Олимпиада",
  "Статья",
];

export const ACHIEVEMENT_DATA = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `${i % 2 === 0 ? `Грамота за победу в шахматном турнире` : "Победа в олимпиаде"} №${i + 1}`,
  workType: WORK_TYPES[i % WORK_TYPES.length],
  status: Object.values(ACHIEVEMENT_STATUS)[i % 3],
}));
