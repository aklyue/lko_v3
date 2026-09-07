const statusVariants = ["Принято", "В процессе", "Ошибка"];
const typeVariants = [
  "Отчет по лабораторной работе",
  "Курсовой проект",
  "Расчетно-графическая работа",
];

export const portfolioData = Array.from({ length: 100 }, (_, index) => {
  const status =
    statusVariants[Math.floor(Math.random() * statusVariants.length)];

  return {
    id: index + 1,
    title: `Автоматизированное распознавание изменений по снимкам №${index + 1}`,
    discipline: "Дистанционное зондирование Земли",
    workType: typeVariants[Math.floor(Math.random() * typeVariants.length)],
    status: status,
  };
});
