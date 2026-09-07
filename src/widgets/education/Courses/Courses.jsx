import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, darken, Typography } from "@mui/material";
import {
  CourseCard,
  selectFilteredThemes,
  selectSubjectById,
} from "../../../entities/education";
import { EducationCoursesTabs } from "../../../features/education/educationCoursesTabs";

const Courses = () => {
  const { id } = useParams();
  const { items: filteredThemes, subjectExists } = useSelector((state) =>
    selectFilteredThemes(state, id),
  );

  const navigate = useNavigate();

  if (!subjectExists) {
    return <Typography>Предмет не найден</Typography>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <EducationCoursesTabs />
      {filteredThemes.map((theme) => (
        <Box
          sx={{
            borderRadius: 1,
            bgcolor: "#ffffff",
            "&:hover": { bgcolor: darken("#ffffff", 0.02), cursor: "pointer" },
            transition: "all 0.2s",
          }}
          onClick={() => navigate(`/education/${id}/${theme.id}`)}
          key={theme.id}
        >
          <CourseCard data={theme} />
        </Box>
      ))}
    </Box>
  );
};

export default Courses;
