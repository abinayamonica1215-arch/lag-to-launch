import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import ProgressBar from '../components/common/ProgressBar';

/**
 * LandingPage Component
 * 
 * Lag to Launch — From Academic Recovery to Employability
 * 
 * Reuses existing components:
 * - Button (primary, outline, secondary, ghost)
 * - Card (title, description, children, footer)
 * - ProgressBar (values, labels, variants)
 * 
 * Strictly follows the approved color palette:
 * - Primary: Deep Indigo (#4F46E5), Dark (#3730A3), Light (#EEF2FF)
 * - Accent: Cyan (#06B6D4), Light (#ECFEFF)
 * - Backgrounds: Main (#F8FAFC), Card (#FFFFFF)
 * - Text: Heading (#0F172A), Body (#475569), Muted (#64748B)
 * - Borders: (#E2E8F0)
 * - Status: Success (#16A34A), Warning (#F59E0B), Error (#DC2626)
 */
export default function LandingPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32 py-8 sm:py-12 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* SECTION 2 — HERO SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Small Badge */}
            <span className="badge-primary">
              AI-Powered Student Career Platform
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-content-heading tracking-tight leading-[1.12]">
              Turn Your Academic Lag <br className="hidden sm:inline" />
              Into Your Career Launch
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-content-body max-w-2xl leading-relaxed">
              Lag to Launch helps students recover from academic arrears, close skill gaps, and become placement-ready with a personalized career journey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Link to="/register" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-sm">
                  Get Started
                </Button>
              </Link>
              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore How It Works
                </Button>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-content-muted font-medium border-t border-line w-full">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Zero Judgment Environment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Dual-Journey Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-status-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Placement-Focused Metrics</span>
              </div>
            </div>

          </div>

          {/* Hero Right Column: Student Journey Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-surface-card rounded-2xl border border-line shadow-md p-6 sm:p-7 relative">
              
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-line mb-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                    Visual Student Roadmap
                  </span>
                  <h3 className="text-base font-bold text-content-heading">
                    The Lag-to-Launch Flow
                  </h3>
                </div>
                <span className="badge-accent">
                  Active Journey
                </span>
              </div>

              {/* Connected Journey Milestones */}
              <div className="space-y-4 relative">
                
                {/* Milestone 1: Academic Lag */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface border border-line transition-all hover:border-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-status-warning flex items-center justify-center font-bold text-sm flex-shrink-0 border border-amber-200">
                    01
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-semibold text-content-heading">Academic Lag</h4>
                      <span className="text-[11px] text-content-muted">Starting Point</span>
                    </div>
                    <p className="text-xs text-content-body mt-0.5">
                      Identify subject arrears & root difficulty areas
                    </p>
                  </div>
                </div>

                {/* Downward Connector Arrow */}
                <div className="flex justify-center -my-2 text-content-muted">
                  <svg className="w-4 h-4 text-content-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Milestone 2: Skill Recovery */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface border border-line transition-all hover:border-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center font-bold text-sm flex-shrink-0 border border-primary/20">
                    02
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-semibold text-content-heading">Skill Recovery</h4>
                      <span className="text-[11px] text-primary font-medium">In Progress</span>
                    </div>
                    <p className="text-xs text-content-body mt-0.5">
                      Structured clearance roadmap + foundational concepts
                    </p>
                  </div>
                </div>

                {/* Downward Connector Arrow */}
                <div className="flex justify-center -my-2 text-content-muted">
                  <svg className="w-4 h-4 text-content-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Milestone 3: Career Readiness */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface border border-line transition-all hover:border-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center font-bold text-sm flex-shrink-0 border border-accent/20">
                    03
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-semibold text-content-heading">Career Readiness</h4>
                      <span className="text-[11px] text-accent font-medium">Accelerated</span>
                    </div>
                    <p className="text-xs text-content-body mt-0.5">
                      Targeted coding, aptitude practice & mock rounds
                    </p>
                  </div>
                </div>

                {/* Downward Connector Arrow */}
                <div className="flex justify-center -my-2 text-content-muted">
                  <svg className="w-4 h-4 text-content-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Milestone 4: Placement Launch */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-green-50/70 border border-green-200 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-status-success flex items-center justify-center font-bold text-sm flex-shrink-0 border border-green-200">
                    04
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-900">Placement Launch</h4>
                      <span className="badge-success text-[10px]">Verified Ready</span>
                    </div>
                    <p className="text-xs text-content-body mt-0.5">
                      Verified candidate profile ready for campus recruitment
                    </p>
                  </div>
                </div>

              </div>

              {/* Progress Summary Pill */}
              <div className="mt-5 pt-4 border-t border-line">
                <ProgressBar value={78} label="Readiness Index" variant="accent" showPercentage />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — THE PROBLEM                                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
            The Current Reality
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight mt-1.5">
            Academic Arrears Shouldn't Define a Student's Career
          </h2>
          <p className="text-content-body text-base mt-3 leading-relaxed">
            Conventional placement systems treat backlog history as a career roadblock. We address the root issues so students can bounce back stronger.
          </p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Problem Card 1 */}
          <Card className="flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-status-error flex items-center justify-center mb-4 border border-red-100">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-content-heading mb-2">
                Academic Backlogs
              </h3>
              <p className="text-sm text-content-body leading-relaxed">
                Students struggle to recover from active arrears and stay on track without structured revision roadmaps.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line text-xs font-medium text-content-muted">
              Lack of subject-specific guidance
            </div>
          </Card>

          {/* Problem Card 2 */}
          <Card className="flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-status-warning flex items-center justify-center mb-4 border border-amber-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-content-heading mb-2">
                Skill Gaps
              </h3>
              <p className="text-sm text-content-body leading-relaxed">
                Clearing arrears does not always mean being industry-ready. Crucial practical and modern skills remain unaddressed.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line text-xs font-medium text-content-muted">
              Curriculum vs. hiring disconnect
            </div>
          </Card>

          {/* Problem Card 3 */}
          <Card className="flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4 border border-primary/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-content-heading mb-2">
                Placement Pressure
              </h3>
              <p className="text-sm text-content-body leading-relaxed">
                Students often lack structured preparation for aptitude tests, coding rounds, and technical interviews.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line text-xs font-medium text-content-muted">
              Overwhelmed by placement deadlines
            </div>
          </Card>

          {/* Problem Card 4 */}
          <Card className="flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-4 border border-accent/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-content-heading mb-2">
                Disconnected Prep
              </h3>
              <p className="text-sm text-content-body leading-relaxed">
                Academic performance, skills, and career preparation are tracked in separate silos without a unified roadmap.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line text-xs font-medium text-content-muted">
              Fragmented student effort
            </div>
          </Card>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — TWO STUDENT JOURNEYS                                         */}
      {/* ========================================================================= */}
      <section id="journeys" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-2">
            Tailored Career Roadmaps
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight mt-1.5">
            Two Starting Points. One Career Launch.
          </h2>
          <p className="text-content-body text-base mt-3 leading-relaxed">
            Every student begins from a unique scenario. Choose the dedicated track that matches your present status.
          </p>
        </div>

        {/* Two Large Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CARD 1: Recover & Launch (Active Arrears) */}
          <div className="bg-surface-card rounded-2xl border-2 border-line hover:border-primary/40 transition-all p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              {/* Badge & Track Title */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <span className="badge-warning">
                    Journey 1
                  </span>
                  <h3 className="text-2xl font-bold text-content-heading mt-2">
                    Recover & Launch
                  </h3>
                  <p className="text-sm text-content-muted mt-1">
                    For students with active academic arrears
                  </p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-status-warning flex items-center justify-center font-bold text-base border border-amber-200">
                  AR
                </div>
              </div>

              <p className="text-sm text-content-body leading-relaxed mb-6">
                A dual-focus schedule that allocates time for targeted backlog exam clearance while progressively building industry-standard technical skills.
              </p>

              {/* Visual Step Flow */}
              <div className="space-y-2.5 bg-surface rounded-xl p-4 border border-line mb-6">
                <div className="text-xs font-semibold text-content-heading uppercase tracking-wider mb-2">
                  Step-by-Step Flow:
                </div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-status-error flex items-center justify-center font-bold text-[10px]">1</span>
                  <span className="font-semibold text-content-heading">Active Arrears</span>
                  <span className="text-content-muted text-[11px]">— Initial diagnosis</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-status-warning flex items-center justify-center font-bold text-[10px]">2</span>
                  <span className="font-semibold text-content-heading">Identify Weak Subjects</span>
                  <span className="text-content-muted text-[11px]">— Syllabus prioritization</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-[10px]">3</span>
                  <span className="font-semibold text-content-heading">Recovery Plan</span>
                  <span className="text-content-muted text-[11px]">— Weekly study blocks</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-[10px]">4</span>
                  <span className="font-semibold text-content-heading">Skill Development</span>
                  <span className="text-content-muted text-[11px]">— Core technical skills</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-[10px]">5</span>
                  <span className="font-semibold text-content-heading">Placement Preparation</span>
                  <span className="text-content-muted text-[11px]">— Aptitude & coding</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-status-success font-bold">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center text-[10px]">✓</span>
                  <span>Placement Ready</span>
                  <span className="text-xs font-normal text-content-muted">— Eligible & confident</span>
                </div>
              </div>
            </div>

            {/* Card CTA */}
            <Link to="/register" className="w-full">
              <Button variant="primary" className="w-full justify-center">
                Explore Recovery Path
              </Button>
            </Link>
          </div>

          {/* CARD 2: Skill Up & Launch (Cleared Arrears) */}
          <div className="bg-surface-card rounded-2xl border-2 border-line hover:border-accent/40 transition-all p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              {/* Badge & Track Title */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <span className="badge-accent">
                    Journey 2
                  </span>
                  <h3 className="text-2xl font-bold text-content-heading mt-2">
                    Skill Up & Launch
                  </h3>
                  <p className="text-sm text-content-muted mt-1">
                    For students who have cleared arrears with skill gaps
                  </p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-cyan-50 text-accent flex items-center justify-center font-bold text-base border border-cyan-200">
                  SL
                </div>
              </div>

              <p className="text-sm text-content-body leading-relaxed mb-6">
                An accelerated curriculum focused strictly on closing technical stack gaps, competitive coding, and mock rounds to match target company profiles.
              </p>

              {/* Visual Step Flow */}
              <div className="space-y-2.5 bg-surface rounded-xl p-4 border border-line mb-6">
                <div className="text-xs font-semibold text-content-heading uppercase tracking-wider mb-2">
                  Step-by-Step Flow:
                </div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center font-bold text-[10px]">1</span>
                  <span className="font-semibold text-content-heading">Arrears Cleared</span>
                  <span className="text-content-muted text-[11px]">— Backlog hurdle passed</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-[10px]">2</span>
                  <span className="font-semibold text-content-heading">Skill Gap Analysis</span>
                  <span className="text-content-muted text-[11px]">— Benchmark with market</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-[10px]">3</span>
                  <span className="font-semibold text-content-heading">Personalized Learning</span>
                  <span className="text-content-muted text-[11px]">— Curated coding modules</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-[10px]">4</span>
                  <span className="font-semibold text-content-heading">Career Preparation</span>
                  <span className="text-content-muted text-[11px]">— Resume & project polish</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-content-body">
                  <span className="w-5 h-5 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-[10px]">5</span>
                  <span className="font-semibold text-content-heading">Placement Readiness</span>
                  <span className="text-content-muted text-[11px]">— Mock interview simulations</span>
                </div>
                <div className="pl-2.5 text-content-muted">↓</div>

                <div className="flex items-center gap-2.5 text-xs text-status-success font-bold">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center text-[10px]">✓</span>
                  <span>Placement Ready</span>
                  <span className="text-xs font-normal text-content-muted">— Day-1 job candidate</span>
                </div>
              </div>
            </div>

            {/* Card CTA */}
            <Link to="/register" className="w-full">
              <Button variant="accent" className="w-full justify-center">
                Explore Skill Path
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — HOW IT WORKS                                                 */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-2">
            The Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight mt-1.5">
            From Lag to Launch in 4 Steps
          </h2>
          <p className="text-content-body text-base mt-3 leading-relaxed">
            A clear, predictable progression framework designed to eliminate student confusion and deliver measurable career milestones.
          </p>
        </div>

        {/* 4 Numbered Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <Card className="relative hover:border-primary/40 transition-colors">
            <div className="text-3xl font-black text-primary/20 mb-3 tracking-tighter">
              01
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              Assess
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Understand academic performance, skills and career readiness through unified profile evaluation.
            </p>
          </Card>

          {/* Step 2 */}
          <Card className="relative hover:border-primary/40 transition-colors">
            <div className="text-3xl font-black text-primary/20 mb-3 tracking-tighter">
              02
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              Personalize
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Build a personalized path based on the student's current gaps, active arrears, and target dream roles.
            </p>
          </Card>

          {/* Step 3 */}
          <Card className="relative hover:border-accent/40 transition-colors">
            <div className="text-3xl font-black text-accent/30 mb-3 tracking-tighter">
              03
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              Develop
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Strengthen subjects, technical skills and placement skills with milestone-based exercises and study roadmaps.
            </p>
          </Card>

          {/* Step 4 */}
          <Card className="relative hover:border-status-success/40 transition-colors">
            <div className="text-3xl font-black text-status-success/20 mb-3 tracking-tighter">
              04
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              Launch
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Track readiness and prepare for placement opportunities with live mock interviews and certified scorecards.
            </p>
          </Card>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — KEY FEATURES                                                 */}
      {/* ========================================================================= */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-2">
            Integrated Platform Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight mt-1.5">
            Everything Students Need to Become Placement-Ready
          </h2>
          <p className="text-content-body text-base mt-3 leading-relaxed">
            Essential tools that combine academic turnaround and modern industry hiring preparation in a single system.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <Card className="hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-status-warning flex items-center justify-center mb-4 border border-amber-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              1. Academic Recovery
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Identify weak subjects and stay focused on recovery with organized exam schedules and focused question banks.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-4 border border-accent/20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              2. Skill Gap Identification
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Understand which technical and career skills need improvement against actual hiring criteria for top tech companies.
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4 border border-primary/20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              3. Personalized Learning Path
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Follow a structured learning journey based on individual needs, balancing study hours between backlogs and tech stacks.
            </p>
          </Card>

          {/* Feature 4 */}
          <Card className="hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4 border border-primary/20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              4. Placement Preparation
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Build aptitude, coding, communication and interview readiness through timed challenges and simulation tests.
            </p>
          </Card>

          {/* Feature 5 */}
          <Card className="hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-4 border border-accent/20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              5. Progress Tracking
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Track learning progress and placement readiness in one place with visible scorecards and weekly recovery velocity.
            </p>
          </Card>

          {/* Feature 6 */}
          <Card className="hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-status-success flex items-center justify-center mb-4 border border-green-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-content-heading mb-2">
              6. Employability Profile
            </h3>
            <p className="text-sm text-content-body leading-relaxed">
              Bring academics, skills, certifications and readiness together to showcase your genuine competency to recruiters.
            </p>
          </Card>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — PLACEMENT READINESS VISUAL (Sample Dashboard)                 */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-accent mb-2">
            Sample readiness view
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight mt-1.5">
            Placement Readiness Dashboard
          </h2>
          <p className="text-sm sm:text-base text-content-body mt-2">
            A comprehensive overview showing how academic recovery and technical skill benchmarks combine into overall employability.
          </p>
        </div>

        {/* Dashboard Preview Card */}
        <div className="bg-surface-card rounded-2xl border border-line shadow-md p-6 sm:p-10 space-y-8">
          
          {/* Top Row: Overall Score & Status */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-line">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                Candidate Readiness Evaluation
              </span>
              <h3 className="text-2xl font-bold text-content-heading mt-0.5">
                Overall Placement Readiness
              </h3>
              <p className="text-xs text-content-muted mt-1">
                Based on simulated milestones across academics and interview competencies.
              </p>
            </div>

            {/* Score Highlight Box */}
            <div className="flex items-baseline gap-2 bg-primary-light px-6 py-3.5 rounded-2xl border border-primary/20">
              <span className="text-3xl sm:text-4xl font-black text-primary tabular-nums">
                78%
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Placement Ready
              </span>
            </div>
          </div>

          {/* Sub-Progress Bars Breakdown */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold text-content-heading uppercase tracking-wider">
              Readiness Breakdown By Competency:
            </h4>

            {/* Academic Recovery: 85% */}
            <ProgressBar
              value={85}
              label="Academic Recovery"
              variant="primary"
              showPercentage
            />

            {/* Technical Skills: 72% */}
            <ProgressBar
              value={72}
              label="Technical Skills"
              variant="accent"
              showPercentage
            />

            {/* Aptitude: 80% */}
            <ProgressBar
              value={80}
              label="Aptitude & Problem Solving"
              variant="primary"
              showPercentage
            />

            {/* Communication: 68% */}
            <ProgressBar
              value={68}
              label="Communication & Soft Skills"
              variant="accent"
              showPercentage
            />

            {/* Interview Readiness: 75% */}
            <ProgressBar
              value={75}
              label="Interview Readiness"
              variant="primary"
              showPercentage
            />
          </div>

          {/* Bottom Note */}
          <div className="pt-4 border-t border-line flex items-center justify-between text-xs text-content-muted">
            <span>* Static demonstration preview. Data is simulated for hackathon presentation.</span>
            <span className="font-semibold text-primary">Lag to Launch Scoring Engine</span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8 — WHY LAG TO LAUNCH                                            */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-2">
            The Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight mt-1.5">
            One Platform. One Clear Career Journey.
          </h2>
          <p className="text-content-body text-base mt-3 leading-relaxed">
            See how Lag to Launch replaces fragmented academic recovery with unified, career-ready preparation.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Traditional Approach Card */}
          <div className="bg-surface rounded-2xl border border-line p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-content-heading">
                  Traditional Approach
                </h3>
              </div>
              <p className="text-sm text-content-muted mb-6">
                Conventional campus preparation leaves students isolated with generic syllabi.
              </p>

              <ul className="space-y-4 text-sm text-content-body">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-status-error flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✕</span>
                  <span>Separate academic tracking that ignores job skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-status-error flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✕</span>
                  <span>Generic learning paths that don't address personal weak points</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-status-error flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✕</span>
                  <span>Static progress reports with no career placement context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-status-error flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✕</span>
                  <span>Limited career guidance until final semester rush</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-status-error flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✕</span>
                  <span>Focus mainly on passing exams, not being hireable</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-line text-xs font-semibold text-content-muted">
              Result: High backlog stress & low placement confidence
            </div>
          </div>

          {/* Lag to Launch Card */}
          <div className="bg-surface-card rounded-2xl border-2 border-primary/40 p-6 sm:p-8 flex flex-col justify-between shadow-md relative">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-content-heading">
                  Lag to Launch
                </h3>
              </div>
              <p className="text-sm text-primary font-medium mb-6">
                Unified system connecting arrear clearance with genuine industry employability.
              </p>

              <ul className="space-y-4 text-sm text-content-heading">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-content-heading">Academic + Skills + Career</strong> unified in one timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-content-heading">Personalized learning journey</strong> adapted to active backlogs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-content-heading">Dynamic readiness tracking</strong> with quantitative benchmarks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-content-heading">Career-focused preparation</strong> for target company profiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-content-heading">Employability-oriented profile</strong> ready for campus interviews</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-line text-xs font-semibold text-primary">
              Result: Clear recovery roadmap & day-1 placement readiness
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9 — FINAL CTA                                                    */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-surface-card rounded-3xl border border-line p-8 sm:p-14 text-center shadow-lg relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-accent-light opacity-60 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-primary-light opacity-60 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <span className="badge-primary">
              Start Your Recovery & Placement Journey
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-content-heading tracking-tight leading-tight">
              Your Starting Point May Be Different. <br />
              Your Launch Can Still Be the Same.
            </h2>

            <p className="text-base sm:text-lg text-content-body leading-relaxed">
              Whether you're recovering from arrears or closing your skill gaps, take the next step toward becoming placement-ready.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/register" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-sm">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Login
                </Button>
              </Link>
            </div>

            <p className="text-xs text-content-muted pt-2">
              No credit card or setup needed • Hackathon Prototype Preview
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}
