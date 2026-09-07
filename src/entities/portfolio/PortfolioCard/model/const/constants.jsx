import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ErrorIcon from "@mui/icons-material/Error";

export const PORTFOLIO_STATUS = {
  ACCEPTED: "ACCEPTED",
  IN_PROGRESS: "IN_PROGRESS",
  ERROR: "ERROR",
};

export const STATUS_MAP = {
  [PORTFOLIO_STATUS.ACCEPTED]: {
    label: "Принято",
    color: "success",
    icon: CheckCircleIcon,
  },
  [PORTFOLIO_STATUS.IN_PROGRESS]: {
    label: "В процессе",
    color: "text.secondary",
    icon: HourglassEmptyIcon,
  },
  [PORTFOLIO_STATUS.ERROR]: {
    label: "Ошибка",
    color: "error",
    icon: ErrorIcon,
  },
};

export const DISCIPLINES = [
  "Дистанционное зондирование Земли",
  "Геоинформационные системы",
  "Фотограмметрия",
  "Картография",
  "Космический мониторинг",
];

export const WORK_TYPES = [
  "Отчет по лабораторной работе",
  "Курсовой проект",
  "Расчетно-графическая работа",
  "Статья",
];

const TEACHERS = [
  "Иванов Иван Иванович",
  "Петров Петр Петрович",
  "Сидоров Сидор Сидорович",
];
const GRADES = ["Зачтено", "5", "4", "3"];

export const PORTFOLIO_DATA = Array.from({ length: 100 }, (_, i) => {
  const statusKey = Object.values(PORTFOLIO_STATUS)[i % 3];

  const grade =
    statusKey === PORTFOLIO_STATUS.ACCEPTED ? GRADES[i % GRADES.length] : "—";

  return {
    id: i + 1,
    title: `${i % 2 === 0 ? "Автоматизированное распознавание" : "Мониторинг"} изменений №${i + 1}`,
    discipline: DISCIPLINES[i % DISCIPLINES.length],
    workType: WORK_TYPES[i % WORK_TYPES.length],
    description: "Описание выполненной работы",
    status: statusKey,
    statusLabel: STATUS_MAP[statusKey].label,
    teacher: TEACHERS[i % TEACHERS.length],
    grade: grade,
    files: [
      { name: "Названиефайла.docx", size: "102 КБ" },
      { name: "Приложение_1.pdf", size: "2.4 МБ" },
    ],
  };
});
