import { Box, Typography, Divider, Grid } from "@mui/material";
import { LabelUnderline } from "../../lib/utils/LabelUnderline";

const FirstPageSheet = ({ data }) => {
  return (
    <Box sx={{ p: 2, color: "#333", maxWidth: "1200px", margin: "0 auto" }}>
      <Typography
        variant="caption"
        align="center"
        display="block"
        sx={{ fontWeight: 500, lineHeight: 1.2, fontSize: 14 }}
      >
        МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ
        <br />
        Федеральное государственное бюджетное образовательное учреждение высшего
        образования
        <br />
        СИБИРСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ГЕОСИСТЕМ И ТЕХНОЛОГИЙ
        <br />
        (СГУГиТ)
      </Typography>

      <Typography align="center" sx={{ mt: 4, mb: 4, fontSize: 16 }}>
        <span style={{ color: "#9A9FA5" }}>ЭЛЕКТРОННАЯ ЗАЧЁТНАЯ КНИЖКА № </span>
        {data.bookNumber}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "fit-content",
        }}
      >
        <Box sx={{ width: 440 }}>
          <Typography
            align="center"
            sx={{ borderBottom: "1px solid black", pb: 0.5, fontSize: 16 }}
          >
            {data.fullName}
          </Typography>
          <LabelUnderline label="Фамилия, Имя, Отчество" />
        </Box>
      </Box>

      <Box sx={{ mt: 4, "& p": { mb: 1.5, fontSize: "14px" } }}>
        <Typography>{data.specialty}</Typography>
        <Typography>Профиль: {data.profile}</Typography>
        <Typography>{data.institute}</Typography>
        <Typography>Форма обучения: {data.educationForm}</Typography>
        <Typography>Зачислен приказом {data.enrollmentOrder}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
            maxWidth: "450px",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
              <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                Ректор (проректор)
              </Typography>
              <Box sx={{ flexGrow: 1, borderBottom: "1px solid black" }} />
              <Typography
                variant="body2"
                sx={{
                  minWidth: "140px",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                {data.rector}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                ml: "140px",
              }}
            >
              <LabelUnderline label="Подпись" />
              <LabelUnderline label="ФИО" />
            </Box>
          </Box>

          <Box>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
              <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                Директор института
              </Typography>
              <Box sx={{ flexGrow: 1, borderBottom: "1px solid black" }} />
              <Typography
                variant="body2"
                sx={{
                  minWidth: "140px",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                {data.director}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                ml: "140px",
              }}
            >
              <LabelUnderline label="Подпись" />
              <LabelUnderline label="ФИО" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstPageSheet;
