import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import { useUsername } from '../utils/user';
import {
  GraduationCap,
  Calendar,
  AlertCircle,
  TrendingUp,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  Flame,
  Award,
  Sparkles,
  Info,
  ChevronRight,
} from 'lucide-react';

/**
 * AcademicRecoveryPage Component
 * 
 * Step 8 — Student Academic Arrear Recovery Command Center
 * 
 * Flow:
 * Identify Weak Subjects → Prioritize Recovery → Follow Personalized Study Plan → Track Progress → Become Placement-Ready
 * 
 * FRONTEND DEMO ONLY: All backlog counts, dates, and study plans are static demonstration data.
 * Adheres strictly to the established Lag to Launch color palette:
 * - Primary: #4F46E5, Dark: #3730A3, Light: #EEF2FF
 * - Accent: #06B6D4, Light: #ECFEFF
 * - Main Surface: #F8FAFC, Card Surface: #FFFFFF
 * - Text: Heading (#0F172A), Body (#475569), Muted (#64748B)
 * - Borders: #E2E8F0
 * - Status: Success (#16A34A), Warning (#F59E0B), Error (#DC2626)
 */
export default function AcademicRecoveryPage() {
  const [username] = useUsername();

  // Static Subject Recovery Cards Data
  const subjects = [
    {
      id: 1,
      name: 'Data Structures',
      code: 'CS3301',
      status: 'Needs Attention',
      statusType: 'error',
      progress: 62,
      priority: 'High',
      priorityType: 'warning',
      nextExam: 'October 12',
      topics: 'Stacks, Queues, Binary Trees',
    },
    {
      id: 2,
      name: 'Operating Systems',
      code: 'CS3401',
      status: 'Improving',
      statusType: 'warning',
      progress: 74,
      priority: 'Medium',
      priorityType: 'warning',
      nextExam: 'October 20',
      topics: 'Process Scheduling, Deadlocks',
    },
    {
      id: 3,
      name: 'Computer Networks',
      code: 'CS3501',
      status: 'Improving',
      statusType: 'success',
      progress: 81,
      priority: 'Low',
      priorityType: 'success',
      nextExam: 'November 3',
      topics: 'TCP/IP, Routing, Subnetting',
    },
  ];

  // Static Priority Analysis Items
  const priorityAnalysis = [
    {
      id: 1,
      subject: 'Data Structures',
      priority: 'High',
      reason: 'Low current progress (62%)',
      badgeClass: 'badge-error',
    },
    {
      id: 2,
      subject: 'Operating Systems',
      priority: 'Medium',
      reason: 'Upcoming examination (October 20)',
      badgeClass: 'badge-warning',
    },
    {
      id: 3,
      subject: 'Computer Networks',
      priority: 'Low',
      reason: 'Strong improvement (81% syllabus cleared)',
      badgeClass: 'badge-success',
    },
  ];

  // Static Today's Tasks
  const todayTasks = [
    {
      id: 1,
      title: 'Revise Stack and Queue concepts',
      subject: 'Data Structures',
      duration: '30 min',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Practice Binary Search Tree problems',
      subject: 'Data Structures',
      duration: '45 min',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Review Process Scheduling',
      subject: 'Operating Systems',
      duration: '30 min',
      status: 'Pending',
    },
    {
      id: 4,
      title: 'Complete Computer Networks quiz',
      subject: 'Computer Networks',
      duration: '20 min',
      status: 'Pending',
    },
  ];

  // Static Weekly 7-Day Plan
  const weeklySchedule = [
    { day: 'Monday', subject: 'Data Structures', topic: 'Stack & Queue', isToday: false },
    { day: 'Tuesday', subject: 'Operating Systems', topic: 'Process Scheduling', isToday: false },
    { day: 'Wednesday', subject: 'Data Structures', topic: 'Trees & BST', isToday: true },
    { day: 'Thursday', subject: 'Computer Networks', topic: 'Networking Basics', isToday: false },
    { day: 'Friday', subject: 'Data Structures', topic: 'Practice Problems', isToday: false },
    { day: 'Saturday', subject: 'Mock Test', topic: 'Mixed Subjects', isToday: false },
    { day: 'Sunday', subject: 'Revision', topic: 'Weak Areas', isToday: false },
  ];

  // Static Milestones
  const milestones = [
    { id: 1, label: 'Academic Assessment', status: 'completed' },
    { id: 2, label: 'Weak Subjects Identified', status: 'completed' },
    { id: 3, label: 'Recovery Plan Created', status: 'completed' },
    { id: 4, label: 'Subject Improvement', status: 'current' },
    { id: 5, label: 'Arrear Clearance', status: 'upcoming' },
    { id: 6, label: 'Placement Preparation', status: 'upcoming' },
  ];

  return (
    <DashboardLayout title="Academic Recovery">
      <div className="space-y-8 sm:space-y-10 pb-6">
        
        {/* ========================================================================= */}
        {/* SECTION 1 — PAGE HEADER                                                   */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          
          {/* Header Left */}
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="badge-warning">
                Recovery Plan Active
              </span>
              <span className="text-xs text-content-muted">Student: {username} • Semester 5 Diagnostics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-content-heading tracking-tight">
              Academic Recovery
            </h2>
            <p className="text-sm text-content-body leading-relaxed">
              Your recovery journey starts with understanding where you need the most improvement. Turn academic setbacks into a structured path toward recovery and placement readiness.
            </p>
          </div>

          {/* Compact Progress Summary Right */}
          <div className="bg-surface rounded-xl border border-line p-4 sm:p-5 w-full lg:w-72 flex-shrink-0 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-content-heading">Overall Recovery</span>
              <span className="text-sm font-black text-primary tabular-nums">85%</span>
            </div>
            <ProgressBar value={85} variant="primary" />
            <p className="text-[11px] text-content-muted leading-tight pt-0.5">
              Target: Complete all subject milestones before university exam window.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2 & 4 — RECOVERY OVERVIEW & PRIORITY ANALYSIS                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* SECTION 2: RECOVERY OVERVIEW (8 cols on desktop) */}
          <div className="lg:col-span-8 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-line mb-5">
                <div>
                  <h3 className="text-lg font-bold text-content-heading">
                    Your Recovery Overview
                  </h3>
                  <p className="text-xs text-content-muted mt-0.5">
                    Real-time status of your backlog remediation progress.
                  </p>
                </div>
                <span className="badge-primary text-[10px]">
                  Updated Today
                </span>
              </div>

              {/* 4 Clean Visual Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                
                {/* Metric 1: Active Arrears */}
                <div className="p-4 rounded-xl bg-surface border border-line text-center space-y-1">
                  <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider block">
                    Active Arrears
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-status-warning block tabular-nums">
                    3
                  </span>
                  <span className="text-[10px] text-content-muted block">Subjects</span>
                </div>

                {/* Metric 2: Recovery Progress */}
                <div className="p-4 rounded-xl bg-surface border border-line text-center space-y-1">
                  <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider block">
                    Recovery Progress
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-primary block tabular-nums">
                    85%
                  </span>
                  <span className="text-[10px] text-content-muted block">Overall</span>
                </div>

                {/* Metric 3: Subjects Improving */}
                <div className="p-4 rounded-xl bg-surface border border-line text-center space-y-1">
                  <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider block">
                    Improving
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-status-success block tabular-nums">
                    2
                  </span>
                  <span className="text-[10px] text-content-muted block">Subjects</span>
                </div>

                {/* Metric 4: Upcoming Exams */}
                <div className="p-4 rounded-xl bg-surface border border-line text-center space-y-1">
                  <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider block">
                    Upcoming Exams
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-content-heading block tabular-nums">
                    2
                  </span>
                  <span className="text-[10px] text-content-muted block">Next 30 Days</span>
                </div>

              </div>
            </div>

            {/* Success Note Row */}
            <div className="pt-4 border-t border-line flex items-center gap-2.5 text-xs text-status-success bg-green-50/60 p-3.5 rounded-xl border border-green-200">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">
                You are making good progress. Keep following your recovery plan to stay on track.
              </span>
            </div>
          </div>

          {/* SECTION 4: PRIORITY ANALYSIS (4 cols on desktop) */}
          <div className="lg:col-span-4 bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="pb-3 border-b border-line mb-3">
                <h3 className="text-lg font-bold text-content-heading">
                  Recovery Priority
                </h3>
                <p className="text-xs text-content-muted mt-0.5">
                  Based on your current academic progress, focus on these areas first.
                </p>
              </div>

              {/* Priority Stack */}
              <div className="space-y-3">
                {priorityAnalysis.map((item, idx) => (
                  <div key={item.id} className="p-3 rounded-xl bg-surface border border-line space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-content-heading flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-slate-200 text-content-heading flex items-center justify-center text-[10px]">
                          {idx + 1}
                        </span>
                        {item.subject}
                      </span>
                      <span className={item.badgeClass + ' text-[10px] py-0 px-2'}>
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-[11px] text-content-muted pl-5">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prototype Disclaimer */}
            <div className="pt-3 border-t border-line flex items-center gap-1.5 text-[11px] text-content-muted">
              <Info className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Priority shown here is sample data for the prototype.</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 3 — SUBJECTS REQUIRING ATTENTION (3 Subject Cards)                 */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-content-heading">
              Subjects Requiring Attention
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              Focus on the subjects that need the most improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {subjects.map((sub) => {
              // Status & Priority formatting
              const isHigh = sub.priority === 'High';
              const isMedium = sub.priority === 'Medium';
              const isLow = sub.priority === 'Low';

              return (
                <div
                  key={sub.id}
                  className="bg-surface-card rounded-2xl border border-line p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-all space-y-4"
                >
                  <div className="space-y-3.5">
                    
                    {/* Header with Priority Pill */}
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-mono font-semibold text-content-muted block">
                          {sub.code}
                        </span>
                        <h4 className="text-base font-bold text-content-heading mt-0.5">
                          {sub.name}
                        </h4>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border
                          ${isHigh ? 'bg-red-50 text-status-error border-red-200' : ''}
                          ${isMedium ? 'bg-amber-50 text-status-warning border-amber-200' : ''}
                          ${isLow ? 'bg-green-50 text-status-success border-green-200' : ''}
                        `}
                      >
                        {sub.priority} Priority
                      </span>
                    </div>

                    {/* Status row */}
                    <div className="flex items-center justify-between text-xs py-1 border-y border-line">
                      <span className="text-content-muted">Current Status</span>
                      <span className={`font-semibold
                        ${isHigh ? 'text-status-error' : ''}
                        ${isMedium ? 'text-status-warning' : ''}
                        ${isLow ? 'text-status-success' : ''}
                      `}>
                        {sub.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-content-muted">Current Progress</span>
                        <span className="font-bold text-content-heading tabular-nums">{sub.progress}%</span>
                      </div>
                      <ProgressBar
                        value={sub.progress}
                        variant={isHigh ? 'error' : isMedium ? 'warning' : 'primary'}
                      />
                    </div>

                    {/* Exam Date & Key Topics */}
                    <div className="p-3 rounded-xl bg-surface border border-line space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-content-heading font-medium">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>Next Exam: {sub.nextExam}</span>
                      </div>
                      <p className="text-[11px] text-content-muted leading-tight">
                        Key Focus: {sub.topics}
                      </p>
                    </div>

                  </div>

                  {/* Button CTA */}
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => alert(`Viewing study plan for ${sub.name} (frontend preview)`)}
                      className="w-full justify-center text-xs"
                    >
                      View Study Plan
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 7 — RECOVERY MILESTONES (Horizontal Desktop / Vertical Mobile)    */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs space-y-5">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-line">
            <div>
              <h3 className="text-lg font-bold text-content-heading">
                Recovery Milestones
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Sequential progression toward backlog clearance and interview eligibility.
              </p>
            </div>
            <span className="badge-primary text-xs font-semibold">
              3 of 6 milestones completed
            </span>
          </div>

          {/* Desktop Horizontal Milestone Stepper */}
          <div className="hidden md:flex items-start justify-between relative pt-2">
            {milestones.map((m, idx) => {
              const isDone = m.status === 'completed';
              const isCurrent = m.status === 'current';
              const isUpcoming = m.status === 'upcoming';

              return (
                <div key={m.id} className="flex-1 relative flex flex-col items-center text-center px-1">
                  
                  {/* Connector Line */}
                  {idx < milestones.length - 1 && (
                    <div
                      className={`absolute top-3.5 left-1/2 w-full h-0.5 -z-0
                        ${isDone ? 'bg-status-success' : isCurrent ? 'bg-primary/40' : 'bg-line'}
                      `}
                    />
                  )}

                  {/* Node Icon */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs relative z-10 shadow-2xs
                      ${isDone ? 'bg-status-success text-white' : ''}
                      ${isCurrent ? 'bg-primary text-white ring-4 ring-primary-light' : ''}
                      ${isUpcoming ? 'bg-surface border border-line text-content-muted' : ''}
                    `}
                  >
                    {isDone ? <CheckCircle2 className="w-4 h-4" /> : m.id}
                  </div>

                  <h5 className={`text-xs font-bold mt-2 leading-tight max-w-[120px]
                    ${isCurrent ? 'text-primary' : isDone ? 'text-content-heading' : 'text-content-muted'}
                  `}>
                    {m.label}
                  </h5>

                  <span className="text-[10px] text-content-muted mt-0.5">
                    {isDone ? '✓ Completed' : isCurrent ? 'Current' : 'Upcoming'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="md:hidden space-y-3">
            {milestones.map((m) => {
              const isDone = m.status === 'completed';
              const isCurrent = m.status === 'current';

              return (
                <div
                  key={m.id}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border text-xs
                    ${isCurrent ? 'bg-primary-light/40 border-primary/40 font-semibold text-primary' : 'bg-surface border-line text-content-body'}
                  `}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] flex-shrink-0
                      ${isDone ? 'bg-status-success text-white' : ''}
                      ${isCurrent ? 'bg-primary text-white' : ''}
                      ${!isDone && !isCurrent ? 'bg-white border border-line text-content-muted' : ''}
                    `}
                  >
                    {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : m.id}
                  </div>
                  <span className="flex-1">{m.label}</span>
                  <span className="text-[10px] text-content-muted">
                    {isDone ? 'Completed' : isCurrent ? 'Active' : 'Pending'}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 5 & 8 — TODAY'S TASKS & STUDY INSIGHTS                            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* SECTION 5: TODAY'S RECOVERY TASKS (7 cols on desktop) */}
          <div className="lg:col-span-7 bg-surface-card rounded-2xl border border-line p-6 shadow-xs space-y-4">
            <div>
              <h3 className="text-lg font-bold text-content-heading">
                Today’s Recovery Tasks
              </h3>
              <p className="text-xs text-content-muted mt-0.5">
                Curated daily checklist tailored to your active arrear schedule.
              </p>
            </div>

            <div className="divide-y divide-line pt-1">
              {todayTasks.map((t) => {
                const isCompleted = t.status === 'Completed';
                const isInProgress = t.status === 'In Progress';

                return (
                  <div key={t.id} className="py-3.5 flex items-center justify-between gap-3 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-3 min-w-0">
                      
                      {/* Status Icon */}
                      <div className="mt-0.5 flex-shrink-0">
                        {isCompleted && (
                          <div className="w-5 h-5 rounded-full bg-green-100 text-status-success flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        )}
                        {isInProgress && (
                          <div className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center ring-2 ring-primary/20">
                            <Clock className="w-3.5 h-3.5" />
                          </div>
                        )}
                        {!isCompleted && !isInProgress && (
                          <div className="w-5 h-5 rounded-full border border-line bg-surface text-content-muted flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          </div>
                        )}
                      </div>

                      {/* Task Info */}
                      <div className="min-w-0">
                        <p className={`text-xs font-semibold leading-tight
                          ${isCompleted ? 'line-through text-content-muted' : 'text-content-heading'}
                        `}>
                          {t.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-content-muted">
                          <span>{t.subject}</span>
                          <span>•</span>
                          <span>{t.duration}</span>
                        </div>
                      </div>

                    </div>

                    {/* Status Badge */}
                    <div className="flex-shrink-0">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border
                          ${isCompleted ? 'bg-green-50 text-status-success border-green-200' : ''}
                          ${isInProgress ? 'bg-primary-light text-primary border-primary/20' : ''}
                          ${!isCompleted && !isInProgress ? 'bg-surface text-content-muted border-line' : ''}
                        `}
                      >
                        {t.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 8: STUDY INSIGHTS (5 cols on desktop) */}
          <div className="lg:col-span-5 bg-surface-card rounded-2xl border border-line p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-line mb-3">
                <h3 className="text-lg font-bold text-content-heading">
                  Study Insights
                </h3>
                <span className="badge-primary text-[10px]">
                  Prototype Insight
                </span>
              </div>

              {/* Insights List */}
              <div className="space-y-3 pt-1">
                
                <div className="p-3.5 rounded-xl bg-surface border border-line flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 text-status-success flex items-center justify-center flex-shrink-0 border border-green-200">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-content-heading block">Strongest Acceleration</span>
                    <p className="text-[11px] text-content-body mt-0.5 leading-relaxed">
                      Your strongest improvement is in <strong>Computer Networks</strong>. Syllabus clearance is at 81%.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface border border-line flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-status-warning flex items-center justify-center flex-shrink-0 border border-amber-200">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-content-heading block">Targeted Practice Needed</span>
                    <p className="text-[11px] text-content-body mt-0.5 leading-relaxed">
                      <strong>Data Structures</strong> needs more consistent practice on binary trees before the Oct 12 exam.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface border border-line flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-content-heading block">High Study Consistency</span>
                    <p className="text-[11px] text-content-body mt-0.5 leading-relaxed">
                      You have completed <strong>8 of 10 planned study sessions</strong> this week.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-content-muted">
                Insights update automatically after completing daily recovery tasks.
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 6 — THIS WEEK’S RECOVERY PLAN (7-Day Schedule)                    */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-7 shadow-xs space-y-4">
          <div>
            <h3 className="text-lg font-bold text-content-heading">
              This Week’s Recovery Plan
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              Structured 7-day timetable balancing arrear revision and placement readiness.
            </p>
          </div>

          {/* Desktop 7-Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3 pt-2">
            {weeklySchedule.map((item) => (
              <div
                key={item.day}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2
                  ${item.isToday
                    ? 'border-primary bg-primary-light/50 ring-2 ring-primary/20 shadow-xs'
                    : 'border-line bg-surface hover:border-slate-300'
                  }
                `}
              >
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-bold text-content-heading">
                      {item.day.slice(0, 3)}
                    </span>
                    {item.isToday && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 bg-primary text-white rounded">
                        Today
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-content-heading block leading-tight">
                    {item.subject}
                  </span>
                </div>

                <p className="text-[11px] text-content-muted leading-tight border-t border-line/60 pt-1.5">
                  {item.topic}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 9 — RECOVERY CTA CARD                                             */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-2xl border border-line p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-status-warning" />

          <div className="space-y-1.5 max-w-xl pl-2">
            <span className="badge-warning text-[10px]">
              Recovery Milestone Acceleration
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-content-heading tracking-tight">
              Keep moving toward your launch.
            </h3>
            <p className="text-xs sm:text-sm text-content-body leading-relaxed">
              Every subject you improve brings you one step closer to becoming placement-ready.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              onClick={() => alert('Continuing active study module (frontend prototype).')}
              className="w-full sm:w-auto justify-center"
            >
              Continue Recovery
            </Button>
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto justify-center"
              >
                View Placement Readiness
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
