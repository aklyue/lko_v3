import { useDispatch, useSelector } from "react-redux";
import { selectAvailableSemesters, setFilters } from "../../../../../entities/education";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const EducationSort = () => {
  const dispatch = useDispatch();

  const availableSemesters = useSelector(selectAvailableSemesters);
  const selectedSemester = useSelector(
    (state) => state.education.filters.selectedSemester,
  );

  const handleChange = (event) => {
    const value = event.target.value === "all" ? null : event.target.value;
    dispatch(setFilters({ selectedSemester: value }));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography sx={{ color: "#828282", fontSize: "14px", fontWeight: 400 }}>
        Сортировка:
      </Typography>

      <FormControl variant="standard">
        <Select
          value={selectedSemester || "all"}
          onChange={handleChange}
          IconComponent={KeyboardArrowDownIcon}
          disableUnderline
          sx={{
            color: "#1464FF",
            fontSize: "14px",
            "& .MuiSelect-select": {
              py: 0,
              pr: "24px !important",
              backgroundColor: "transparent",
            },
            "& .MuiSvgIcon-root": { color: "#1464FF", fontSize: "20px" },
          }}
        >
          <MenuItem value="all">все</MenuItem>
          {availableSemesters.map((realSem, index) => (
            <MenuItem key={realSem} value={realSem}>
              {index + 1} семестр
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EducationSort;
