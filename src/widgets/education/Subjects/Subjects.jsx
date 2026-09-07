import { useSelector } from "react-redux";
import { Box, darken, Grid, Typography } from "@mui/material";
import {
  selectFilteredSubjects,
  SubjectCard,
} from "../../../entities/education";
import { EducationTabs } from "../../../features/education/educationTabs";
import { EducationSort } from "../../../features/education/educationSort";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();

  const groupedBySemesters = useSelector(selectFilteredSubjects);

  const selectedSemester = useSelector(
    (state) => state.education.filters.selectedSemester,
  );
  const visibleSubjects = groupedBySemesters
    .filter((group) => !selectedSemester || group.semester === selectedSemester)
    .flatMap((group) => group.items);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: 1,
          borderColor: "divider",
          mb: 4,
        }}
      >
        <EducationTabs />

        <EducationSort />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          gap: 3,
        }}
      >
        {visibleSubjects.map((subject) => (
          <Box
            key={subject.id}
            sx={{
              bgcolor: "#ffffff",
              flex: "1 1 300px",
              borderRadius: 1,
              cursor: "pointer",
              "&:hover": { bgcolor: darken("#ffffff", 0.02) },
              transition: "all 0.2s"
            }}
            onClick={() => navigate(`/education/${subject.id}`)}
          >
            <SubjectCard data={subject} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Subjects;
