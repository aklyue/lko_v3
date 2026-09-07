// Колонки для вкладок "1 курс", "2 курс" и т.д.
export const COURSE_COLUMNS = [
  { id: "semester", label: "Сем." },
  { id: "discipline", label: "Название дисциплины (модуля), раздела" },
  { id: "hours", label: "Количество часов" },
  { id: "ze", label: "ЗЕ" },
  { id: "examType", label: "Форма аттестации" },
  { id: "grade", label: "Оценка" },
  { id: "date", label: "Дата сдачи" },
  { id: "teacher", label: "Преподаватель" },
];

// Колонки для раздела "Практика / НИР"
export const PRACTICE_COLUMNS = [
  { id: "semester", label: "Сем." },
  { id: "ze", label: "ЗЕ" },
  { id: "practiceType", label: "Вид практики: тип практики" },
  { id: "location", label: "Место проведения практики" },
  { id: "enterpriseSupervisor", label: "ФИО руководителя от предприятия" },
  { id: "universitySupervisor", label: "ФИО руководителя от университета" },
  { id: "grade", label: "Оценка" },
  { id: "date", label: "Дата аттестации" },
  { id: "evaluator", label: "ФИО лица, проводившего аттестацию" },
];

// Колонки для раздела "Курсовая работа"
export const COURSEWORK_COLUMNS = [
  { id: "semester", label: "Семестр" },
  { id: "topic", label: "Тема" },
  { id: "grade", label: "Оценка" },
  { id: "teacher", label: "Преподаватель" },
];

export const GRADEBOOK_PAGES = [
  { id: "first", label: "Первая страница" },
  { id: "1", label: "1 курс" },
  { id: "2", label: "2 курс" },
  { id: "3", label: "3 курс" },
  { id: "4", label: "4 курс" },
  { id: "practice", label: "Практика / Научно-исследовательская работа" },
  { id: "course-work", label: "Курсовая работа" },
  { id: "vkr", label: "Выпускная квалификационная работа" },
];
