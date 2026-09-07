import { Button, Stack } from "@mui/material";

const PortfolioActions = ({ id }) => {
  const handleEdit = () => console.log("Edit", id);
  const handleDelete = () => console.log("Delete", id);

  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={handleEdit}
        sx={{ color: "#1464FF", textTransform: "none", fontWeight: 400 }}
      >
        Редактировать
      </Button>
      <Button
        onClick={handleDelete}
        sx={{ color: "#EC5962", textTransform: "none", fontWeight: 400, ":hover": {
            bgcolor: "#ec59630a"
        } }}
      >
        Удалить запись
      </Button>
    </Stack>
  );
};

export default PortfolioActions;
