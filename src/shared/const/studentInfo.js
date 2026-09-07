export const studentData = {
  name: "Иван",
  surname: "Иванов",
  lastname: "Иванович",
  institute: "Институт геодезии и менеджмента",
  specializationCode: "21.03.03, Геодезия и дистанционное зондирование",
  profile: "Дистанционное зондирование природных ресурсов",
  educationLevel: "Высшее образование - Бакалавриат",
  studyForm: "Очная",
  course: "4 курс",
  group: "БГД-41.2",
  libraryCard: "345",
};

export const columnsConfig = {
  left: [
    { label: "Институт", key: "institute" },
    { label: "Код, направление подготовки", key: "specializationCode" },
    { label: "Профиль / Специализация", key: "profile" },
    { label: "Уровень образования", key: "educationLevel" },
  ],
  right: [
    { label: "Форма обучения", key: "studyForm" },
    { label: "Курс", key: "course" },
    { label: "Группа", key: "group" },
    { label: "Номер читательского билета", key: "libraryCard" },
  ],
};
