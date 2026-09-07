import {
  Box,
  Typography,
  InputBase,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { inputStyles, labelStyles } from "../../model/const/constants";

const OrderForm = ({ onSelect }) => {
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Box>
        <Typography sx={labelStyles}>НАЗВАНИЕ ДОКУМЕНТА</Typography>
        <Select
          fullWidth
          defaultValue="stipend"
          onChange={(e) => onSelect(e.target.value)}
          sx={{
            ...inputStyles,
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSvgIcon-root": { color: "#6F767E" },
            "& .MuiSelect-select": { p: 0 },
          }}
        >
          <MenuItem value="stipend">Справка о выплате стипендии</MenuItem>
          <MenuItem value="study_cert">Справка об обучении</MenuItem>
        </Select>
      </Box>

      <Box>
        <Typography sx={labelStyles}>
          ОРГАНИЗАЦИЯ, В КОТОРУЮ ТРЕБУЕТСЯ СПРАВКА:
        </Typography>
        <InputBase
          fullWidth
          placeholder="Название организации.."
          sx={inputStyles}
        />
      </Box>

      <Box>
        <Typography sx={labelStyles}>СПРАВКА ЗА ПЕРИОД</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <InputBase
            placeholder="мм.гггг"
            startAdornment={
              <Typography sx={{ width: 20, fontSize: 14, color: "#1A1D1F" }}>
                с
              </Typography>
            }
            sx={{ maxWidth: 140, ...inputStyles }}
          />
          <InputBase
            placeholder="мм.гггг"
            startAdornment={
              <Typography sx={{ width: 30, fontSize: 14, color: "#1A1D1F" }}>
                по
              </Typography>
            }
            sx={{ maxWidth: 140, ...inputStyles }}
          />
        </Box>
      </Box>

      <Box>
        <Typography sx={labelStyles}>КОЛИЧЕСТВО СПРАВОК</Typography>
        <InputBase
          placeholder="00"
          startAdornment={
            <Typography sx={{ mr: 1, fontSize: 14, color: "#1A1D1F" }}>
              шт.
            </Typography>
          }
          sx={{ width: 150, ...inputStyles }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Отправить справку на ящик СГУГиТ"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: 14,
            },
          }}
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: 2,
            p: "10px 20px",
            boxShadow: "none",
            bgcolor: "#1464FF",
            color: "#FFFFFF",
            fontSize: 14,
            textTransform: "none",
            "&:hover": {
              boxShadow: "none",
              bgcolor: "#4180ff",
            },
          }}
        >
          Заказать
        </Button>
      </Box>
    </Box>
  );
};

export default OrderForm;
