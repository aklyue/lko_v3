import { useState } from "react";
import {
  List,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

export const NavGroup = ({ icon, label, children }) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        bgcolor: "transparent",
        "&:before": { display: "none" },
        "&.Mui-expanded": { margin: "0 8px 4px 8px" },
        margin: "0 8px 4px 8px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{
          pl: 1,
          mx: 0,
          minHeight: 40,
          mb: 0.5,
          borderRadius: 2,
          color: "text.primary",
          transition: "all 0.1s",
          fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
          "&.Mui-expanded": {
            minHeight: 40,
            bgcolor: "#F5F7F9",
            color: "#1464FF",
          },
          "&:hover": {
            bgcolor: "#F5F7F9",
            color: "#1464FF",
          },
          "& .MuiAccordionSummary-content": {
            display: "flex",
            alignItems: "center",
            gap: 1,
            margin: "0 !important",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: "inherit",
          },
        }}
      >
        {icon}
        <span style={{ fontSize: "14px" }}>{label}</span>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0 }}>
        <List component="div" disablePadding>
          {children}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
