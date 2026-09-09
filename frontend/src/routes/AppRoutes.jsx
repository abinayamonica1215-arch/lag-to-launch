import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Public & Authentication Pages
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

// Onboarding Journey Screens
import AcademicProfilePage from '../pages/AcademicProfilePage';
import CareerSelectionPage from '../pages/CareerSelectionPage';
import AIAnalysisPage from '../pages/AIAnalysisPage';
import StudentPathPage from '../pages/StudentPathPage';

// Core Dashboard & Progress Pages
import DashboardPage from '../pages/DashboardPage';
import AcademicRecoveryPage from '../pages/AcademicRecoveryPage';
import SkillGapPage from '../pages/SkillGapPage';
import LearningPlanPage from '../pages/LearningPlanPage';

// Assessment & Recommendation Screens
import PlacementAssessmentPage from '../pages/PlacementAssessmentPage';
import AssessmentResultPage from '../pages/AssessmentResultPage';
import TrainingRecommendationPage from '../pages/TrainingRecommendationPage';
import PlacementRecommendationPage from '../pages/PlacementRecommendationPage';

// Placement Preparation & Career Screens
import PlacementPreparationPage from '../pages/PlacementPreparationPage';
import CareerProfilePage from '../pages/CareerProfilePage';
import ReadinessPage from '../pages/ReadinessPage';

// Design System Showcase
import HomePage from '../pages/HomePage';
import Button from '../components/common/Button';

/**
 * AppRoutes Component
 * Central routing configuration for Lag to Launch.
 * 
 * Routes strictly per Part 5 specification:
 * - / → LandingPage
 * - /login → LoginPage
 * - /register → RegistrationPage
 * - /dashboard → DashboardPage
 * - /academic-profile → AcademicProfilePage
 * - /career-selection → CareerSelectionPage
 * - /ai-analysis → AIAnalysisPage
 * - /student-path → StudentPathPage
 * - /academic-recovery → AcademicRecoveryPage
 * - /skill-gap → SkillGapPage
 * - /learning-plan → LearningPlanPage
 * - /placement-assessment → PlacementAssessmentPage
 * - /assessment-result → AssessmentResultPage
 * - /training-recommendation → TrainingRecommendationPage
 * - /placement-prep → PlacementPreparationPage
 * - /career-profile → CareerProfilePage
 * - /readiness → ReadinessPage
 * - /placement-recommendation → PlacementRecommendationPage
 * - /components → HomePage (Design System Showcase)
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Marketing Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* 2. Authentication Pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />

      {/* 3. Onboarding Screens */}
      <Route path="/academic-profile" element={<AcademicProfilePage />} />
      <Route path="/career-selection" element={<CareerSelectionPage />} />
      <Route path="/ai-analysis" element={<AIAnalysisPage />} />
      <Route path="/student-path" element={<StudentPathPage />} />

      {/* 4. Dashboard & Core Roadmap Pages */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />
      <Route path="/academic-recovery" element={<AcademicRecoveryPage />} />
      <Route path="/skill-gap" element={<SkillGapPage />} />
      <Route path="/learning-plan" element={<LearningPlanPage />} />

      {/* 5. Assessment & Recommendation Screens */}
      <Route path="/placement-assessment" element={<PlacementAssessmentPage />} />
      <Route path="/assessment-result" element={<AssessmentResultPage />} />
      <Route path="/training-recommendation" element={<TrainingRecommendationPage />} />
      <Route path="/placement-recommendation" element={<PlacementRecommendationPage />} />

      {/* 6. Placement Prep, Profile & Readiness */}
      <Route path="/placement-prep" element={<PlacementPreparationPage />} />
      <Route path="/career-profile" element={<CareerProfilePage />} />
      <Route path="/readiness" element={<ReadinessPage />} />

      {/* Reusable UI Components Showcase */}
      <Route path="/components" element={<HomePage />} />

      {/* Catch-all fallback for undefined routes */}
      <Route
        path="*"
        element={
          <div className="text-center py-24 px-4 max-w-md mx-auto space-y-4 font-sans">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
              404
            </span>
            <h2 className="text-3xl font-bold text-content-heading">Page Not Found</h2>
            <p className="text-sm text-content-muted leading-relaxed">
              The requested page does not exist or has not been built yet.
            </p>
            <div className="pt-2">
              <Link to="/dashboard">
                <Button variant="primary" size="md">
                  Return to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        }
      />
    </Routes>
  );
}
