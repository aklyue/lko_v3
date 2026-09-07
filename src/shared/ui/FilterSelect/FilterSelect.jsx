import { InputAdornment, MenuItem, Select } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const FilterSelect = ({ label, options, value, onChange, mapping }) => (
  <Select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    displayEmpty
    startAdornment={
      <InputAdornment position="start">
        <SwapVertIcon sx={{ fontSize: 18, color: "text.secondary" }} />
      </InputAdornment>
    }
    sx={{ height: 72, fontSize: "14px", "& fieldset": { border: "none" } }}
  >
    <MenuItem value="all" sx={{ color: "text.secondary" }}>
      {label}
    </MenuItem>
    {options.map((opt) => (
      <MenuItem key={opt} value={opt}>
        {mapping ? mapping[opt]?.label || opt : opt}
      </MenuItem>
    ))}
  </Select>
);

export default FilterSelect;
