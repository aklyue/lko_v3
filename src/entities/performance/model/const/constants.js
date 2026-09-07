export const GRADEBOOK_DATA_MOCK = {
  // СТУДЕНТ
  student: {
    fullName: "Иванов Иван Иванович",
    bookNumber: "00000001",
    specialty: "21.03.03 Геодезия и дистанционное зондирование",
    profile: "Дистанционное зондирование природных ресурсов",
    institute: "Институт геодезии и менеджмента",
    educationForm: "Очная",
    enrollmentOrder: "№ 0/0001 от 08.08.2019",
    rector: "Карпик А. П.",
    director: "Фамилия И. О.",
  },
  // КУРСЫ (1-4)
  courses: {
    1: [
      {
        semester: 1,
        discipline:
          "Современные методы и средства фотограмметрии и дистанционного зондирования",
        hours: 160,
        ze: 4,
        examType: "Зачет с оценкой",
        grade: 4,
        date: "15.12.2023",
        teacher: "Иванов Иван Иванович",
      },
      {
        semester: 1,
        discipline: "Высшая математика",
        hours: 108,
        ze: 3,
        examType: "Экзамен",
        grade: 5,
        date: "20.12.2023",
        teacher: "Петрова Елена Сергеевна",
      },
      {
        semester: 2,
        discipline: "Геодезия (общий курс)",
        hours: 144,
        ze: 4,
        examType: "Экзамен",
        grade: 3,
        date: "10.06.2024",
        teacher: "Сидоров Алексей Петрович",
      },
    ],
    2: [
      {
        semester: 1,
        discipline:
          "Современные методы и средства фотограмметрии и дистанционного зондирования",
        hours: 160,
        ze: 4,
        examType: "Зачет с оценкой",
        grade: 5,
        date: "15.12.2023",
        teacher: "Иванов Иван Иванович",
      },
      {
        semester: 1,
        discipline: "Высшая математика",
        hours: 108,
        ze: 3,
        examType: "Экзамен",
        grade: 3,
        date: "20.12.2023",
        teacher: "Петрова Елена Сергеевна",
      },
      {
        semester: 2,
        discipline: "Геодезия (общий курс)",
        hours: 144,
        ze: 4,
        examType: "Экзамен",
        grade: 2,
        date: "10.06.2024",
        teacher: "Сидоров Алексей Петрович",
      },
    ],
    3: [
      {
        semester: 1,
        discipline:
          "Современные методы и средства фотограмметрии и дистанционного зондирования",
        hours: 160,
        ze: 4,
        examType: "Зачет с оценкой",
        grade: 1,
        date: "15.12.2023",
        teacher: "Иванов Иван Иванович",
      },
      {
        semester: 1,
        discipline: "Высшая математика",
        hours: 108,
        ze: 4,
        examType: "Экзамен",
        grade: 5,
        date: "20.12.2023",
        teacher: "Петрова Елена Сергеевна",
      },
      {
        semester: 2,
        discipline: "Геодезия (общий курс)",
        hours: 144,
        ze: 5,
        examType: "Экзамен",
        grade: 3,
        date: "10.06.2024",
        teacher: "Сидоров Алексей Петрович",
      },
    ],
    4: [
      {
        semester: 1,
        discipline:
          "Современные методы и средства фотограмметрии и дистанционного зондирования",
        hours: 160,
        ze: 5,
        examType: "Зачет с оценкой",
        grade: 4,
        date: "15.12.2023",
        teacher: "Иванов Иван Иванович",
      },
      {
        semester: 1,
        discipline: "Высшая математика",
        hours: 108,
        ze: 3,
        examType: "Экзамен",
        grade: 5,
        date: "20.12.2023",
        teacher: "Петрова Елена Сергеевна",
      },
      {
        semester: 2,
        discipline: "Геодезия (общий курс)",
        hours: 144,
        ze: 4,
        examType: "Экзамен",
        grade: 3,
        date: "10.06.2024",
        teacher: "Сидоров Алексей Петрович",
      },
    ],
  },

  // ПРАКТИКА / НИР
  practice: [
    {
      semester: 4,
      ze: 6,
      practiceType: "Учебная практика: ознакомительная",
      location: "Учебно-производственный полигон СГУГиТ",
      enterpriseSupervisor: "—",
      universitySupervisor: "Козлов С. В.",
      grade: 5,
      date: "15.07.2024",
      evaluator: "Козлов С. В.",
    },
    {
      semester: 7,
      ze: 3,
      practiceType: "Производственная практика: технологическая",
      location: "ООО 'ГеоПроект'",
      enterpriseSupervisor: "Петров П.П.",
      universitySupervisor: "Сидоров С.С.",
      grade: 5,
      date: "20.06.2026",
      evaluator: "Сидоров С.С.",
    },
  ],

  // КУРСОВАЯ РАБОТА
  courseWork: [
    {
      semester: 5,
      topic: "Проектирование планово-высотного обоснования на заданный район",
      grade: 4,
      teacher: "Николаева Ольга Борисовна",
    },
    {
      semester: 6,
      topic: "Разработка методики дешифрирования космических снимков",
      grade: 5,
      teacher: "Смирнова А.А.",
    },
  ],

  // ВЫПУСКНАЯ КВАЛИФИКАЦИОННАЯ РАБОТА (ПОСЛЕДНЯЯ СТРАНИЦА)
  vkr: {
    topic:
      "Исследование точности построения цифровых моделей рельефа по данным БПЛА на примере территории Новосибирской области",
    supervisor: "Васильев В.В.",
    defenseDate: "25.06.2026",
    grade: 5,
    chairman: "Александров А.А.",
    secretary: "Борисова Б.Б.",
  },
};

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

export const ASSESSMENT_DATA_MOCK = {
  // 1 КУРС
  1: [
    {
      id: 1,
      semester: 1,
      subject: "Основы программирования",
      absences: { lectures: 2, practicals: 0 },
      group: "ИВТ-11",
      grade: 4,
      date: "20.12.2023",
      instructor: "Иванов И.И.",
      number: 1,
    },
    {
      id: 2,
      semester: 2,
      subject: "Высшая математика",
      absences: { lectures: 4, practicals: 2 },
      group: "ИВТ-11",
      grade: 5,
      date: "15.05.2024",
      instructor: "Петров П.П.",
      number: 2,
    },
  ],

  // 2 КУРС
  2: [
    {
      id: 3,
      semester: 3,
      subject: "Алгоритмы и структуры данных",
      absences: { lectures: 0, practicals: 0 },
      group: "ИВТ-21",
      grade: 5,
      date: "18.12.2024",
      instructor: "Сидоров С.С.",
      number: 1,
    },
    {
      id: 4,
      semester: 4,
      subject: "Операционные системы",
      absences: { lectures: 6, practicals: 4 },
      group: "ИВТ-21",
      grade: 3,
      date: "22.05.2025",
      instructor: "Кузнецов А.В.",
      number: 2,
    },
  ],

  // 3 КУРС
  3: [
    {
      id: 5,
      semester: 5,
      subject: "Базы данных",
      absences: { lectures: 2, practicals: 2 },
      group: "ИВТ-31",
      grade: 2,
      date: "15.12.2025",
      instructor: "Васильев К.М.",
      number: 1,
    },
    {
      id: 6,
      semester: 6,
      subject: "Сети и телекоммуникации",
      absences: { lectures: 0, practicals: 0 },
      group: "ИВТ-31",
      grade: 4,
      date: "19.05.2026",
      instructor: "Федоров Д.А.",
      number: 2,
    },
  ],

  // 4 КУРС
  4: [
    {
      id: 7,
      semester: 7,
      subject: "Информационная безопасность",
      absences: { lectures: 10, practicals: 5 },
      group: "ИВТ-41",
      grade: 5,
      date: "12.12.2026",
      instructor: "Морозов В.Г.",
      number: 1,
    },
    {
      id: 8,
      semester: 8,
      subject: "Защита ВКР",
      absences: { lectures: 0, practicals: 0 },
      group: "ИВТ-41",
      grade: 1,
      date: "10.06.2027",
      instructor: "Государственная комиссия",
      number: 2,
    },
  ],
};

export const ASSESSMENT_PAGES = [
  { id: "1", label: "1 курс" },
  { id: "2", label: "2 курс" },
  { id: "3", label: "3 курс" },
  { id: "4", label: "4 курс" },
];

export const PROGRAM_DATA_MOCK = {
  1: [
    // Блок УК-1
    {
      id: 101,
      semester: "1",
      competence: {
        code: "УК-1",
        description:
          "Способен осуществлять поиск, критический анализ и синтез информации, применять системный подход для решения поставленных задач",
      },
      discipline: "Философия",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 102,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 103,
      semester: "",
      competence: null,
      discipline: "Физика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },
    {
      id: 104,
      semester: "",
      competence: null,
      discipline: "Информатика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },
    {
      id: 105,
      semester: "",
      competence: null,
      discipline: "Робототехника",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 106,
      semester: "",
      competence: null,
      discipline: "3D моделирование и проектирование",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 107,
      semester: "",
      competence: null,
      discipline: "Цифровое моделирование",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 108,
      semester: "",
      competence: null,
      discipline: "Информационные технологии цифрового моделирования местности",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },

    {
      id: 201,
      semester: "1",
      competence: {
        code: "УК-1",
        description:
          "Способен осуществлять поиск, критический анализ и синтез информации, применять системный подход для решения поставленных задач",
      },
      discipline: "Философия",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 202,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 203,
      semester: "",
      competence: null,
      discipline: "Физика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },

    // Блок УК-3
    {
      id: 301,
      semester: "1",
      competence: {
        code: "УК-3",
        description:
          "Способен осуществлять социальное взаимодействие и реализовывать свою роль в команде",
      },
      discipline: "Философия",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 302,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },

    // Блок УК-4
    {
      id: 401,
      semester: "1",
      competence: {
        code: "УК-4",
        description:
          "Способен осуществлять деловую коммуникацию в устной и письменной формах на государственном языке Российской Федерации и иностранном(ых) языке(ах)",
      },
      discipline: "Философия",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 402,
      semester: "",
      competence: null,
      discipline: "Иностранный язык",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
  ],
  2: [
    // Блок УК-1
    {
      id: 101,
      semester: "1",
      competence: {
        code: "УК-1",
        description:
          "Способен осуществлять поиск, критический анализ и синтез информации, применять системный подход для решения поставленных задач",
      },
      discipline: "Философия",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 102,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 103,
      semester: "",
      competence: null,
      discipline: "Физика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },
    {
      id: 104,
      semester: "",
      competence: null,
      discipline: "Информатика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },
    {
      id: 105,
      semester: "",
      competence: null,
      discipline: "Робототехника",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 106,
      semester: "",
      competence: null,
      discipline: "3D моделирование и проектирование",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 107,
      semester: "",
      competence: null,
      discipline: "Цифровое моделирование",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 108,
      semester: "",
      competence: null,
      discipline: "Информационные технологии цифрового моделирования местности",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },

    {
      id: 201,
      semester: "1",
      competence: {
        code: "УК-1",
        description:
          "Способен осуществлять поиск, критический анализ и синтез информации, применять системный подход для решения поставленных задач",
      },
      discipline: "Философия",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 202,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 203,
      semester: "",
      competence: null,
      discipline: "Физика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },

    // Блок УК-3
    {
      id: 301,
      semester: "1",
      competence: {
        code: "УК-3",
        description:
          "Способен осуществлять социальное взаимодействие и реализовывать свою роль в команде",
      },
      discipline: "Философия",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 302,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },

    // Блок УК-4
    {
      id: 401,
      semester: "1",
      competence: {
        code: "УК-4",
        description:
          "Способен осуществлять деловую коммуникацию в устной и письменной формах на государственном языке Российской Федерации и иностранном(ых) языке(ах)",
      },
      discipline: "Философия",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 402,
      semester: "",
      competence: null,
      discipline: "Иностранный язык",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
  ],
  3: [
    // Блок УК-1
    {
      id: 101,
      semester: "1",
      competence: {
        code: "УК-1",
        description:
          "Способен осуществлять поиск, критический анализ и синтез информации, применять системный подход для решения поставленных задач",
      },
      discipline: "Философия",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 102,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 103,
      semester: "",
      competence: null,
      discipline: "Физика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },
    {
      id: 104,
      semester: "",
      competence: null,
      discipline: "Информатика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },
    {
      id: 105,
      semester: "",
      competence: null,
      discipline: "Робототехника",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 106,
      semester: "",
      competence: null,
      discipline: "3D моделирование и проектирование",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 107,
      semester: "",
      competence: null,
      discipline: "Цифровое моделирование",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 108,
      semester: "",
      competence: null,
      discipline: "Информационные технологии цифрового моделирования местности",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },

    {
      id: 201,
      semester: "1",
      competence: {
        code: "УК-1",
        description:
          "Способен осуществлять поиск, критический анализ и синтез информации, применять системный подход для решения поставленных задач",
      },
      discipline: "Философия",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 202,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 203,
      semester: "",
      competence: null,
      discipline: "Физика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },

    // Блок УК-3
    {
      id: 301,
      semester: "1",
      competence: {
        code: "УК-3",
        description:
          "Способен осуществлять социальное взаимодействие и реализовывать свою роль в команде",
      },
      discipline: "Философия",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 302,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },

    // Блок УК-4
    {
      id: 401,
      semester: "1",
      competence: {
        code: "УК-4",
        description:
          "Способен осуществлять деловую коммуникацию в устной и письменной формах на государственном языке Российской Федерации и иностранном(ых) языке(ах)",
      },
      discipline: "Философия",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 402,
      semester: "",
      competence: null,
      discipline: "Иностранный язык",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
  ],
  4: [
    // Блок УК-1
    {
      id: 101,
      semester: "1",
      competence: {
        code: "УК-2",
        description:
          "Способен осуществлять поиск, критический анализ и синтез информации, применять системный подход для решения поставленных задач",
      },
      discipline: "Философия",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 102,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 103,
      semester: "",
      competence: null,
      discipline: "Физика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },
    {
      id: 104,
      semester: "",
      competence: null,
      discipline: "Информатика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },
    {
      id: 105,
      semester: "",
      competence: null,
      discipline: "Робототехника",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 106,
      semester: "",
      competence: null,
      discipline: "3D моделирование и проектирование",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 107,
      semester: "",
      competence: null,
      discipline: "Цифровое моделирование",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 108,
      semester: "",
      competence: null,
      discipline: "Информационные технологии цифрового моделирования местности",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },

    {
      id: 201,
      semester: "1",
      competence: {
        code: "УК-1",
        description:
          "Способен осуществлять поиск, критический анализ и синтез информации, применять системный подход для решения поставленных задач",
      },
      discipline: "Философия",
      notFormed: "+",
      partiallyFormed: "",
      fullyFormed: "",
    },
    {
      id: 202,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 203,
      semester: "",
      competence: null,
      discipline: "Физика",
      notFormed: "",
      partiallyFormed: "+",
      fullyFormed: "",
    },

    // Блок УК-3
    {
      id: 301,
      semester: "1",
      competence: {
        code: "УК-3",
        description:
          "Способен осуществлять социальное взаимодействие и реализовывать свою роль в команде",
      },
      discipline: "Философия",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 302,
      semester: "",
      competence: null,
      discipline: "Высшая математика",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },

    // Блок УК-4
    {
      id: 401,
      semester: "1",
      competence: {
        code: "УК-4",
        description:
          "Способен осуществлять деловую коммуникацию в устной и письменной формах на государственном языке Российской Федерации и иностранном(ых) языке(ах)",
      },
      discipline: "Философия",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
    {
      id: 402,
      semester: "1",
      competence: null,
      discipline: "Иностранный язык",
      notFormed: "",
      partiallyFormed: "",
      fullyFormed: "+",
    },
  ],
};

export const PROGRAM_PAGES = [
  { id: "1", label: "1 курс" },
  { id: "2", label: "2 курс" },
  { id: "3", label: "3 курс" },
  { id: "4", label: "4 курс" },
];
