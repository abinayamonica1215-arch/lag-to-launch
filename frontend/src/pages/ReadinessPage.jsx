import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import { useUsername } from '../utils/user';
import {
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Code2,
  Brain,
  MessageSquare,
  UserCheck,
  User,
  Compass,
  Briefcase,
} from 'lucide-react';

/**
 * ReadinessPage Component
 * 
 * Part 3 — Placement Readiness UI Prototype
 * Route: /readiness
 * 
 * Strictly adheres to the Lag to Launch UI Design System:
 * - Primary Blue: #2563EB
 * - Success Green: #16A34A
 * - Warning Orange: #F59E0B
 * - Background: #F8FAFC, Card: #FFFFFF
 * - Text: Main (#0F172A), Secondary (#64748B)
 * - Border: #E2E8F0
 * - Inter font throughout
 */
export default function ReadinessPage() {
  const [username] = useUsername();

  const readinessBreakdown = [
    { title: 'Academic Recovery', score: 85, icon: GraduationCap, variant: 'primary' },
    { title: 'Technical Skills', score: 72, icon: Code2, variant: 'primary' },
    { title: 'Aptitude', score: 80, icon: Brain, variant: 'primary' },
    { title: 'Communication', score: 68, icon: MessageSquare, variant: 'warning' },
    { title: 'Interview Readiness', score: 75, icon: UserCheck, variant: 'primary' },
    { title: 'Career Profile', score: 82, icon: User, variant: 'primary' },
  ];

  const strengths = [
    'Strong Aptitude Performance',
    'Good Academic Recovery Progress',
    'Consistent Learning Activity',
  ];

  const focusAreas = [
    { title: 'Communication', current: 68, target: 80, gap: 12 },
    { title: 'Technical Skills', current: 72, target: 85, gap: 13 },
    { title: 'Interview Readiness', current: 75, target: 85, gap: 10 },
  ];

  const journeyStages = [
    { id: 1, title: 'Academic Recovery', status: 'completed' },
    { id: 2, title: 'Skill Development', status: 'completed' },
    { id: 3, title: 'Placement Preparation', status: 'current' },
    { id: 4, title: 'Interview Readiness', status: 'upcoming' },
    { id: 5, title: 'Career Launch', status: 'upcoming' },
  ];

  const nextActions = [
    { id: 1, text: 'Practice Data Structures', to: '/skill-gap' },
    { id: 2, text: 'Improve Communication', to: '/placement-prep' },
    { id: 3, text: 'Complete Aptitude Mock Test', to: '/placement-prep' },
    { id: 4, text: 'Practice HR Interview Questions', to: '/placement-prep' },
    { id: 5, text: 'Update Career Profile', to: '/career-profile' },
  ];

  return (
    <DashboardLayout title="Placement Readiness">
      <div className="space-y-8 pb-8 font-sans">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
                Readiness Overview
              </span>
              <span className="text-xs text-content-muted">Candidate: {username} • Diagnostic Cycle: Semester 7</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Placement Readiness
            </h2>
            <p className="text-sm text-content-muted leading-relaxed">
              Understand how prepared you are for your career launch.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/placement-prep">
              <Button variant="primary" size="sm">
                Practice for Placement
              </Button>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OVERALL SCORE FEATURED CARD                                              */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                Candidate Readiness Metric
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-status-success border border-green-200">
                On Track
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-content-heading">
              Placement Readiness: 76%
            </h3>
            <p className="text-sm text-content-muted leading-relaxed">
              “{username}, you are making steady progress toward becoming placement-ready.”
            </p>
          </div>

          <div className="flex items-center gap-4 bg-primary-light p-5 sm:p-6 rounded-xl border border-primary/20 self-stretch sm:self-auto justify-center">
            <div className="text-center">
              <span className="text-4xl sm:text-5xl font-bold text-primary tabular-nums block">
                76%
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mt-1 block">
                Overall Readiness
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* READINESS BREAKDOWN (6 Metrics)                                          */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
          <div className="pb-3 border-b border-line">
            <h3 className="text-lg font-bold text-content-heading">
              Readiness Breakdown
            </h3>
            <p className="text-xs text-content-muted">Detailed scoring across all six evaluation pillars</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
            {readinessBreakdown.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-surface border border-line space-y-2 hover:border-primary/40 transition-colors"
                >
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-content-heading flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary" />
                      {item.title}
                    </span>
                    <span className="tabular-nums font-bold text-content-heading">
                      {item.score}%
                    </span>
                  </div>
                  <ProgressBar value={item.score} variant={item.variant} />
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STRENGTHS & FOCUS AREAS SPLIT                                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* STRENGTHS (Success Green #16A34A) */}
          <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="pb-3 border-b border-line flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-content-heading">
                    Strengths
                  </h3>
                  <p className="text-xs text-content-muted">High-performing competencies</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-status-success border border-green-200">
                  Verified
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                {strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-green-50/50 border border-green-200 flex items-center gap-3 text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-status-success flex-shrink-0" />
                    <span className="font-semibold text-content-heading">
                      {str}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-content-muted pt-2 border-t border-line">
              Continue weekly mock evaluations to maintain these top-tier readiness scores.
            </p>
          </div>

          {/* FOCUS AREAS (Warning Orange #F59E0B) */}
          <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="pb-3 border-b border-line flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-content-heading">
                    Focus Areas
                  </h3>
                  <p className="text-xs text-content-muted">High-impact improvement targets</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-status-warning border border-amber-200">
                  Priority
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-3 rounded-xl bg-amber-50/50 border border-amber-200 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-status-warning flex-shrink-0" />
                      <span className="font-semibold text-content-heading">
                        {area.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-right">
                      <span className="text-content-muted">Current: <strong>{area.current}%</strong></span>
                      <span className="text-primary font-semibold">Target: {area.target}%</span>
                      <span className="font-bold text-status-warning ml-1">+{area.gap}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-content-muted pt-2 border-t border-line">
              Closing these 3 target gaps elevates overall candidate readiness above 85%.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* READINESS JOURNEY STAGES (Timeline)                                      */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-line">
            <div>
              <h3 className="text-lg font-bold text-content-heading">
                Readiness Journey
              </h3>
              <p className="text-xs text-content-muted">End-to-end progression milestones</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
              2 of 5 stages completed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
            {journeyStages.map((stg) => {
              const isCompleted = stg.status === 'completed';
              const isCurrent = stg.status === 'current';
              const isUpcoming = stg.status === 'upcoming';

              return (
                <div
                  key={stg.id}
                  className={`p-3.5 rounded-xl border text-center flex flex-col items-center justify-between space-y-2
                    ${isCompleted ? 'bg-green-50/60 border-green-200' : ''}
                    ${isCurrent ? 'bg-primary-light border-primary/30 ring-2 ring-primary/20' : ''}
                    ${isUpcoming ? 'bg-surface border-line' : ''}
                  `}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                      ${isCompleted ? 'bg-status-success text-white' : ''}
                      ${isCurrent ? 'bg-primary text-white' : ''}
                      ${isUpcoming ? 'bg-white border border-line text-content-muted' : ''}
                    `}
                  >
                    {isCompleted ? '✓' : stg.id}
                  </div>

                  <h5 className={`text-xs font-bold leading-tight
                    ${isCurrent ? 'text-primary' : isCompleted ? 'text-content-heading' : 'text-content-muted'}
                  `}>
                    {stg.title}
                  </h5>

                  <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full
                    ${isCompleted ? 'bg-white text-status-success border border-green-200' : ''}
                    ${isCurrent ? 'bg-primary text-white' : ''}
                    ${isUpcoming ? 'text-content-muted' : ''}
                  `}>
                    {stg.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEXT ACTIONS SECTION                                                      */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
          <div className="pb-3 border-b border-line">
            <h3 className="text-lg font-bold text-content-heading">
              Next Actions
            </h3>
            <p className="text-xs text-content-muted">Recommended priority tasks to drive the greatest score growth</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {nextActions.map((act) => (
              <Link
                key={act.id}
                to={act.to}
                className="p-3.5 rounded-xl bg-surface border border-line hover:border-primary/50 transition-colors flex items-center justify-between text-xs font-semibold text-content-heading group"
              >
                <span>{act.text}</span>
                <ArrowRight className="w-3.5 h-3.5 text-content-muted group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL CTA                                                                 */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-content-heading tracking-tight">
              Keep Moving Forward.
            </h3>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              Your readiness score is a snapshot of your current progress. Continue improving each area to move closer to your career launch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link to="/learning-plan" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto justify-center">
                Continue Learning
              </Button>
            </Link>
            <Link to="/placement-prep" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto justify-center">
                Practice for Placement
              </Button>
            </Link>
            <Link to="/career-profile" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto justify-center">
                View Career Profile
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
