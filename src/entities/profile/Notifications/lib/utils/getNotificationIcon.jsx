import WorkIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";

export const getNotificationIcon = (type, initials) => {
  switch (type) {
    case "Деканат":
      return initials || "ДК";
    case "Портфолио":
      return <WorkIcon sx={{ fontSize: "30px" }} />;
    case "Обучение":
      return <SchoolIcon sx={{ fontSize: "30px" }} />;
    default:
      return <NotificationsIcon sx={{ fontSize: "30px" }} />;
  }
};
