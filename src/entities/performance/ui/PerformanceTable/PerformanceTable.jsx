import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import { getGradeStyle } from "../../lib/utils/getGradeStyle";

const PerformanceTable = ({ columns, rows }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead
          sx={{
            backgroundColor: "#F5F7F9",
            "& .MuiTableCell-head": {
              borderBottom: "none",
            },
          }}
        >
          <TableRow sx={{ height: "44px" }}>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td": { borderBottom: 0 }, height: "44px" }}
            >
              {columns.map((col) => {
                const cellValue = row[col.id];

                return (
                  <TableCell
                    key={col.id}
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      borderBottom: "1px solid #F3F3F3",
                    }}
                  >
                    {col.render ? (
                      col.render(cellValue, row)
                    ) : col.id === "grade" ? (
                      <Chip
                        label={cellValue}
                        size="small"
                        sx={{
                          borderRadius: 1,
                          fontWeight: "bold",
                          backgroundColor: getGradeStyle(cellValue).bg,
                          color: getGradeStyle(cellValue).text,
                        }}
                      />
                    ) : (
                      cellValue
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PerformanceTable;
