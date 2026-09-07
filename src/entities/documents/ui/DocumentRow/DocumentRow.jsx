import { Box, Typography, Chip } from "@mui/material";
import { getStatusColor } from "../../lib/utils/getStatusColor";

const DocumentRow = ({ data }) => {
  const { date, name, count, status } = data;
  const styles = getStatusColor(status);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1.5fr 2fr 1fr 1fr",
        alignItems: "center",
        padding: "16px 10px",
        borderBottom: "1px solid #F3F3F3",
        "&:last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "#4A4A4A" }}
        textAlign={"center"}
      >
        {date}
      </Typography>
      <Typography variant="body2" textAlign={"center"}>
        {name}
      </Typography>
      <Typography variant="body2" textAlign={"center"}>
        {count}
      </Typography>

      <Chip
        icon={styles.icon}
        label={styles.label}
        sx={{
          bgcolor: styles.bgcolor,
          color: styles.color,
          fontWeight: 500,
          borderRadius: "6px",
          height: "32px",
          "& .MuiChip-icon": { marginLeft: "8px" },
        }}
      />
    </Box>
  );
};

export default DocumentRow;
