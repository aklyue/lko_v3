import { Box, Typography, CardMedia } from "@mui/material";
import { getStatusStyles } from "../../lib/utils/getStatusStyles";

const NewsCard = ({ image, status, date, title, text }) => {
  const statusStyle = getStatusStyles(status);
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
        overflow: "hidden",
        bgcolor: "#FFFFFF",
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
        "& .MuiCardMedia-root": {
          filter: "brightness(1)",
          transition: "filter 0.2s ease-in-out",
        },
        "&:hover": {
          bgcolor: "#F8F9FA",
          "& .MuiCardMedia-root": {
            filter: "brightness(0.92)",
          },
        },
      }}
    >
      <CardMedia component="img" height="120" image={image} alt={title} />

      <Box
        sx={{
          px: 3,
          pb: 3,
          pt: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1, mb: 1.5 }}>
          <Box
            sx={{
              bgcolor: statusStyle.bg,
              color: statusStyle.color,
              px: 1.5,
              py: 0.5,
              borderRadius: 1.5,
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            {status}
          </Box>
          <Box
            sx={{
              bgcolor: "rgba(128, 128, 128, 0.08)",
              color: "text.secondary",
              px: 1.5,
              py: 0.5,
              borderRadius: 1.5,
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {date}
          </Box>
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "14px",
            mb: 1,
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "14px",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsCard;
