import { Box, Typography, Paper } from "@mui/material";
import { newsData } from "../../../shared/const/news";
import { NewsCard } from "../../../entities/profile/News";
import { Arrow } from "../../../features/profile/profileArrow";

const News = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", my: 2 }}>
          Новости СГУГиТ
        </Typography>

        <Arrow to={"/profile/news"} title={"Все новости"}/>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 3, flexWrap: "wrap" }}
      >
        {newsData.slice(-3).map((news) => (
          <Paper
            key={news.id}
            elevation={0}
            sx={{
              flex: "1 1 350px",
              bgcolor: "transparent",
              borderRadius: 1,
            }}
          >
            <NewsCard {...news} />
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default News;
