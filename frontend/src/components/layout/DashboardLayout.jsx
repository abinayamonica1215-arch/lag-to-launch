import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

/**
 * DashboardLayout Component
 * 
 * Common application shell used for authenticated student views.
 * Structure:
 * ┌─────────────────────────────────────────────┐
 * │ Sidebar │ Top Header                        │
 * │         ├───────────────────────────────────┤
 * │         │                                   │
 * │         │       Page Content ({children})   │
 * │         │                                   │
 * │         │                                   │
 * └─────────────────────────────────────────────┘
 * 
 * Strict Brand Palette:
 * - Background: Main (#F8FAFC)
 * - Card/Surface: (#FFFFFF)
 * - Borders: (#E2E8F0)
 */
export default function DashboardLayout({ children, title = 'Dashboard' }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex text-content-body overflow-x-hidden">
      
      {/* Persistent / Slide-out Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Column */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <DashboardHeader
          title={title}
          onMenuToggle={() => setIsSidebarOpen((prev) => !prev)}
        />

        {/* Scrollable Main View Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-8">
          {children}
        </main>
      </div>

    </div>
  );
}
