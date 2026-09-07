import { useRef, useState } from "react";

export const useFileAttachment = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Выбран файл:", selectedFile.name);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      console.log("Перетащен файл:", droppedFile.name);
    }
  };

  return {
    fileInputRef,
    file,
    handleClick,
    handleFileChange,
    handleDrop,
  };
};
