import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import {
  selectMaterialById,
  SpecificMaterialCard,
} from "../../../entities/education";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoadMaterialButton } from "../../../features/education/educationLoadMaterialButton";
import { MaterialCheckbox } from "../../../features/education/educationMaterialCheckbox";
import { MaterialDropzone } from "../../../features/education/educationMaterialDropzone";
import { SendWorkButton } from "../../../features/education/educationSendWorkButton";
import { MaterialNavigation } from "../../../features/education/educationMaterialNavigation";

function SpecificMaterial() {
  const { subjectId, themeId, materialId } = useParams();
  const material = useSelector((state) =>
    selectMaterialById(state, subjectId, themeId, materialId),
  );

  if (!material) {
    return <Box>Материал не найден...</Box>;
  }
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={700}
        mb={2}
        sx={{
          maxWidth: {
            xs: "100%",
            md: "100%",
            lg: "60%",
          },
        }}
      >
        {material.title}
      </Typography>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          boxShadow: "none",
          borderRadius: 1,
        }}
      >
        <SpecificMaterialCard data={material} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <LoadMaterialButton />
          {material.type === "default" && <MaterialCheckbox />}
        </Box>

        {material.type !== "default" && <MaterialDropzone />}

        <Typography
          color="textSecondary"
          sx={{ fontSize: 14, lineHeight: 1.5 }}
        >
          Чтобы пройти данный учебный материал, необходимо скачать учебный
          материал, выполнить работу согласно требованиям преподавателя,
          отправить работу на проверку преподавателю. Если возникнут вопросы,
          можно{" "}
          <Typography
            component="a"
            href="/messages"
            sx={{
              color: "#1464FF",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 14,
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            написать преподавателю
          </Typography>
          .
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {material.type !== "default" && <SendWorkButton />}
        </Box>
      </Paper>
      <MaterialNavigation />
    </>
  );
}

export default SpecificMaterial;
