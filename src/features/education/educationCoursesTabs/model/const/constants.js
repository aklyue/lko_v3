export const tabItems = (courseStats) => {
  return [
    {
      label: `Все курсы (${courseStats.stats.all})`,
      value: "all",
    },
    {
      label: `Непройденные курсы (${courseStats.stats.uncompleted})`,
      value: "uncompleted",
    },
    {
      label: `Пройденные курсы (${courseStats.stats.completed})`,
      value: "completed",
    },
  ];
};
