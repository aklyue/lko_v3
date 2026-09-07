import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Box } from "@mui/material";
import { selectMaterialNavigation } from "../../../../../entities/education";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

function MaterialNavigation() {
  const { subjectId, themeId, materialId } = useParams();
  const navigate = useNavigate();

  const { prev, next } = useSelector((state) =>
    selectMaterialNavigation(state, subjectId, materialId),
  );

  const handleNavigate = (navItem) => {
    if (navItem) {
      navigate(
        `/education/${subjectId}/${navItem.themeId}/${navItem.materialId}`,
      );
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
      <Button
        variant="text"
        disabled={!prev}
        onClick={() => handleNavigate(prev)}
        startIcon={<WestIcon sx={{ fontSize: "24px !important" }} />}
        sx={{
          textTransform: "none",
          color: "#1464FF",
          fontSize: 14,
        }}
      >
        Предыдущий материал
      </Button>

      <Button
        variant="text"
        disabled={!next}
        onClick={() => handleNavigate(next)}
        endIcon={<EastIcon sx={{ fontSize: "24px !important" }} />}
        sx={{
          textTransform: "none",
          color: "#1464FF",
          fontSize: 14,
        }}
      >
        Следующий материал
      </Button>
    </Box>
  );
}

export default MaterialNavigation;
