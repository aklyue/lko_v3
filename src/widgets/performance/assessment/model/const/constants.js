export const ASSESSMENT_COLUMNS = [
  { id: "number", label: "Номер" },
  { id: "semester", label: "Сем." },
  { id: "subject", label: "Название дисциплины" },
  {
    id: "absences",
    label: "Пропущено лек./прак.",
    render: (value) => `${value.lectures} / ${value.practicals}`,
  },
  { id: "group", label: "Группа" },
  { id: "grade", label: "Оценка" },
  { id: "date", label: "Дата" },
  { id: "instructor", label: "Преподаватель" },
];
