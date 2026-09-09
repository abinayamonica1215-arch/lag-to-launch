import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import { useUsername } from '../utils/user';
import {
  Target,
  Code2,
  Database,
  MessageSquare,
  TrendingUp,
  Brain,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  BookOpen,
  Sparkles,
  Info,
  Clock,
  PlayCircle,
  BarChart2,
  Award,
} from 'lucide-react';

/**
 * SkillGapPage Component
 * 
 * Step 9 — Student Skill Gap Analysis & Placement Readiness
 * 
 * Flow:
 * Current Skills → Skill Gap Identification → Priority Areas → Recommended Learning → Placement Readiness
 * 
 * FRONTEND DEMO ONLY: All skill assessments, gap percentages, and course modules are static demonstration data.
 * Adheres strictly to the established Lag to Launch color palette:
 * - Primary: #4F46E5, Dark: #3730A3, Light: #EEF2FF
 * - Accent: #06B6D4, Light: #ECFEFF
 * - Main Surface: #F8FAFC, Card Surface: #FFFFFF
 * - Text: Heading (#0F172A), Body (#475569), Muted (#64748B)
 * - Borders: #E2E8F0
 * - Status: Success (#16A34A), Warning (#F59E0B), Error (#DC2626)
 */
export default function SkillGapPage() {
  const [username] = useUsername();
  // Static Skill Categories Data (Section 2)
  const skillCategories = [
    {
      id: 1,
      title: 'Programming',
      score: 78,
      status: 'Strong',
      statusClass: 'badge-success',
      variant: 'primary',
      icon: Code2,
      skills: ['Python', 'Java', 'C++'],
    },
    {
      id: 2,
      title: 'Data Structures',
      score: 64,
      status: 'Needs Improvement',
      statusClass: 'badge-error',
      variant: 'error',
      icon: Target,
      skills: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees'],
    },
    {
      id: 3,
      title: 'Database & SQL',
      score: 70,
      status: 'Improving',
      statusClass: 'badge-warning',
      variant: 'accent',
      icon: Database,
      skills: ['SQL', 'MySQL', 'Database Fundamentals'],
    },
    {
      id: 4,
      title: 'Aptitude',
      score: 80,
      status: 'Strong',
      statusClass: 'badge-success',
      variant: 'primary',
      icon: Brain,
      skills: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability'],
    },
    {
      id: 5,
      title: 'Communication',
      score: 68,
      status: 'Needs Improvement',
      statusClass: 'badge-error',
      variant: 'warning',
      icon: MessageSquare,
      skills: ['English Communication', 'Presentation', 'Interview Communication'],
    },
    {
      id: 6,
      title: 'Problem Solving',
      score: 75,
      status: 'Improving',
      statusClass: 'badge-warning',
      variant: 'accent',
      icon: TrendingUp,
      skills: ['Logical Thinking', 'Coding Problems', 'Problem Solving'],
    },
  ];

  // Static Identified Skill Gaps (Section 3)
  const skillGaps = [
    {
      id: 1,
      title: 'Data Structures',
      current: 64,
      target: 85,
      gap: 21,
      priority: 'High',
      priorityClass: 'badge-error',
      focus: 'Trees, Graphs, Recursion',
    },
    {
      id: 2,
      title: 'Communication',
      current: 68,
      target: 85,
      gap: 17,
      priority: 'High',
      priorityClass: 'badge-error',
      focus: 'Speaking, Presentation, Interview Communication',
    },
    {
      id: 3,
      title: 'Problem Solving',
      current: 75,
      target: 85,
      gap: 10,
      priority: 'Medium',
      priorityClass: 'badge-warning',
      focus: 'Coding Practice and Logical Reasoning',
    },
  ];

  // Static Timeline Steps (Section 5)
  const skillPathSteps = [
    { id: 1, title: 'Strengthen Data Structures', status: 'current', label: 'Current Focus' },
    { id: 2, title: 'Improve Problem Solving', status: 'next', label: 'Next' },
    { id: 3, title: 'Build Communication Skills', status: 'upcoming', label: 'Upcoming' },
    { id: 4, title: 'Practice Technical Interviews', status: 'upcoming', label: 'Upcoming' },
    { id: 5, title: 'Complete Placement Preparation', status: 'upcoming', label: 'Upcoming' },
  ];

  // Static Recommended Learning Cards (Section 6)
  const learningCards = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      level: 'Intermediate',
      duration: '4 Weeks',
      focus: 'Trees, Graphs, Recursion',
      progress: 65,
      action: 'Start Learning',
      variant: 'primary',
      icon: Target,
    },
    {
      id: 2,
      title: 'Problem Solving Practice',
      level: 'Intermediate',
      duration: '2 Weeks',
      focus: 'Coding Challenges',
      progress: 40,
      action: 'Start Learning',
      variant: 'accent',
      icon: TrendingUp,
    },
    {
      id: 3,
      title: 'Communication for Interviews',
      level: 'Beginner',
      duration: '2 Weeks',
      focus: 'Speaking & Interview Skills',
      progress: 30,
      action: 'Start Learning',
      variant: 'warning',
      icon: MessageSquare,
    },
    {
      id: 4,
      title: 'SQL for Placements',
      level: 'Beginner',
      duration: '2 Weeks',
      focus: 'Queries & Database Concepts',
      progress: 55,
      action: 'Continue',
      variant: 'accent',
      icon: Database,
    },
  ];

  // Static Insights (Section 8)
  const insights = [
    {
      id: 1,
      text: 'Your aptitude performance is currently one of your strongest areas.',
      icon: Brain,
      variant: 'success',
    },
    {
      id: 2,
      text: 'Data Structures is your highest-priority technical skill gap.',
      icon: AlertCircle,
      variant: 'warning',
    },
    {
      id: 3,
      text: 'Improving communication can strengthen your interview readiness.',
      icon: MessageSquare,
      variant: 'accent',
    },
  ];

  return (
    <DashboardLayout title="Skill Gap Analysis">
      <div className="space-y-8 sm:space-y-10 pb-6">
        
        {/* ========================================================================= */}
        {/* PAGE HEADER                                                               */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="badge-accent">
                Skill Assessment Overview
              </span>
              <span className="text-xs text-content-muted">Student: {username} • Target Role: Software Developer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-content-heading tracking-tight">
              Skill Gap Analysis
            </h2>
            <p className="text-sm text-content-body leading-relaxed">
              Understand your current skills, identify gaps, and focus on what matters for your career. Clear academic arrears and accelerate directly toward campus hiring readiness.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard Overview
              </Button>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1 & 7 — SKILL READINESS SUMMARY & NEXT TARGET                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* SECTION 1: SKILL READINESS SUMMARY (8 cols on desktop) */}
          <div className="lg:col-span-8 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-6">
            
            {/* Header with Title and Overall Score */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-line">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                  Technical & Employability Readiness
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-content-heading mt-0.5">
                  Your Skill Readiness
                </h3>
              </div>

              <div className="flex items-baseline gap-2.5 bg-accent-light px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-accent/20">
                <span className="text-3xl sm:text-4xl font-black text-accent tabular-nums">
                  72%
                </span>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Overall Skill Score
                </span>
              </div>
            </div>

            {/* 4 Categorized Progress Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Technical Skills — 72% */}
              <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-content-heading">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-accent" />
                    Technical Skills
                  </span>
                  <span className="tabular-nums font-bold text-accent">72%</span>
                </div>
                <ProgressBar value={72} variant="accent" />
              </div>

              {/* Communication — 68% */}
              <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-content-heading">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-primary" />
                    Communication
                  </span>
                  <span className="tabular-nums font-bold text-primary">68%</span>
                </div>
                <ProgressBar value={68} variant="primary" />
              </div>

              {/* Problem Solving — 75% */}
              <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-content-heading">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-accent" />
                    Problem Solving
                  </span>
                  <span className="tabular-nums font-bold text-accent">75%</span>
                </div>
                <ProgressBar value={75} variant="accent" />
              </div>

              {/* Aptitude — 80% */}
              <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-content-heading">
                  <span className="flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5 text-primary" />
                    Aptitude
                  </span>
                  <span className="tabular-nums font-bold text-primary">80%</span>
                </div>
                <ProgressBar value={80} variant="primary" />
              </div>

            </div>

            {/* Guidance Message */}
            <div className="pt-4 border-t border-line text-xs text-content-body flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
              <span>
                You have a strong foundation. Strengthening technical skills and communication can improve your placement readiness.
              </span>
            </div>

          </div>

          {/* SECTION 7: SKILL IMPROVEMENT TARGET (4 cols on desktop) */}
          <div className="lg:col-span-4 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-5">
            <div>
              <div className="flex justify-between items-start mb-3 pb-3 border-b border-line">
                <div>
                  <h3 className="text-lg font-bold text-content-heading">
                    Your Next Target
                  </h3>
                  <p className="text-xs text-content-muted">Milestone benchmark</p>
                </div>
                <span className="badge-primary text-[10px]">
                  Target 80%
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-extrabold text-content-heading">
                    Reach 80% Skill Readiness
                  </h4>
                  <p className="text-xs text-content-body mt-1 leading-relaxed">
                    Focus on Data Structures, Communication, and Problem Solving to move closer to your target.
                  </p>
                </div>

                {/* Progress Breakdown */}
                <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-content-muted">Current: <strong>72%</strong></span>
                    <span className="text-primary font-bold">Target: 80%</span>
                  </div>
                  <ProgressBar value={72} variant="primary" />
                  <div className="flex justify-between text-[11px] text-content-muted pt-0.5">
                    <span>Remaining to target:</span>
                    <span className="font-bold text-status-warning">8% Gap</span>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/learning-plan" className="w-full block">
              <Button
                variant="primary"
                size="sm"
                className="w-full justify-center text-xs"
              >
                View Learning Plan
              </Button>
            </Link>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2 — SKILL CATEGORIES (6 Cards in 3-Column Grid)                   */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-content-heading">
              Your Skill Overview
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              See how you are progressing across important placement skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="bg-surface-card rounded-2xl border border-line p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-all space-y-4"
                >
                  <div className="space-y-3.5">
                    
                    {/* Header with Title and Status Pill */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-surface border border-line flex items-center justify-center text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-base font-bold text-content-heading">
                          {cat.title}
                        </h4>
                      </div>
                      <span className={cat.statusClass + ' text-[10px]'}>
                        {cat.status}
                      </span>
                    </div>

                    {/* Progress Bar Row */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-content-muted">Proficiency Score</span>
                        <span className="font-bold text-content-heading tabular-nums">{cat.score}%</span>
                      </div>
                      <ProgressBar value={cat.score} variant={cat.variant} />
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-2">
                      <span className="text-[10px] font-semibold text-content-muted uppercase tracking-wider block mb-1.5">
                        Assessed Topics
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-0.5 rounded-md bg-surface border border-line text-[11px] font-medium text-content-body"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3 & 4 — IDENTIFIED GAPS & PRIORITY MATRIX                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* SECTION 3: IDENTIFIED SKILL GAPS (8 cols on desktop) */}
          <div className="lg:col-span-8 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs space-y-5">
            <div>
              <h3 className="text-xl font-bold text-content-heading">
                Identified Skill Gaps
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Focus on the areas that can make the biggest difference in your placement preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillGaps.map((gap) => (
                <div
                  key={gap.id}
                  className="p-4 rounded-xl bg-surface border border-line flex flex-col justify-between space-y-3 hover:border-primary/40 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-content-heading">
                        {gap.title}
                      </h4>
                      <span className={gap.priorityClass + ' text-[10px]'}>
                        {gap.priority}
                      </span>
                    </div>

                    {/* Current vs Target metrics */}
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-content-muted">
                        <span>Current Level:</span>
                        <span className="font-bold text-content-heading">{gap.current}%</span>
                      </div>
                      <div className="flex justify-between text-content-muted">
                        <span>Target Level:</span>
                        <span className="font-bold text-primary">{gap.target}%</span>
                      </div>
                      <div className="flex justify-between font-bold text-status-error pt-1 border-t border-line/60">
                        <span>Skill Gap:</span>
                        <span>-{gap.gap}%</span>
                      </div>
                    </div>

                    {/* Recommended Focus */}
                    <div className="pt-2 text-[11px] text-content-muted border-t border-line/60">
                      <span className="font-semibold text-content-heading block mb-0.5">Focus:</span>
                      <span>{gap.focus}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert(`Improving ${gap.title} (frontend preview)`)}
                    className="w-full justify-center text-xs mt-2"
                  >
                    Improve Skill
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: PRIORITY MATRIX (4 cols on desktop) */}
          <div className="lg:col-span-4 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="pb-3 border-b border-line mb-3">
                <h3 className="text-lg font-bold text-content-heading">
                  Skill Priority
                </h3>
                <p className="text-xs text-content-muted mt-0.5">
                  Structured urgency classification for your current semester.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                
                {/* High Priority */}
                <div className="p-3 rounded-xl bg-red-50/50 border border-red-200 space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold text-status-error">
                    <span>High Priority</span>
                    <span className="text-[10px] uppercase font-bold">Immediate Focus</span>
                  </div>
                  <p className="text-xs text-content-heading font-semibold">
                    Data Structures, Communication
                  </p>
                  <span className="text-[10px] text-content-muted block">Direct impact on tech screening & HR rounds</span>
                </div>

                {/* Medium Priority */}
                <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold text-status-warning">
                    <span>Medium Priority</span>
                    <span className="text-[10px] uppercase font-bold">Steady Progress</span>
                  </div>
                  <p className="text-xs text-content-heading font-semibold">
                    Problem Solving, Database & SQL
                  </p>
                  <span className="text-[10px] text-content-muted block">Needed for technical assessment rounds</span>
                </div>

                {/* Low Priority */}
                <div className="p-3 rounded-xl bg-green-50/50 border border-green-200 space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold text-status-success">
                    <span>Low Priority</span>
                    <span className="text-[10px] uppercase font-bold">Maintenance</span>
                  </div>
                  <p className="text-xs text-content-heading font-semibold">
                    Programming Fundamentals, Aptitude
                  </p>
                  <span className="text-[10px] text-content-muted block">Solid foundation; maintain with weekly tests</span>
                </div>

              </div>
            </div>

            <div className="pt-2 text-[11px] text-content-muted border-t border-line flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Priorities shown here are sample prototype data.</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 5 — RECOMMENDED SKILL PATH (5-Step Timeline)                      */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs space-y-5">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-line">
            <div>
              <h3 className="text-xl font-bold text-content-heading">
                Recommended Skill Path
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Build the skills you need step by step.
              </p>
            </div>
            <span className="badge-primary text-xs font-semibold">
              1 of 5 steps in progress
            </span>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden md:flex items-start justify-between relative pt-2">
            {skillPathSteps.map((step, idx) => {
              const isCurrent = step.status === 'current';
              const isNext = step.status === 'next';

              return (
                <div key={step.id} className="flex-1 relative flex flex-col items-center text-center px-1">
                  
                  {/* Horizontal Connector Line */}
                  {idx < skillPathSteps.length - 1 && (
                    <div
                      className={`absolute top-3.5 left-1/2 w-full h-0.5 -z-0
                        ${isCurrent ? 'bg-primary/40' : 'bg-line'}
                      `}
                    />
                  )}

                  {/* Node Circle */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs relative z-10 shadow-2xs
                      ${isCurrent ? 'bg-primary text-white ring-4 ring-primary-light' : ''}
                      ${isNext ? 'bg-surface border-2 border-primary/40 text-primary' : ''}
                      ${step.status === 'upcoming' ? 'bg-surface border border-line text-content-muted' : ''}
                    `}
                  >
                    <span>{step.id}</span>
                  </div>

                  <h5 className={`text-xs font-bold mt-2 leading-tight max-w-[130px]
                    ${isCurrent ? 'text-primary' : 'text-content-heading'}
                  `}>
                    {step.title}
                  </h5>

                  <span className={`text-[10px] mt-1 font-semibold px-2 py-0.5 rounded-full
                    ${isCurrent ? 'bg-primary-light text-primary' : 'text-content-muted'}
                  `}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden space-y-3">
            {skillPathSteps.map((step) => {
              const isCurrent = step.status === 'current';

              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-xs
                    ${isCurrent ? 'bg-primary-light/40 border-primary/40 font-semibold text-primary' : 'bg-surface border-line text-content-body'}
                  `}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] flex-shrink-0
                      ${isCurrent ? 'bg-primary text-white ring-2 ring-primary-light' : 'bg-white border border-line text-content-muted'}
                    `}
                  >
                    {step.id}
                  </div>
                  <span className="flex-1">{step.title}</span>
                  <span className="text-[10px] text-content-muted">
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 6 — RECOMMENDED LEARNING (4 Cards Grid)                           */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-content-heading">
                Recommended Learning
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Targeted modules structured to close your highest priority skill gaps.
              </p>
            </div>
            <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">
              Browse All Courses
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-surface-card rounded-2xl border border-line p-5 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-all space-y-4"
                >
                  <div className="space-y-3">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-content-muted uppercase tracking-wider">
                        {card.level}
                      </span>
                      <span className="text-[11px] font-medium text-content-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {card.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-surface border border-line flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-content-heading leading-snug">
                        {card.title}
                      </h4>
                    </div>

                    <p className="text-[11px] text-content-muted leading-tight">
                      Focus: {card.focus}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-content-muted">Module Progress</span>
                        <span className="font-bold text-content-heading">{card.progress}%</span>
                      </div>
                      <ProgressBar value={card.progress} variant={card.variant} />
                    </div>

                  </div>

                  {/* Button */}
                  <div className="pt-2 border-t border-line">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => alert(`Launching ${card.title} (frontend preview)`)}
                      className="w-full justify-center text-xs"
                    >
                      {card.action}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 8 — SKILL INSIGHTS (3 Insight Cards)                              */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-content-heading">
                Skill Insights
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Automated observations based on your current competency profile.
              </p>
            </div>
            <span className="badge-primary text-[10px]">
              Prototype Insight
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((ins) => {
              const Icon = ins.icon;
              return (
                <div
                  key={ins.id}
                  className="p-4 rounded-xl bg-surface-card border border-line flex items-start gap-3.5 shadow-xs"
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0
                    ${ins.variant === 'success' ? 'bg-green-50 text-status-success border border-green-200' : ''}
                    ${ins.variant === 'warning' ? 'bg-amber-50 text-status-warning border border-amber-200' : ''}
                    ${ins.variant === 'accent' ? 'bg-accent-light text-accent border border-accent/20' : ''}
                  `}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-content-body leading-relaxed">
                    {ins.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 9 — FINAL CTA                                                     */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

          <div className="space-y-1.5 max-w-xl pl-2">
            <span className="badge-accent text-[10px]">
              Placement Readiness Acceleration
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-content-heading tracking-tight">
              Turn Skill Gaps Into Career Strengths.
            </h3>
            <p className="text-xs sm:text-sm text-content-body leading-relaxed">
              Identify what you need to improve, follow your learning path, and keep moving toward placement readiness.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link to="/learning-plan" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center"
              >
                Start Learning
              </Button>
            </Link>
            <Link to="/readiness" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto justify-center"
              >
                View Readiness
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
