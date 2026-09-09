import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import {
  Compass,
  GraduationCap,
  Target,
  BookOpen,
  Briefcase,
  Rocket,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

/**
 * StudentPathPage Component
 * 
 * Part 4 — Screen 4: Personalized Student Path
 * Route: /student-path
 * 
 * Demonstrates the dual student journey:
 * 1. Recover & Launch (Active Arrears)
 * 2. Skill Up & Launch (Cleared Arrears)
 * 
 * Strictly adheres to the Lag to Launch UI Design System.
 */
export default function StudentPathPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('recover'); // 'recover' or 'skill'

  const fullJourneyStages = [
    { id: 1, title: 'Starting Point', desc: 'Diagnostic evaluation completed', status: 'completed' },
    { id: 2, title: 'Academic Recovery / Skill Gap', desc: 'Arrear clearance & gap identification', status: 'completed' },
    { id: 3, title: 'Skill Development', desc: 'Target tech stack & problem solving', status: 'current' },
    { id: 4, title: 'Placement Preparation', desc: 'Mock tests, interviews & aptitude', status: 'upcoming' },
    { id: 5, title: 'Career Launch', desc: 'Campus hiring drives & verified profile', status: 'upcoming' },
  ];

  return (
    <DashboardLayout title="My Journey">
      <div className="space-y-8 pb-8 font-sans">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
                AI Roadmap Active
              </span>
              <span className="text-xs text-content-muted">Path: Dual Transition Model</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Your Personalized Student Path
            </h2>
            <p className="text-sm text-content-muted leading-relaxed">
              Here’s your suggested journey from your current starting point to career launch.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard Overview
              </Button>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LARGE OVERALL JOURNEY FLOW                                                */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-line">
            <div>
              <h3 className="text-lg font-bold text-content-heading">
                Placement Transition Roadmap
              </h3>
              <p className="text-xs text-content-muted">Stage 3 of 5 currently active</p>
            </div>
            <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full border border-primary/20">
              60% Roadmap Progress
            </span>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden md:flex items-start justify-between relative pt-2">
            {fullJourneyStages.map((stg, idx) => {
              const isDone = stg.status === 'completed';
              const isCur = stg.status === 'current';

              return (
                <div key={stg.id} className="flex-1 relative flex flex-col items-center text-center px-2">
                  {/* Connector line */}
                  {idx < fullJourneyStages.length - 1 && (
                    <div
                      className={`absolute top-4 left-1/2 w-full h-0.5 -z-0
                        ${isDone ? 'bg-status-success' : isCur ? 'bg-primary/40' : 'bg-line'}
                      `}
                    />
                  )}

                  {/* Node Circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs relative z-10 shadow-xs
                      ${isDone ? 'bg-status-success text-white ring-4 ring-green-50' : ''}
                      ${isCur ? 'bg-primary text-white ring-4 ring-primary-light' : ''}
                      ${stg.status === 'upcoming' ? 'bg-surface border border-line text-content-muted' : ''}
                    `}
                  >
                    {isDone ? <CheckCircle2 className="w-4 h-4" /> : stg.id}
                  </div>

                  <h5 className={`text-xs font-bold mt-2.5 leading-snug
                    ${isCur ? 'text-primary' : isDone ? 'text-content-heading' : 'text-content-muted'}
                  `}>
                    {stg.title}
                  </h5>

                  <p className="text-[11px] text-content-muted mt-0.5 max-w-[130px] leading-tight">
                    {stg.desc}
                  </p>

                  {isCur && (
                    <span className="mt-1.5 text-[10px] font-bold text-primary uppercase tracking-wider bg-primary-light px-2 py-0.5 rounded-full">
                      Current Stage
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Stepper */}
          <div className="md:hidden space-y-3">
            {fullJourneyStages.map((stg) => (
              <div
                key={stg.id}
                className={`p-3 rounded-xl border flex items-center justify-between text-xs
                  ${stg.status === 'current' ? 'bg-primary-light/40 border-primary/40 font-semibold' : 'bg-surface border-line'}
                `}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                      ${stg.status === 'completed' ? 'bg-status-success text-white' : ''}
                      ${stg.status === 'current' ? 'bg-primary text-white' : ''}
                      ${stg.status === 'upcoming' ? 'bg-white border border-line text-content-muted' : ''}
                    `}
                  >
                    {stg.status === 'completed' ? '✓' : stg.id}
                  </div>
                  <div>
                    <span className={stg.status === 'current' ? 'text-primary' : 'text-content-heading'}>
                      {stg.title}
                    </span>
                    <p className="text-[10px] text-content-muted">{stg.desc}</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-semibold text-content-muted">
                  {stg.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TWO LAUNCH PATHS COMPARISON & SELECTION                                    */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-content-heading">
              Two Tailored Launch Paths
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              Select your path to view its step-by-step milestone acceleration sequence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PATH 1: RECOVER & LAUNCH (Active Arrears - Orange #F59E0B) */}
            <div
              className={`bg-surface-card rounded-xl border-2 p-6 transition-all flex flex-col justify-between shadow-xs
                ${activeTab === 'recover' ? 'border-status-warning shadow-sm ring-2 ring-amber-100' : 'border-line hover:border-slate-300'}
              `}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-status-warning border border-amber-200">
                    Track 1 • Arrears to Placement
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-status-warning border border-amber-200 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-content-heading">
                    Recover & Launch
                  </h4>
                  <p className="text-xs text-content-muted mt-1 leading-relaxed">
                    Designed for students with active academic arrears who need an exam clearance strategy coupled with placement preparation.
                  </p>
                </div>

                {/* Flow Diagram */}
                <div className="p-4 rounded-xl bg-surface border border-line space-y-2.5 text-xs font-semibold">
                  <div className="text-status-warning flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold">1</span>
                    Active Arrears Diagnostic
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="text-content-heading flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold">2</span>
                    Academic Recovery Roadmap
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="text-primary flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center text-[10px] font-bold">3</span>
                    Skill Development
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="text-content-heading flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold">4</span>
                    Placement Preparation
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="text-status-success flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center text-[10px] font-bold">✓</span>
                    Career Launch
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <Link to="/academic-recovery" className="w-full">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center text-xs"
                  >
                    Enter Academic Recovery Path
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* PATH 2: SKILL UP & LAUNCH (Cleared Arrears - Green #16A34A) */}
            <div
              className={`bg-surface-card rounded-xl border-2 p-6 transition-all flex flex-col justify-between shadow-xs
                ${activeTab === 'skill' ? 'border-status-success shadow-sm ring-2 ring-green-100' : 'border-line hover:border-slate-300'}
              `}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-status-success border border-green-200">
                    Track 2 • Employability Fast-Track
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-green-50 text-status-success border border-green-200 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-content-heading">
                    Skill Up & Launch
                  </h4>
                  <p className="text-xs text-content-muted mt-1 leading-relaxed">
                    Tailored for students who have cleared arrears but need to address technical skill gaps and accelerate placement readiness.
                  </p>
                </div>

                {/* Flow Diagram */}
                <div className="p-4 rounded-xl bg-surface border border-line space-y-2.5 text-xs font-semibold">
                  <div className="text-status-success flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-[10px] font-bold">1</span>
                    Arrears Cleared
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="text-primary flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center text-[10px] font-bold">2</span>
                    Skill Gap Analysis
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="text-content-heading flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold">3</span>
                    Personalized Learning Plan
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="text-content-heading flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold">4</span>
                    Placement Preparation
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="text-status-success flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center text-[10px] font-bold">✓</span>
                    Career Launch
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <Link to="/skill-gap" className="w-full">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center text-xs"
                  >
                    Enter Skill Gap Analysis
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACTION CTA                                                                */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-content-heading tracking-tight">
              Ready to Advance to Your Next Milestone?
            </h3>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              Take the placement readiness assessment or jump directly into your active learning plan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link to="/placement-assessment" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto justify-center">
                Start Assessment
              </Button>
            </Link>
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto justify-center">
                Dashboard Overview
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
