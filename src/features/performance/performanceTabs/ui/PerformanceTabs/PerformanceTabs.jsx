import { Box, Button } from "@mui/material";

const PerformanceTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: "14px",
            borderRadius: "4px",
            px: 2,
            py: 0.5,
            backgroundColor: activeTab === tab.id ? "#E8F0FF" : "#fff",
            color: activeTab === tab.id ? "#1464FF" : "#1A1D1F",
            "&:hover": {
              backgroundColor: activeTab === tab.id ? "#e3f2fd" : "#f5f5f5",
            },
          }}
        >
          {tab.label}
        </Button>
      ))}
    </Box>
  );
};

export default PerformanceTabs;
