export const DOCUMENT_TYPES = [
  { id: "stipend", label: "Справка о выплате стипендии" },
  { id: "study_cert", label: "Справка об обучении" },
];

import StudyImage from "../../../../shared/assets/documentsPreview/study-sample.png";
import StipendImage from "../../../../shared/assets/documentsPreview/stipend-sample.png";

export const MOCK_ORDER_HISTORY = [
  {
    id: 1,
    date: "23 декабря, 14:00",
    name: "Справка о выплате стипендии",
    count: 2,
    status: "ready",
  },
  {
    id: 2,
    date: "26 декабря, 14:00",
    name: "Справка об обучении",
    count: 3,
    status: "pending",
  },
];

export const DOCUMENT_TEMPLATES = {
  stipend: {
    preview: StipendImage,
    leadTime: "3-4 рабочих дня",
    department: "Молодёжный информационный центр, 319а",
  },
  study_cert: {
    preview: StudyImage,
    leadTime: "1-2 рабочих дня",
    department: "Деканат",
  },
};
