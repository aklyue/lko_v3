import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHeaderType } from "../../../../../entities/layout/Header";

const ROUTE_HEADER_MAP = {
  "/profile/notifications": "breadcrumbs-notif",
  "/profile/news": "breadcrumbs-news",
  "/portfolio": "search-project",
  "/achievements": "search-project",
  "/education": "search",
};

export const useHeaderControl = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);

    let type = "search";

    if (segments[0] === "education") {
      if (segments.length === 4) {
        type = "breadcrumbs-mater";
      } else if (segments.length === 3) {
        type = "breadcrumbs-theme";
      } else if (segments.length === 2) {
        type = "breadcrumbs-subj";
      } else {
        type = "search";
      }
    } else if (ROUTE_HEADER_MAP[location.pathname]) {
      type = ROUTE_HEADER_MAP[location.pathname];
    }

    console.log("Current path segments:", segments);
    console.log("Resulting type:", type);

    dispatch(setHeaderType(type));
  }, [location.pathname, dispatch]);
};
