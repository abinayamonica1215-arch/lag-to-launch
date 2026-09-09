import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import { useUsername } from '../utils/user';
import {
  Briefcase,
  Code2,
  Brain,
  MessageSquare,
  UserCheck,
  CheckCircle2,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  FileCheck,
  PlayCircle,
  HelpCircle,
  Award,
} from 'lucide-react';

/**
 * PlacementPreparationPage Component
 * 
 * Part 1 — Placement Preparation UI Prototype
 * Route: /placement-prep
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
export default function PlacementPreparationPage() {
  const [username] = useUsername();
  const [prepAreas] = useState([
    {
      id: 1,
      title: 'Technical Interview',
      progress: 72,
      focus: 'Data Structures, Algorithms, Programming',
      status: 'In Progress',
      statusClass: 'bg-primary-light text-primary border-primary/20',
      progressVariant: 'primary',
      icon: Code2,
    },
    {
      id: 2,
      title: 'Aptitude',
      progress: 80,
      focus: 'Quantitative, Logical Reasoning, Verbal Ability',
      status: 'Strong',
      statusClass: 'bg-green-50 text-status-success border-green-200',
      progressVariant: 'primary',
      icon: Brain,
    },
    {
      id: 3,
      title: 'Communication',
      progress: 68,
      focus: 'Speaking, Presentation, Interview Communication',
      status: 'Needs Improvement',
      statusClass: 'bg-amber-50 text-status-warning border-amber-200',
      progressVariant: 'warning',
      icon: MessageSquare,
    },
    {
      id: 4,
      title: 'HR Interview',
      progress: 55,
      focus: 'Self Introduction, Common Questions, Confidence',
      status: 'Needs Practice',
      statusClass: 'bg-amber-50 text-status-warning border-amber-200',
      progressVariant: 'warning',
      icon: UserCheck,
    },
  ]);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Solve 5 DSA Problems',
      category: 'Technical',
      duration: '45 min',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Complete Aptitude Practice Set',
      category: 'Aptitude',
      duration: '30 min',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Practice Self Introduction',
      category: 'Communication',
      duration: '20 min',
      status: 'Pending',
    },
    {
      id: 4,
      title: 'Practice HR Interview Questions',
      category: 'HR Interview',
      duration: '30 min',
      status: 'Pending',
    },
  ]);

  const mockTests = [
    {
      id: 1,
      title: 'Technical Mock Test',
      questions: '30 Questions',
      duration: '45 min',
      statLabel: 'Best Score',
      statValue: '78%',
      icon: Code2,
    },
    {
      id: 2,
      title: 'Aptitude Mock Test',
      questions: '25 Questions',
      duration: '30 min',
      statLabel: 'Best Score',
      statValue: '84%',
      icon: Brain,
    },
    {
      id: 3,
      title: 'HR Interview Practice',
      questions: '15 Questions',
      duration: '20 min',
      statLabel: 'Completed',
      statValue: '2 Sessions',
      icon: MessageSquare,
    },
  ];

  const checklistItems = [
    { id: 1, label: 'Resume Updated', completed: true },
    { id: 2, label: 'Technical Skills Reviewed', completed: true },
    { id: 3, label: 'Aptitude Practice Started', completed: true },
    { id: 4, label: 'Mock Interview', completed: false },
    { id: 5, label: 'HR Questions', completed: false },
    { id: 6, label: 'Company Research', completed: false },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Technical Mock Test', when: 'Tomorrow', icon: Code2 },
    { id: 2, title: 'Aptitude Practice', when: 'Wednesday', icon: Brain },
    { id: 3, title: 'Mock Interview', when: 'Friday', icon: UserCheck },
    { id: 4, title: 'Resume Review', when: 'Saturday', icon: FileCheck },
  ];

  return (
    <DashboardLayout title="Placement Preparation">
      <div className="space-y-8 pb-8 font-sans">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
                Placement Preparation Active
              </span>
              <span className="text-xs text-content-muted">Candidate: {username} • Target Cohort: Campus 2026/2027</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Placement Preparation
            </h2>
            <p className="text-sm text-content-muted leading-relaxed">
              Build the skills, confidence, and practice you need for your placement journey.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/readiness">
              <Button variant="outline" size="sm">
                View Readiness
              </Button>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED: PLACEMENT READINESS OVERVIEW                                    */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-line">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                Employability Diagnostic
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-content-heading mt-0.5">
                Placement Readiness
              </h3>
            </div>

            <div className="flex items-baseline gap-2.5 bg-primary-light px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-primary/20">
              <span className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">
                76%
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Overall Score
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Technical Skills — 72% */}
            <div className="p-4 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-content-heading flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-primary" />
                  Technical Skills
                </span>
                <span className="font-bold text-primary tabular-nums">72%</span>
              </div>
              <ProgressBar value={72} variant="primary" />
            </div>

            {/* Aptitude — 80% */}
            <div className="p-4 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-content-heading flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-primary" />
                  Aptitude
                </span>
                <span className="font-bold text-primary tabular-nums">80%</span>
              </div>
              <ProgressBar value={80} variant="primary" />
            </div>

            {/* Communication — 68% */}
            <div className="p-4 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-content-heading flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-status-warning" />
                  Communication
                </span>
                <span className="font-bold text-status-warning tabular-nums">68%</span>
              </div>
              <ProgressBar value={68} variant="warning" />
            </div>

            {/* Interview Readiness — 75% */}
            <div className="p-4 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-content-heading flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-primary" />
                  Interview Readiness
                </span>
                <span className="font-bold text-primary tabular-nums">75%</span>
              </div>
              <ProgressBar value={75} variant="primary" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PREPARATION AREAS (4 Cards)                                               */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-content-heading">
              Preparation Areas
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              Structured modules for technical screenings, aptitude tests, and interview rounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {prepAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.id}
                  className="bg-surface-card rounded-xl border border-line p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-primary/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 rounded-xl bg-surface border border-line flex items-center justify-center text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${area.statusClass}`}>
                        {area.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-content-heading">
                        {area.title}
                      </h4>
                      <p className="text-xs text-content-muted mt-1 leading-snug">
                        <span className="font-semibold text-content-heading">Focus:</span> {area.focus}
                      </p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-content-muted">Readiness</span>
                        <span className="font-bold text-content-heading tabular-nums">{area.progress}%</span>
                      </div>
                      <ProgressBar value={area.progress} variant={area.progressVariant} />
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert(`Starting ${area.title} practice (frontend prototype).`)}
                    className="w-full justify-center text-xs"
                  >
                    Practice Now
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TASKS & MOCK TESTS SPLIT SECTION                                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* TODAY'S PLACEMENT TASKS (7 Cols) */}
          <div className="lg:col-span-7 bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-line">
              <div>
                <h3 className="text-lg font-bold text-content-heading">
                  Today's Placement Tasks
                </h3>
                <p className="text-xs text-content-muted">Daily actions to stay consistent</p>
              </div>
              <span className="text-xs font-semibold text-primary">
                1 of 4 completed
              </span>
            </div>

            <div className="space-y-2.5">
              {tasks.map((task) => {
                const isCompleted = task.status === 'Completed';
                const isInProgress = task.status === 'In Progress';
                const isPending = task.status === 'Pending';

                return (
                  <div
                    key={task.id}
                    className="p-3.5 rounded-xl bg-surface border border-line flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                          ${isCompleted ? 'bg-green-100 text-status-success' : isInProgress ? 'bg-primary-light text-primary' : 'bg-white border border-line text-content-muted'}
                        `}
                      >
                        {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-3.5 h-3.5" />}
                      </div>

                      <div>
                        <span className={`font-semibold ${isCompleted ? 'text-content-muted line-through' : 'text-content-heading'}`}>
                          {task.title}
                        </span>
                        <div className="flex items-center gap-2 text-[11px] text-content-muted mt-0.5">
                          <span>{task.category}</span>
                          <span>•</span>
                          <span>{task.duration}</span>
                        </div>
                      </div>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border
                        ${isCompleted ? 'bg-green-50 text-status-success border-green-200' : ''}
                        ${isInProgress ? 'bg-primary-light text-primary border-primary/20' : ''}
                        ${isPending ? 'bg-amber-50 text-status-warning border-amber-200' : ''}
                      `}
                    >
                      {task.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOCK TESTS (5 Cols) */}
          <div className="lg:col-span-5 bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
            <div className="pb-3 border-b border-line">
              <h3 className="text-lg font-bold text-content-heading">
                Mock Tests
              </h3>
              <p className="text-xs text-content-muted">Simulation benchmarks with full reports</p>
            </div>

            <div className="space-y-3">
              {mockTests.map((test) => {
                const Icon = test.icon;
                return (
                  <div
                    key={test.id}
                    className="p-3.5 rounded-xl bg-surface border border-line flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white border border-line flex items-center justify-center text-primary flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-content-heading">{test.title}</h4>
                        <span className="text-[11px] text-content-muted">
                          {test.questions} • {test.duration}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-semibold text-content-muted block">
                        {test.statLabel}
                      </span>
                      <span className="font-bold text-primary tabular-nums">
                        {test.statValue}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => alert('Starting diagnostic mock test (frontend prototype).')}
              className="w-full justify-center text-xs mt-1"
            >
              Start Practice
            </Button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CHECKLIST & UPCOMING SCHEDULE SPLIT                                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* INTERVIEW READINESS CHECKLIST */}
          <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-line">
                <div>
                  <h3 className="text-lg font-bold text-content-heading">
                    Interview Readiness Checklist
                  </h3>
                  <p className="text-xs text-content-muted">Requirements for drive eligibility</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-status-success border border-green-200">
                  3 of 6 completed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                {checklistItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-surface border border-line flex items-center gap-2.5 text-xs"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold
                        ${item.completed ? 'bg-status-success text-white' : 'border border-line text-content-muted'}
                      `}
                    >
                      {item.completed ? '✓' : '○'}
                    </div>
                    <span className={item.completed ? 'font-semibold text-content-heading' : 'text-content-muted'}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-content-muted pt-2 border-t border-line">
              Complete remaining mock interview and company research to reach 100% checklist verification.
            </p>
          </div>

          {/* UPCOMING SCHEDULE */}
          <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="pb-3 border-b border-line">
                <h3 className="text-lg font-bold text-content-heading">
                  Upcoming
                </h3>
                <p className="text-xs text-content-muted">Scheduled assessments and review slots</p>
              </div>

              <div className="space-y-2.5 pt-3">
                {upcomingEvents.map((evt) => {
                  const Icon = evt.icon;
                  return (
                    <div
                      key={evt.id}
                      className="p-3 rounded-xl bg-surface border border-line flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-content-heading">{evt.title}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md bg-white border border-line text-[11px] font-medium text-content-muted">
                        {evt.when}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-line text-right">
              <span className="text-xs font-semibold text-primary hover:underline cursor-pointer">
                View Full Calendar →
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* FINAL CTA                                                                 */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-content-heading tracking-tight">
              Your Launch Is Getting Closer.
            </h3>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              Keep practicing, improving your skills, and building confidence for your placement journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              onClick={() => alert('Continuing active preparation sequence.')}
              className="w-full sm:w-auto justify-center"
            >
              Continue Preparation
            </Button>
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
