import { Box, Typography } from "@mui/material";
import { OrderForm } from "../../../features/documents/documentsOrderForm";

const OrderFormWidget = ({ onSelect }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{ fontWeight: 600, fontSize: 24, mb: 2, color: "#1A1D1F" }}
      >
        Заказать документы
      </Typography>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 3,
          borderRadius: 1,
        }}
      >
        <OrderForm onSelect={onSelect} />
      </Box>
    </Box>
  );
};

export default OrderFormWidget;
