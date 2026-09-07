import { InputAdornment, TextField } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const SearchInput = ({ value, onChange, placeholder }) => (
  <TextField
    fullWidth
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SwapVertIcon sx={{ fontSize: 20 }} />
        </InputAdornment>
      ),
    }}
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { border: "none" },
        "& input::placeholder": { color: "text.secondary", opacity: 1 },
      },
    }}
  />
);

export default SearchInput;
