export const SUBJECTS_MOCK = Array.from({ length: 4 }).flatMap((_, cIndex) => {
  const course = cIndex + 1;
  return Array.from({ length: 9 }).map((_, sIndex) => {
    const semester = course * 2 - (sIndex < 5 ? 1 : 0);
    return {
      id: `c${course}-s${semester}-i${sIndex + 1}`,
      title:
        course === 1 && sIndex === 0
          ? "Геоинформационные системы природопользования"
          : `Предмет ${sIndex + 1} (Семестр ${semester})`,
      teacher: "Иванов Иван Иванович",
      specialtyCode: "21.03.03",
      completed: Math.floor(Math.random() * 10),
      total: 10,
      themes: [
        {
          id: `t1-${sIndex}`,
          title:
            "Автоматизированное распознавание изменений по разновременным космическим снимкам",
          status: "Готово к изучению",
          deadline: "25 января 2023",
          progress: "1 / 1",
          materials: [
            {
              id: `m1-${sIndex}`,
              type: "default",
              title: "Лекция: Методы классификации снимков",
              url: "#",
              isCompleted: true,
              isChecked: false,
              deadline: "10 февраля 2023",
            },
            {
              id: `m2-${sIndex}`,
              type: "lab",
              title: "Лабораторная работа №1: Анализ снимков",
              isCompleted: false,
              isChecked: false,
              deadline: "10 февраля 2023",
            },
          ],
        },
        {
          id: `t2-${sIndex}`,
          title: "Основы фотограмметрии",
          status: "Готово к изучению",
          deadline: "10 февраля 2023",
          progress: "1 / 10",
          materials: [
            {
              id: `m3-${sIndex}`,
              type: "default",
              title: "Теоретический блок: Геометрические свойства снимка",
              content: "...",
              isCompleted: true,
              isChecked: false,
              deadline: "10 февраля 2023",
            },
            {
              id: `m4-${sIndex}`,
              type: "test",
              title: "Контрольная работа по фотограмметрии",
              questionsCount: 10,
              isCompleted: false,
              isChecked: false,
              deadline: "10 февраля 2023",
            },
          ],
        },
        {
          id: `t3-${sIndex}`,
          title: "Основы картографии",
          status: "Готово к изучению",
          deadline: "10 февраля 2023",
          progress: "1 / 3",
          materials: [
            {
              id: `m5-${sIndex}`,
              type: "test",
              title: "Проверочный тест по проекциям",
              questionsCount: 15,
              isCompleted: false,
              isChecked: false,
              deadline: "10 февраля 2023",
            },
          ],
        },
        {
          id: `t4-${sIndex}`,
          title: "Геодезия",
          status: "Готово к изучению",
          deadline: "10 февраля 2023",
          progress: "10 / 10",
          materials: [
            {
              id: `m6-${sIndex}`,
              type: "lab",
              title: "Лабораторная работа: Геодезические измерения",
              isCompleted: true,
              isChecked: false,
              deadline: "10 февраля 2023",
            },
          ],
        },
      ],
      course,
      semester,
    };
  });
});
