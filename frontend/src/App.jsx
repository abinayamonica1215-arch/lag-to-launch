import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

/**
 * AppShell Component
 * Dynamically switches between the public marketing layout (Navbar + Footer)
 * and the dashboard application layout (DashboardLayout with Sidebar).
 */
function AppShell() {
  const location = useLocation();

  // Public/marketing routes that use the top Navbar and Footer
  const isMarketingRoute = 
    location.pathname === '/' || 
    location.pathname === '/login' || 
    location.pathname === '/register' ||
    location.pathname === '/components';

  // In-app and onboarding routes render their own dedicated shells
  if (!isMarketingRoute) {
    return <AppRoutes />;
  }

  // Public marketing routes render the global Navbar and Footer
  return (
    <div className="min-h-screen flex flex-col bg-surface text-content-body">
      {/* Global Public Navigation Header */}
      <Navbar />

      {/* Dynamic Routed Pages */}
      <main className="flex-1">
        <AppRoutes />
      </main>

      {/* Global Public Footer */}
      <Footer />
    </div>
  );
}

/**
 * Main Application Component
 * Wraps the app with React Router's BrowserRouter.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
