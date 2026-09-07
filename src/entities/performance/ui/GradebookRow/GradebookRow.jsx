import { TableRow, TableCell, Chip } from "@mui/material";
import { getGradeColor } from "../../lib/utils/getGradeColor";

const GradebookRow = ({ data }) => {
  return (
    <TableRow hover sx={{ "& td": { py: 1.5, fontSize: "0.8125rem" } }}>
      <TableCell>{data.semester}</TableCell>
      <TableCell sx={{ fontWeight: 500, maxWidth: 300 }}>
        {data.discipline}
      </TableCell>
      <TableCell align="center">{data.hours}</TableCell>
      <TableCell align="center">{data.ze}</TableCell>
      <TableCell>{data.examType}</TableCell>
      <TableCell>
        <Chip
          label={data.grade}
          size="small"
          sx={{
            bgcolor: `${getGradeColor(data.grade)}15`,
            color: getGradeColor(data.grade),
            fontWeight: "bold",
          }}
        />
      </TableCell>
      <TableCell sx={{ whiteSpace: "nowrap" }}>{data.date}</TableCell>
      <TableCell>{data.teacher}</TableCell>
    </TableRow>
  );
};

export default GradebookRow;
