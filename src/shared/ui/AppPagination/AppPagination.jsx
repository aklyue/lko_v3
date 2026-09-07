import {
  Container,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AppPagination = ({
  count,
  page,
  onChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
  options = [10, 15, 30, 50, 100],
}) => {
  return (
    <Container sx={{ maxWidth: 1200 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ my: 3 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Показать
          </Typography>
          <Select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(e.target.value)}
            size="small"
            sx={{
              fontWeight: 700,
              height: 32,
              bgcolor: "#F5F7F9",
              "& fieldset": { border: "none" },
            }}
          >
            {options.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="body2" color="text.secondary">
            записей из {totalItems}
          </Typography>
        </Stack>

        <Pagination
          count={count}
          page={page}
          onChange={onChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ gap: 0.5, px: 1 }}
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      Назад
                    </Typography>
                  </Stack>
                ),
                next: () => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ gap: 0.5, px: 1 }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      Вперед
                    </Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                  </Stack>
                ),
              }}
              {...item}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#F5F7F9",
                  color: "#1464FF",
                },
                borderRadius: "8px",
                mx: 0.5,
                textTransform: "none",
              }}
            />
          )}
        />
      </Stack>
    </Container>
  );
};

export default AppPagination;
