import React, { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useFileAttachment } from "../../lib/hooks";

function MaterialDropzone() {
  const { fileInputRef, file, handleClick, handleFileChange, handleDrop } =
    useFileAttachment();
    
  return (
    <Box
      onClick={handleClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 260,
        bgcolor: "#F5F7F9",
        border: "2px dashed #6F767E",
        borderRadius: 1,
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          bgcolor: "#eaf4ff",
          borderColor: "#1464FF",
        },
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          color: "#6F767E",
          mb: 1,
        }}
      >
        <span
          style={{
            color: "#1464FF",
            textDecoration: "underline",
          }}
        >
          Выберите файл
        </span>{" "}
        или перетащите сюда
      </Typography>

      <Typography
        sx={{
          color: "#9A9FA5",
          fontSize: 12,
        }}
      >
        {file
          ? `Выбрано: ${file.name}`
          : "(Общий объем файлов не более 100 МБ)"}
      </Typography>
    </Box>
  );
}

export default MaterialDropzone;
