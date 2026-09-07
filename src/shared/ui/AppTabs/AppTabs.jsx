import { Tabs, Tab } from "@mui/material";

const AppTabs = ({ value, onChange, items, sx = {} }) => (
  <Tabs
    value={value}
    onChange={onChange}
    sx={{
      borderBottom: 2,
      borderColor: "divider",
      "& .MuiTab-root": {
        textTransform: "none",
        fontWeight: 400,
        fontSize: "14px",
        minWidth: "auto",
        px: 2,
      },
      "& .Mui-selected": {
        color: "#1464FF !important",
      },
      "& .MuiTabs-indicator": {
        bgcolor: "#1464FF",
        height: 2,
      },
      ...sx,
    }}
  >
    {items.map((item) => (
      <Tab
        key={item.value}
        label={item.label}
        value={item.value}
        disableRipple
      />
    ))}
  </Tabs>
);

export default AppTabs;
