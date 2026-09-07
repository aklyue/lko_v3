import { Box, Typography, Grid } from "@mui/material";
import { InfoRow } from "../../lib/utils/InfoRow";
import { LabelUnderline } from "../../lib/utils/LabelUnderline";

const VKRSheet = ({ data }) => {
  return (
    <Box sx={{ p: 2, bgcolor: "#fff" }}>
      <Box>
        <InfoRow
          label="Тема выпускной квалификационной работы"
          value={data.topic}
        />
        <InfoRow label="ФИО руководителя" value={data.supervisor} isDark />
        <InfoRow label="Дата защиты" value={data.defenseDate} />
        <InfoRow label="Оценка" value={data.grade} isDark />
        <InfoRow
          label="ФИО председателя Государственной экзаменационной комиссии"
          value={data.chairman}
        />
        <InfoRow
          label="ФИО секретаря Государственной экзаменационной комиссии"
          value={data.secretary}
          isDark
        />
      </Box>

      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="body2">
          Решением государственной экзаменационной комиссии от{" "}
          {data.defenseDate} г. протокол № 0000
        </Typography>
        <Typography variant="body2">
          обучающемуся (ейся){" "}
          <span style={{ color: "#1464FF" }}>Фамилия Имя Отчество</span>{" "}
          присвоена степень
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="body2">Председатель:</Typography>
        <Typography variant="body2">Секретарь:</Typography>
        <Typography variant="body2">
          Выдан диплом № <span style={{ color: "#1464FF" }}>0000</span>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
        <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
          Руководитель структурного подразделения
        </Typography>

        <Box sx={{ flex: 1, maxWidth: "160px" }}>
          <Box
            sx={{
              borderBottom: "1px solid black",
              width: "100%",
              height: "20px",
            }}
          />
          <LabelUnderline label="Подпись" />
        </Box>

        <Box sx={{ width: "200px" }}>
          <Typography
            variant="body2"
            align="center"
            sx={{ borderBottom: "1px solid black", pb: 0.2 }}
          >
            Фамилия И. О.
          </Typography>
          <LabelUnderline label="ФИО" />
        </Box>
      </Box>
    </Box>
  );
};

export default VKRSheet;
