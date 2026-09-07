import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PerformanceNavigation = ({ onPrev, onNext, hasPrev, hasNext }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onPrev}
        disabled={!hasPrev}
        sx={{ textTransform: "none", color: "#1464FF" }}
      >
        Предыдущая страница
      </Button>

      <Button
        endIcon={<ArrowForwardIcon />}
        onClick={onNext}
        disabled={!hasNext}
        sx={{ textTransform: "none", color: "#1464FF" }}
      >
        Следующая страница
      </Button>
    </Box>
  );
};

export default PerformanceNavigation;
