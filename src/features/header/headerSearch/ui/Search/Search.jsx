import { Box, InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import React from "react";

const Search = () => {
  return (
    <Box>
      <TextField
        placeholder="Поиск..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#90A4AE", fontSize: 20 }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: 320,
          height: 40,
          bgcolor: "#F5F7F9",
          borderRadius: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
        size="small"
      />
    </Box>
  );
}

export default Search;
