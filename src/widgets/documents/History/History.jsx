import { Box, Typography } from "@mui/material";
import { DocumentRow, selectOrderHistory } from "../../../entities/documents";
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector(selectOrderHistory);

  return (
    <>
      <Typography sx={{ fontWeight: 600, fontSize: 24, mb: 2, color: "#1A1D1F" }}>
        История заказов
      </Typography>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 3,
          borderRadius: "4px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1.5fr 2fr 1fr 1fr",
            padding: "16px 10px",
            bgcolor: "#F5F7F9",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              color: "#1A1D1F",
            }}
          >
            Дата и время заказа
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              color: "#1A1D1F",
            }}
          >
            Название документа
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              color: "#1A1D1F",
            }}
          >
            Количество
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              color: "#1A1D1F",
            }}
          >
            Статус
          </Typography>
        </Box>

        {history.map((order) => (
          <DocumentRow key={order.id} data={{ ...order }} />
        ))}
      </Box>
    </>
  );
};

export default History;
