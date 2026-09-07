import { Box, Paper } from "@mui/material";
import React from "react";
import { newsData } from "../../../shared/const/news";
import { NewsCard } from "../../../entities/profile/News";

const News = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", gap: 3, flexWrap: "wrap" }}
    >
      {newsData.map((news) => (
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
  );
};

export default News;
