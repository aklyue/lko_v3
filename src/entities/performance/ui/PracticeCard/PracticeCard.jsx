import { Paper, Box, Typography, Divider, Grid } from "@mui/material";
import { LabelValue } from "../../lib/utils/labelValue";

const PracticeCard = ({ data }) => (
  <Paper variant="outlined" sx={{ p: 2, mb: 2, borderRadius: 2 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Typography variant="subtitle2" color="primary">
        Сем. {data.semester} | ЗЕ: {data.ze}
      </Typography>
      <Typography
        variant="caption"
        sx={{ bgcolor: "#f5f5f5", px: 1, borderRadius: 1 }}
      >
        {data.date}
      </Typography>
    </Box>

    <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
      {data.practiceType}
    </Typography>

    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={6}>
        <LabelValue label="Место проведения" value={data.location} />
        <LabelValue
          label="Рук-ль от предприятия"
          value={data.enterpriseSupervisor}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelValue
          label="Рук-ль от СГУГиТ"
          value={data.universitySupervisor}
        />
        <LabelValue label="Аттестовал" value={data.evaluator} />
      </Grid>
    </Grid>

    <Divider sx={{ my: 1.5 }} />

    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="body2">Оценка за практику:</Typography>
      <Typography variant="h6" color="success.main">
        {data.grade}
      </Typography>
    </Box>
  </Paper>
);

export default PracticeCard;
