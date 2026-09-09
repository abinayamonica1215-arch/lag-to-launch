import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import { useUsername } from '../utils/user';
import {
  CheckCircle2,
  Circle,
  Clock,
  ArrowRight,
  BookOpen,
  Compass,
  Briefcase,
  User,
  GraduationCap,
  Target,
  Sparkles,
  Code2,
  Award,
  TrendingUp,
  PlayCircle,
  FileCheck,
} from 'lucide-react';

/**
 * DashboardPage Component
 * 
 * Step 7 — Detailed Student Career Acceleration Dashboard
 * 
 * Strictly follows the Lag to Launch visual identity:
 * - Primary: Deep Indigo (#4F46E5), Dark (#3730A3), Light (#EEF2FF)
 * - Accent: Cyan (#06B6D4), Light (#ECFEFF)
 * - Main Background: (#F8FAFC), Card Surface: (#FFFFFF)
 * - Text: Heading (#0F172A), Body (#475569), Muted (#64748B)
 * - Border: (#E2E8F0)
 * - Status: Success (#16A34A), Warning (#F59E0B), Error (#DC2626)
 * 
 * FRONTEND DEMO ONLY: All student statistics, streaks, and progress items are sample data.
 */
export default function DashboardPage() {
  const [username] = useUsername();
  const [selectedLaunchPath, setSelectedLaunchPath] = useState('recover');

  // Static Journey Stages Data
  const journeySteps = [
    { id: 1, title: 'Starting Point', status: 'completed', desc: 'Arrear diagnostic completed' },
    { id: 2, title: 'Academic Recovery / Skill Gap', status: 'completed', desc: 'Subject clearance roadmap active' },
    { id: 3, title: 'Skill Development', status: 'current', desc: 'Core tech stack & DSA modules' },
    { id: 4, title: 'Placement Preparation', status: 'upcoming', desc: 'Mock tests & company rounds' },
    { id: 5, title: 'Career Launch', status: 'upcoming', desc: 'Verified placement profile' },
  ];

  // Static Continue Learning Cards Data
  const learningCards = [
    {
      id: 1,
      title: 'Python Fundamentals',
      category: 'Technical Skill',
      progress: 80,
      status: 'In Progress',
      variant: 'primary',
      icon: Code2,
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      category: 'Technical Skill',
      progress: 65,
      status: 'In Progress',
      variant: 'accent',
      icon: Target,
    },
    {
      id: 3,
      title: 'Quantitative Aptitude',
      category: 'Placement Preparation',
      progress: 45,
      status: 'Needs Practice',
      variant: 'warning',
      icon: BrainIcon,
    },
  ];

  // Static Quick Actions Data strictly per Part 6
  const quickActions = [
    {
      id: 'continue',
      title: 'Continue Learning',
      description: 'Pick up where you left off.',
      icon: PlayCircle,
      iconColor: 'text-primary bg-primary-light border-primary/20',
      to: '/learning-plan',
    },
    {
      id: 'journey',
      title: 'View My Journey',
      description: 'Track your career progress.',
      icon: Compass,
      iconColor: 'text-primary bg-primary-light border-primary/20',
      to: '/student-path',
    },
    {
      id: 'practice',
      title: 'Practice for Placement',
      description: 'Improve aptitude and interview skills.',
      icon: Briefcase,
      iconColor: 'text-status-success bg-green-50 border-green-200',
      to: '/placement-prep',
    },
    {
      id: 'profile',
      title: 'Update Career Profile',
      description: 'Keep your employability profile updated.',
      icon: User,
      iconColor: 'text-status-warning bg-amber-50 border-amber-200',
      to: '/career-profile',
    },
  ];

  // Static Recent Activity Data
  const recentActivities = [
    {
      id: 1,
      title: 'Completed Python Fundamentals',
      timestamp: 'Today',
      icon: Code2,
      badge: 'Completed',
      badgeClass: 'badge-success',
    },
    {
      id: 2,
      title: 'Updated Technical Skills',
      timestamp: 'Today',
      icon: User,
      badge: 'Profile',
      badgeClass: 'badge-primary',
    },
    {
      id: 3,
      title: 'Completed Aptitude Practice',
      timestamp: 'Yesterday',
      icon: Target,
      badge: 'Assessment',
      badgeClass: 'badge-accent',
    },
    {
      id: 4,
      title: 'Added a Certification',
      timestamp: '2 days ago',
      icon: Award,
      badge: 'Verified',
      badgeClass: 'badge-primary',
    },
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-8 sm:space-y-10 pb-6">
        
        {/* ========================================================================= */}
        {/* SECTION 1 — DASHBOARD WELCOME HEADER                                     */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-content-heading tracking-tight">
              Welcome back, {username}! 👋
            </h2>
            <p className="text-sm text-content-body">
              Let’s keep moving from lag to launch.
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <span className="badge-primary flex items-center gap-2 py-1.5 px-3.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-semibold text-xs">Placement Journey Active</span>
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2 & 8 — READINESS CARD & CAREER SNAPSHOT                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* SECTION 2: OVERALL READINESS CARD (8 cols on desktop) */}
          <div className="lg:col-span-8 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-6">
            
            {/* Header with Title and Large Score */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-line">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                  Comprehensive Candidate Evaluation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-content-heading mt-0.5">
                  Your Placement Readiness
                </h3>
              </div>

              {/* Large Score Indicator */}
              <div className="flex items-baseline gap-2.5 bg-primary-light/80 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-primary/20">
                <span className="text-3xl sm:text-4xl font-black text-primary tabular-nums">
                  76%
                </span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Overall Readiness
                </span>
              </div>
            </div>

            {/* 4 Categorized Sub-Progress Indicators */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Academic Recovery — 85% */}
                <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-content-heading">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-primary" />
                      Academic Recovery
                    </span>
                    <span className="tabular-nums font-bold text-primary">85%</span>
                  </div>
                  <ProgressBar value={85} variant="primary" />
                </div>

                {/* Technical Skills — 72% */}
                <Link
                  to="/skill-gap"
                  className="p-3.5 rounded-xl bg-surface border border-line hover:border-accent/60 transition-colors space-y-2 group block"
                  title="View Skill Gap Analysis"
                >
                  <div className="flex justify-between items-center text-xs font-semibold text-content-heading group-hover:text-accent transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-accent" />
                      Technical Skills
                    </span>
                    <span className="tabular-nums font-bold text-accent">72%</span>
                  </div>
                  <ProgressBar value={72} variant="accent" />
                </Link>

                {/* Aptitude — 80% */}
                <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-content-heading">
                    <span className="flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-primary" />
                      Aptitude & Reasoning
                    </span>
                    <span className="tabular-nums font-bold text-primary">80%</span>
                  </div>
                  <ProgressBar value={80} variant="primary" />
                </div>

                {/* Communication — 68% */}
                <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-content-heading">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-accent" />
                      Communication Skills
                    </span>
                    <span className="tabular-nums font-bold text-accent">68%</span>
                  </div>
                  <ProgressBar value={68} variant="accent" />
                </div>

              </div>
            </div>

            {/* Short Guidance Message & CTA Row */}
            <div className="pt-4 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-xs text-content-body max-w-lg leading-relaxed">
                You’re making steady progress. Focus on technical skills and communication to improve your readiness.
              </p>

              <Link to="/readiness">
                <Button
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap"
                >
                  View Readiness
                </Button>
              </Link>
            </div>

          </div>

          {/* SECTION 8: CAREER SNAPSHOT (4 cols on desktop) */}
          <div className="lg:col-span-4 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-5">
            <div>
              <div className="flex justify-between items-start mb-3 pb-3 border-b border-line">
                <div>
                  <h3 className="text-lg font-bold text-content-heading">
                    Career Snapshot
                  </h3>
                  <p className="text-xs text-content-muted">Target career profile</p>
                </div>
                <span className="badge-primary text-[10px]">
                  Preparing
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                {/* Target Role */}
                <div>
                  <span className="font-semibold text-content-muted uppercase tracking-wider text-[10px] block mb-1">
                    Target Role
                  </span>
                  <div className="font-bold text-sm text-content-heading flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>Software Developer</span>
                  </div>
                </div>

                {/* Technical Skills Pills */}
                <div>
                  <span className="font-semibold text-content-muted uppercase tracking-wider text-[10px] block mb-1.5">
                    Core Technical Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Java', 'SQL', 'Data Structures'].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-surface border border-line text-[11px] font-medium text-content-body"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-surface border border-line text-center">
                    <span className="text-base font-black text-content-heading block">3</span>
                    <span className="text-[11px] text-content-muted">Certifications</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface border border-line text-center">
                    <span className="text-base font-black text-content-heading block">2</span>
                    <span className="text-[11px] text-content-muted">Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Snapshot Button */}
            <div className="pt-2">
              <Link to="/career-profile" className="w-full block">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  View Career Profile
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 3 — YOUR JOURNEY (5 Steps: Desktop Horizontal / Mobile Vertical) */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs space-y-6">
          
          {/* Header & Stage Badges */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-line">
            <div>
              <h3 className="text-xl font-bold text-content-heading">
                Your Journey
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Track your progress from your current starting point to career launch.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="badge-primary font-semibold text-xs">
                Stage 3 of 5
              </span>
              <span className="badge-accent font-semibold text-xs">
                60% Journey Progress
              </span>
            </div>
          </div>

          {/* Desktop Horizontal Stepper (hidden on small mobile) */}
          <div className="hidden md:flex items-start justify-between relative pt-2">
            {journeySteps.map((step, index) => {
              const isCompleted = step.status === 'completed';
              const isCurrent = step.status === 'current';
              const isUpcoming = step.status === 'upcoming';

              return (
                <div key={step.id} className="flex-1 relative flex flex-col items-center text-center px-2">
                  
                  {/* Horizontal Connector Line (except for the last item) */}
                  {index < journeySteps.length - 1 && (
                    <div
                      className={`absolute top-4 left-1/2 w-full h-0.5 -z-0 transition-colors
                        ${isCompleted ? 'bg-status-success' : isCurrent ? 'bg-primary/40' : 'bg-line'}
                      `}
                    />
                  )}

                  {/* Node Circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs relative z-10 transition-all shadow-xs
                      ${isCompleted ? 'bg-status-success text-white ring-4 ring-green-50' : ''}
                      ${isCurrent ? 'bg-primary text-white ring-4 ring-primary-light ring-offset-1' : ''}
                      ${isUpcoming ? 'bg-surface border-2 border-line text-content-muted' : ''}
                    `}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      <span>{step.id}</span>
                    )}
                  </div>

                  {/* Step Title */}
                  <h4
                    className={`text-xs font-bold mt-2.5 leading-snug
                      ${isCurrent ? 'text-primary' : isCompleted ? 'text-content-heading' : 'text-content-muted'}
                    `}
                  >
                    {step.title}
                  </h4>

                  {/* Step Subtitle */}
                  <p className="text-[11px] text-content-muted mt-0.5 max-w-[140px] leading-tight">
                    {step.desc}
                  </p>

                  {/* Current Active Badge */}
                  {isCurrent && (
                    <span className="mt-1.5 inline-block text-[10px] font-bold text-primary uppercase tracking-wider bg-primary-light px-2 py-0.5 rounded-full">
                      Current Stage
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Stepper (shown only on mobile) */}
          <div className="md:hidden space-y-4">
            {journeySteps.map((step) => {
              const isCompleted = step.status === 'completed';
              const isCurrent = step.status === 'current';

              return (
                <div
                  key={step.id}
                  className={`flex items-start gap-3.5 p-3 rounded-xl border transition-colors
                    ${isCurrent ? 'bg-primary-light/40 border-primary/40' : 'bg-surface border-line'}
                  `}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5
                      ${isCompleted ? 'bg-status-success text-white' : ''}
                      ${isCurrent ? 'bg-primary text-white ring-2 ring-primary-light' : ''}
                      ${!isCompleted && !isCurrent ? 'bg-white border border-line text-content-muted' : ''}
                    `}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.id}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4
                        className={`text-xs font-bold
                          ${isCurrent ? 'text-primary' : 'text-content-heading'}
                        `}
                      >
                        {step.title}
                      </h4>
                      {isCurrent && (
                        <span className="text-[10px] font-bold text-primary bg-white px-2 py-0.5 rounded-full border border-primary/20">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-content-muted mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 4 — TWO LAUNCH PATHS                                              */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-content-heading">
              Choose Your Launch Path
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              Your journey can begin from different starting points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* CARD 1: Recover & Launch */}
            <div
              className={`bg-surface-card rounded-2xl border-2 p-6 transition-all flex flex-col justify-between shadow-xs
                ${selectedLaunchPath === 'recover' ? 'border-primary shadow-sm' : 'border-line hover:border-slate-300'}
              `}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="badge-warning text-[10px]">
                    Track 1
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-status-warning flex items-center justify-center border border-amber-200">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-content-heading">
                  Recover & Launch
                </h4>
                <p className="text-xs text-content-body mt-1.5 leading-relaxed">
                  For students with active academic arrears who want to recover academically and prepare for placements.
                </p>

                {/* Steps Visual Flow */}
                <div className="my-5 p-3.5 rounded-xl bg-surface border border-line space-y-2 text-xs">
                  <div className="font-semibold text-content-heading flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-amber-100 text-status-warning flex items-center justify-center text-[10px] font-bold">1</span>
                    Academic Recovery
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="font-semibold text-content-heading flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary-light text-primary flex items-center justify-center text-[10px] font-bold">2</span>
                    Skill Development
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="font-semibold text-content-heading flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary-light text-primary flex items-center justify-center text-[10px] font-bold">3</span>
                    Placement Preparation
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="font-bold text-status-success flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-100 text-status-success flex items-center justify-center text-[10px] font-bold">✓</span>
                    Launch
                  </div>
                </div>
              </div>

              <Link to="/academic-recovery" className="w-full">
                <Button
                  variant={selectedLaunchPath === 'recover' ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full justify-center"
                >
                  View Recovery Path
                </Button>
              </Link>
            </div>

            {/* CARD 2: Skill Up & Launch */}
            <div
              className={`bg-surface-card rounded-2xl border-2 p-6 transition-all flex flex-col justify-between shadow-xs
                ${selectedLaunchPath === 'skill' ? 'border-primary shadow-sm' : 'border-line hover:border-slate-300'}
              `}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="badge-accent text-[10px]">
                    Track 2
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-accent-light text-accent flex items-center justify-center border border-accent/20">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-content-heading">
                  Skill Up & Launch
                </h4>
                <p className="text-xs text-content-body mt-1.5 leading-relaxed">
                  For students who have cleared their arrears but want to identify skill gaps and become placement-ready.
                </p>

                {/* Steps Visual Flow */}
                <div className="my-5 p-3.5 rounded-xl bg-surface border border-line space-y-2 text-xs">
                  <div className="font-semibold text-content-heading flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-accent-light text-accent flex items-center justify-center text-[10px] font-bold">1</span>
                    Skill Gap Analysis
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="font-semibold text-content-heading flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary-light text-primary flex items-center justify-center text-[10px] font-bold">2</span>
                    Personalized Learning
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="font-semibold text-content-heading flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary-light text-primary flex items-center justify-center text-[10px] font-bold">3</span>
                    Career Preparation
                  </div>
                  <div className="pl-6 text-content-muted text-[10px]">↓</div>
                  <div className="font-bold text-status-success flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-100 text-status-success flex items-center justify-center text-[10px] font-bold">✓</span>
                    Launch
                  </div>
                </div>
              </div>

              <Link to="/skill-gap" className="w-full">
                <Button
                  variant={selectedLaunchPath === 'skill' ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full justify-center"
                >
                  View Skill Path
                </Button>
              </Link>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5 — CONTINUE LEARNING (3 Cards Grid)                              */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-content-heading">
                Continue Learning
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Active modules tailored to your career milestones.
              </p>
            </div>
            <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">
              All Courses
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {learningCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-surface-card rounded-2xl border border-line p-5 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-all"
                >
                  <div className="space-y-3.5">
                    {/* Category & Status Pill */}
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">
                        {card.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border
                          ${card.status === 'In Progress'
                            ? 'bg-primary-light text-primary border-primary/20'
                            : 'bg-amber-50 text-status-warning border-amber-200'
                          }
                        `}
                      >
                        {card.status}
                      </span>
                    </div>

                    {/* Course Title */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-surface border border-line flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-content-heading leading-snug">
                        {card.title}
                      </h4>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-content-muted">Completion</span>
                        <span className="font-bold text-content-heading">{card.progress}%</span>
                      </div>
                      <ProgressBar
                        value={card.progress}
                        variant={card.variant}
                      />
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 mt-4 border-t border-line">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => alert(`Continuing ${card.title} (frontend prototype)`)}
                      className="w-full justify-center gap-1.5 text-xs"
                    >
                      <PlayCircle className="w-3.5 h-3.5" />
                      <span>Continue</span>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 6 & 7 — QUICK ACTIONS & RECENT ACTIVITY                           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* SECTION 6: QUICK ACTIONS (6 cols on desktop) */}
          <div className="lg:col-span-6 bg-surface-card rounded-2xl border border-line p-6 shadow-xs space-y-4">
            <div>
              <h3 className="text-lg font-bold text-content-heading">
                Quick Actions
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Common tasks and immediate student workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.id}
                    to={action.to}
                    className="p-3.5 rounded-xl border border-line bg-surface hover:border-primary/40 hover:bg-surface-card transition-all cursor-pointer flex items-start gap-3 group select-none shadow-2xs"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${action.iconColor} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-content-heading group-hover:text-primary transition-colors truncate">
                        {action.title}
                      </h4>
                      <p className="text-[11px] text-content-muted mt-0.5 leading-tight">
                        {action.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* SECTION 7: RECENT ACTIVITY (6 cols on desktop) */}
          <div className="lg:col-span-6 bg-surface-card rounded-2xl border border-line p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-content-heading">
                  Recent Activity
                </h3>
                <p className="text-xs text-content-muted mt-0.5">
                  Your latest study actions and milestones.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">
                View Log
              </span>
            </div>

            <div className="divide-y divide-line pt-1">
              {recentActivities.map((act) => {
                const Icon = act.icon;
                return (
                  <div key={act.id} className="py-3 flex items-center justify-between gap-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-surface border border-line flex items-center justify-center flex-shrink-0 text-primary">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-content-heading truncate">
                          {act.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={act.badgeClass + ' text-[9px] py-0 px-1.5'}>
                            {act.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-content-muted flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{act.timestamp}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 9 — MOTIVATION / CTA BANNER                                       */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
          {/* Subtle Primary Highlight Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

          <div className="space-y-1.5 max-w-xl pl-2">
            <span className="badge-primary text-[10px]">
              Daily Mindset
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-content-heading tracking-tight">
              Every step forward counts.
            </h3>
            <p className="text-xs sm:text-sm text-content-body leading-relaxed">
              Whether you’re recovering from academic setbacks or strengthening your skills, keep building toward your career launch.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => alert('Continuing active milestone module (frontend prototype).')}
            className="whitespace-nowrap sm:self-center shadow-sm w-full sm:w-auto justify-center"
          >
            Continue My Journey
          </Button>
        </div>

      </div>
    </DashboardLayout>
  );
}

// Simple Brain/Intellect Icon helper
function BrainIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}
