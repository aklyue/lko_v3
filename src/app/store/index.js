import { configureStore } from "@reduxjs/toolkit";
import { portfolioReducer } from "../../entities/portfolio/PortfolioCard";
import { achievementsReducer } from "../../entities/achievements/AchievementCard";
import { headerReducer } from "../../entities/layout/Header";
import { educationReducer } from "../../entities/education";
import {
  assessmentReducer,
  gradebookReducer,
  programReducer,
} from "../../entities/performance";
import { documentsReducer } from "../../entities/documents";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    achievements: achievementsReducer,
    header: headerReducer,
    education: educationReducer,
    gradebook: gradebookReducer,
    assessment: assessmentReducer,
    program: programReducer,
    documents: documentsReducer,
  },
});
