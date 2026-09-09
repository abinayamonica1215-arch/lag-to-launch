import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import InputField from '../components/forms/InputField';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorState from '../components/common/ErrorState';
import EmptyState from '../components/common/EmptyState';

/**
 * HomePage Component
 * 
 * Strict Brand Color Usage Showcase:
 * - Primary: Deep Indigo (#4F46E5) | Dark: (#3730A3) | Light: (#EEF2FF)
 * - Accent: Cyan (#06B6D4) | Light: (#ECFEFF)
 * - Backgrounds: Main (#F8FAFC) | Card (#FFFFFF)
 * - Typography: Headings (#0F172A) | Body (#475569) | Muted (#64748B)
 * - Borders: (#E2E8F0)
 * - Status: Success (#16A34A) | Warning (#F59E0B) | Error (#DC2626)
 * - Gradient (Hero only): #4F46E5 → #06B6D4
 */
export default function HomePage() {
  const [demoInput, setDemoInput] = useState('');

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      
      {/* Hero / Concept Header */}
      <section className="text-center max-w-3xl mx-auto">
        {/* Subtle Brand Badge */}
        <span className="badge-primary mb-3">
          Design System • Exact Color Palette Applied
        </span>
        
        {/* Heading: #0F172A */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight">
          Lag to Launch
        </h1>

        {/* Hero Tagline: Deep Indigo #4F46E5 */}
        <p className="mt-2 text-lg font-semibold text-primary">
          From Academic Recovery to Employability
        </p>

        {/* Body text: #475569 */}
        <p className="mt-2 text-sm sm:text-base text-content-body leading-relaxed max-w-2xl mx-auto">
          An AI-powered student career platform helping students clear backlogs and launch into top tech careers through structured, personalized milestones.
        </p>
      </section>

      {/* Two Supported Student Journeys */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Journey 1: Arrear Recovery */}
        <Card
          title="Journey 1: Academic Recovery"
          description="For students with active arrears needing roadmap to clear them"
          className="border-l-4 border-l-status-warning"
          footer={
            <span className="badge-warning">
              Academic Recovery + Skill Development + Placement Prep
            </span>
          }
        >
          <p className="text-sm text-content-body leading-relaxed">
            Tailored study routines, semester arrear clearance trackers, and concurrent skill foundation building to ensure students do not fall behind on placement eligibility.
          </p>
          <div className="mt-4">
            <ProgressBar value={45} label="Arrear Recovery Milestone" variant="warning" showPercentage />
          </div>
        </Card>

        {/* Journey 2: Placement Acceleration */}
        <Card
          title="Journey 2: Placement Acceleration"
          description="For students with cleared backlogs bridging technical skill gaps"
          className="border-l-4 border-l-status-success"
          footer={
            <span className="badge-success">
              Skill Gap Bridging + Mock Interviews + Placement Ready
            </span>
          }
        >
          <p className="text-sm text-content-body leading-relaxed">
            Targeted assessment of role requirements, company-specific skill gap analysis, and fast-track interview preparation for day-1 placement readiness.
          </p>
          <div className="mt-4">
            <ProgressBar value={72} label="Placement Readiness Score" variant="accent" showPercentage />
          </div>
        </Card>
      </section>

      {/* Brand Color Palette Palette Reference Swatches */}
      <section className="bg-surface-card rounded-2xl border border-line p-6 sm:p-8 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-content-heading">
            Official Brand Color System
          </h2>
          <p className="text-sm text-content-muted mt-0.5">
            Verified mapping of all primary, accent, surface, text, and status tokens.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
          {/* Deep Indigo */}
          <div className="p-3 rounded-xl border border-line bg-surface flex flex-col gap-1">
            <div className="h-10 rounded-lg bg-primary w-full shadow-sm"></div>
            <span className="text-xs font-bold text-content-heading mt-1">Deep Indigo</span>
            <span className="text-[11px] font-mono text-content-muted">#4F46E5</span>
            <span className="text-[10px] text-content-muted">Primary Brand / CTA</span>
          </div>

          {/* Primary Dark */}
          <div className="p-3 rounded-xl border border-line bg-surface flex flex-col gap-1">
            <div className="h-10 rounded-lg bg-primary-dark w-full shadow-sm"></div>
            <span className="text-xs font-bold text-content-heading mt-1">Primary Dark</span>
            <span className="text-[11px] font-mono text-content-muted">#3730A3</span>
            <span className="text-[10px] text-content-muted">Button Hover State</span>
          </div>

          {/* Primary Light */}
          <div className="p-3 rounded-xl border border-line bg-surface flex flex-col gap-1">
            <div className="h-10 rounded-lg bg-primary-light border border-primary/20 w-full shadow-sm"></div>
            <span className="text-xs font-bold text-content-heading mt-1">Primary Light</span>
            <span className="text-[11px] font-mono text-content-muted">#EEF2FF</span>
            <span className="text-[10px] text-content-muted">Selected / Soft BG</span>
          </div>

          {/* Cyan Accent */}
          <div className="p-3 rounded-xl border border-line bg-surface flex flex-col gap-1">
            <div className="h-10 rounded-lg bg-accent w-full shadow-sm"></div>
            <span className="text-xs font-bold text-content-heading mt-1">Cyan Accent</span>
            <span className="text-[11px] font-mono text-content-muted">#06B6D4</span>
            <span className="text-[10px] text-content-muted">Progress / Highlights</span>
          </div>

          {/* Accent Light */}
          <div className="p-3 rounded-xl border border-line bg-surface flex flex-col gap-1">
            <div className="h-10 rounded-lg bg-accent-light border border-accent/20 w-full shadow-sm"></div>
            <span className="text-xs font-bold text-content-heading mt-1">Accent Light</span>
            <span className="text-[11px] font-mono text-content-muted">#ECFEFF</span>
            <span className="text-[10px] text-content-muted">Subtle Highlight BG</span>
          </div>

          {/* Card & Border */}
          <div className="p-3 rounded-xl border border-line bg-surface flex flex-col gap-1">
            <div className="h-10 rounded-lg bg-surface-card border-2 border-line w-full shadow-sm"></div>
            <span className="text-xs font-bold text-content-heading mt-1">Surfaces</span>
            <span className="text-[11px] font-mono text-content-muted">#FFFFFF / #F8FAFC</span>
            <span className="text-[10px] text-content-muted">Border: #E2E8F0</span>
          </div>
        </div>
      </section>

      {/* Reusable UI Components Showcase */}
      <section className="bg-surface-card rounded-2xl border border-line shadow-sm p-6 sm:p-8 space-y-8">
        <div>
          <h2 className="text-xl font-bold text-content-heading">
            Component Color Compliance Preview
          </h2>
          <p className="text-sm text-content-muted mt-0.5">
            Interactive verification of buttons, progress bars, forms, spinners, and feedback states.
          </p>
        </div>

        {/* 1. Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-content-heading uppercase tracking-wider">
            1. Buttons (<code className="font-mono text-xs">Button.jsx</code>)
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary (#4F46E5)</Button>
            <Button variant="secondary">Secondary (#EEF2FF)</Button>
            <Button variant="outline">Outline (#E2E8F0)</Button>
            <Button variant="danger">Danger (#DC2626)</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent Cyan (#06B6D4)</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>

        {/* 2. Progress Bars */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-content-heading uppercase tracking-wider">
            2. Progress Bars (<code className="font-mono text-xs">ProgressBar.jsx</code>)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProgressBar value={72} label="Placement Readiness (Cyan #06B6D4)" variant="accent" showPercentage />
            <ProgressBar value={90} label="Syllabus Recovery (Success #16A34A)" variant="success" showPercentage />
          </div>
        </div>

        {/* 3. Form Input Fields */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-content-heading uppercase tracking-wider">
            3. Form Inputs (<code className="font-mono text-xs">InputField.jsx</code>)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InputField
              label="Student Name"
              placeholder="e.g. Rahul Sharma"
              value={demoInput}
              onChange={(e) => setDemoInput(e.target.value)}
              helperText="Focus border: #4F46E5 with #EEF2FF glow"
            />
            <InputField
              label="College Email"
              type="email"
              placeholder="rahul@college.edu"
              defaultValue="invalid-student-email"
              error="Error border & text: #DC2626"
            />
            <InputField
              label="Student Roll No"
              disabled
              defaultValue="L2L-2026-ACTIVE"
              helperText="Disabled background: #F8FAFC"
            />
          </div>
        </div>

        {/* 4. Loading States */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-content-heading uppercase tracking-wider">
            4. Loading Component (<code className="font-mono text-xs">LoadingSpinner.jsx</code>)
          </h3>
          <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-surface border border-line">
            <LoadingSpinner size="sm" variant="primary" />
            <LoadingSpinner size="md" variant="primary" text="Deep Indigo spinner (#4F46E5)..." />
            <LoadingSpinner size="lg" variant="accent" text="Cyan accent spinner (#06B6D4)..." />
          </div>
        </div>

        {/* 5. Feedback States */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-content-heading uppercase tracking-wider">
            5. Feedback States (<code className="font-mono text-xs">EmptyState.jsx</code> & <code className="font-mono text-xs">ErrorState.jsx</code>)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmptyState
              title="No subjects registered yet"
              message="Add your current semester courses or arrear papers to generate your recovery plan."
              actionText="Add Course"
              onAction={() => alert("Action clicked on EmptyState")}
            />
            <ErrorState
              title="Failed to load study plan"
              message="We couldn't connect to your local progress data. Please retry."
              onRetry={() => alert("Retry clicked on ErrorState")}
            />
          </div>
        </div>
      </section>

      {/* Palette Lock Note */}
      <section className="bg-surface-card border border-line rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-content-heading">
            Color Palette Locked for Next Steps
          </h3>
          <p className="text-xs sm:text-sm text-content-muted mt-0.5">
            This palette will be consistently preserved across Landing → Login → Registration → Dashboard → Sidebar.
          </p>
        </div>
        <span className="badge-primary font-mono text-xs">
          Palette: #4F46E5 • #06B6D4 • #F8FAFC
        </span>
      </section>

    </div>
  );
}
