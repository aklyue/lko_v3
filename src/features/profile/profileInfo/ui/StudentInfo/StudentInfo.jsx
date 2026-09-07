import { Box } from "@mui/material";
import { InfoItem } from "../../../../../entities/profile/User";
import {
  columnsConfig,
  studentData,
} from "../../../../../shared/const/studentInfo";

const StudentInfo = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
      {Object.entries(columnsConfig).map(([columnKey, fields]) => (
        <Box key={columnKey} sx={{ flex: "1 1 280px" }}>
          {fields.map((field) => (
            <InfoItem
              key={field.key}
              label={field.label}
              value={studentData[field.key] || "—"}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default StudentInfo;
