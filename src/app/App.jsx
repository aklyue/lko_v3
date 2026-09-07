import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LayoutProvider from "./providers/LayoutProvider";
import ProfilePage from "../pages/ProfilePage";
import PortfolioPage from "../pages/PortfolioPage";
import AchievementsPage from "../pages/AchievementsPage";
import AllNewsPage from "../pages/AllNewsPage";
import AllNotificationsPage from "../pages/AllNotificationsPage/AllNotificationsPage";
import EducationPage from "../pages/EducationPage";
import SubjectPage from "../pages/SubjectPage";
import MaterialsPage from "../pages/MaterialsPage";
import SpecificMaterialPage from "../pages/SpecificMaterialPage";
import GradebookPage from "../pages/GradebookPage";
import AssessmentPage from "../pages/AssessmentPage";
import ProgramPage from "../pages/ProgramPage";
import PortfolioDetailsPage from "../pages/PortfolioDetailsPage";
import DocumentsPage from "../pages/DocumentsPage";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("profile", { replace: true });
    }
  }, [location.pathname, navigate]);
  return (
    <Routes>
      <Route path="/" element={<LayoutProvider />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="achievements" element={<AchievementsPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="profile/news" element={<AllNewsPage />} />
        <Route
          path="profile/notifications"
          element={<AllNotificationsPage />}
        />
        <Route path="/education/:id" element={<SubjectPage />} />
        <Route
          path="/education/:subjectId/:themeId"
          element={<MaterialsPage />}
        />
        <Route
          path="/education/:subjectId/:themeId/:materialId"
          element={<SpecificMaterialPage />}
        />
        <Route path="performance/gradebook" element={<GradebookPage />} />
        <Route path="performance/assessment" element={<AssessmentPage />} />
        <Route path="performance/program" element={<ProgramPage />} />
        <Route
          path="portfolio/:portfolioId"
          element={<PortfolioDetailsPage />}
        />
      </Route>
    </Routes>
  );
};
export default App;
