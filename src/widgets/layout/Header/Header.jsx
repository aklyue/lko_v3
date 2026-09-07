import { Box } from "@mui/material";
import { Search } from "../../../features/header/headerSearch";
import { SettingsButton } from "../../../features/header/headerSettings";
import { NotificationsButton } from "../../../features/header/headerNotifications";
import { HeaderAvatar } from "../../../features/header/headerAvatar";
import { useSelector } from "react-redux";
import { HeaderLayout } from "../../../entities/layout/Header";
import { HeaderBreadcrumbs } from "../../../features/header/headerBreadcrumbs";
import { useLocation, useParams } from "react-router-dom";

function Header() {
  const pageType = useSelector((state) => state.header.pageType);
  const { subjectId, themeId } = useParams();
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <HeaderLayout
      leftContent={
        <>
          {![
            "breadcrumbs-notif",
            "breadcrumbs-subj",
            "breadcrumbs-theme",
            "breadcrumbs-mater",
          ].includes(pageType) && <Search />}
          {pageType === "breadcrumbs-notif" && (
            <HeaderBreadcrumbs
              previous={[{ label: "Мой профиль", path: "/profile" }]}
              current={"Все уведомления"}
            />
          )}
          {pageType === "breadcrumbs-subj" && (
            <HeaderBreadcrumbs
              previous={[
                { label: "Обучение", path: "/education" },
                { label: "Дисциплины", path: "/education" },
              ]}
              current={"Курсы"}
            />
          )}
          {pageType === "breadcrumbs-theme" && (
            <HeaderBreadcrumbs
              previous={[
                { label: "Обучение", path: "/education" },
                { label: "Дисциплины", path: "/education" },
                { label: "Курсы", path: `/education/${subjectId}` },
              ]}
              current={"Учебные материалы"}
            />
          )}
          {pageType === "breadcrumbs-mater" && (
            <HeaderBreadcrumbs
              previous={[
                { label: "Обучение", path: "/education" },
                { label: "Дисциплины", path: "/education" },
                { label: "Курсы", path: `/education/${subjectId}` },
                {
                  label: "Учебные материалы",
                  path: `/education/${subjectId}/${themeId}`,
                },
              ]}
              current={"Документ для изучения"}
            />
          )}
        </>
      }
      rightContent={
        <>
          <NotificationsButton />
          <SettingsButton />
          <HeaderAvatar />
        </>
      }
    />
  );
}

export default Header;
