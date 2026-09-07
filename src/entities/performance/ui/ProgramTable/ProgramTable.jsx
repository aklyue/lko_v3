import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const ProgramTable = ({ rows }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ border: "1px solid #F5F7F9", borderRadius: 1 }}
    >
      <Table sx={{ minWidth: 800, tableLayout: "fixed" }} size="small">
        <TableHead sx={{ backgroundColor: "#F5F7F9" }}>
          <TableRow
            sx={{
              "& td, & th": { border: "1px solid #F5F7F9" },
            }}
          >
            <TableCell sx={{ ...headStyle, width: "50px" }}>Сем.</TableCell>
            <TableCell sx={{ ...headStyle, width: "220px" }}>
              Шифр, наименование компетенции*
            </TableCell>
            <TableCell sx={{ ...headStyle, width: "250px" }}>
              Дисциплина / Практика
            </TableCell>
            <TableCell sx={{ ...headStyle, width: "100px" }}>
              Не сформулирована
            </TableCell>
            <TableCell sx={{ ...headStyle, width: "100px" }}>
              Частично сформулирована
            </TableCell>
            <TableCell sx={{ ...headStyle, width: "100px" }}>
              Полностью сформулирована
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const isNewBlock = !!row.competence;

            return (
              <TableRow
                key={row.id}
                sx={{
                  "& td, & th": { border: "1px solid #F5F7F9" },
                }}
              >
                <TableCell
                  sx={{
                    ...cellStyle,
                    borderTop: isNewBlock ? "1px solid #F5F7F9" : "none",
                    fontWeight: "500",
                  }}
                >
                  {row.semester}
                </TableCell>

                <TableCell
                  sx={{
                    ...cellStyle,
                    borderTop: isNewBlock ? "1px solid #F5F7F9" : "none",
                    textAlign: "left",
                    borderRight: "1px solid #F5F7F9",
                  }}
                >
                  {row.competence && (
                    <Box sx={{ p: 0.5 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          fontSize: 14,
                        }}
                      >
                        {row.competence.code}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: 14,
                          color: "#1A1D1F",
                          lineHeight: 1.1,
                          display: "block",
                        }}
                      >
                        {row.competence.description}
                      </Typography>
                    </Box>
                  )}
                </TableCell>

                <TableCell
                  sx={{
                    ...cellStyle,
                    textAlign: "left",
                    pl: 2,
                    borderTop: "1px solid #F5F7F9",
                  }}
                >
                  {row.discipline}
                </TableCell>

                <TableCell
                  sx={{ ...cellStyle, borderTop: "1px solid #F5F7F9" }}
                >
                  {row.notFormed || ""}
                </TableCell>
                <TableCell
                  sx={{
                    ...cellStyle,
                    borderTop: "1px solid #F5F7F9",
                  }}
                >
                  {row.partiallyFormed || ""}
                </TableCell>
                <TableCell
                  sx={{ ...cellStyle, borderTop: "1px solid #F5F7F9" }}
                >
                  {row.fullyFormed || ""}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const headStyle = {
  fontWeight: 500,
  fontSize: 14,
  textAlign: "center",
  color: "#1A1D1F",
  borderRight: "1px solid #F5F7F9",
  lineHeight: 1.2,
  py: 1,
  px: 0.5,
};

const cellStyle = {
  fontSize: 14,
  textAlign: "center",
  verticalAlign: "top",
  borderRight: "1px solid #F5F7F9",
  p: 1,
};

export default ProgramTable;
