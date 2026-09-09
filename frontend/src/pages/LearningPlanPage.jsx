import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import { useUsername } from '../utils/user';
import {
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  Code2,
  MessageSquare,
  Database,
  Brain,
  Sparkles,
  Target,
} from 'lucide-react';

/**
 * LearningPlanPage Component
 * 
 * Personalized Learning Plan UI Prototype
 * Route: /learning-plan
 * 
 * Demonstrates the structured curriculum designed to bridge skill gaps.
 * Navigation:
 * - View Skill Gaps → /skill-gap
 * - Practice for Placement → /placement-prep
 */
export default function LearningPlanPage() {
  const [username] = useUsername();
  const [activeWeek, setActiveWeek] = useState(2); // Week 2 currently active

  const curriculumWeeks = [
    {
      week: 1,
      title: 'Arrays, Strings & Hash Tables',
      category: 'Data Structures',
      status: 'completed',
      duration: '6 Hours',
      topics: ['Two-pointer technique', 'Prefix sums', 'Sliding window algorithms'],
      progress: 100,
    },
    {
      week: 2,
      title: 'Linked Lists, Stacks & Queues',
      category: 'Data Structures',
      status: 'current',
      duration: '8 Hours',
      topics: ['Cycle detection', 'Monotonic stack patterns', 'Queue applications'],
      progress: 65,
    },
    {
      week: 3,
      title: 'Trees & Binary Search Trees',
      category: 'Data Structures',
      status: 'upcoming',
      duration: '8 Hours',
      topics: ['Tree traversals (DFS/BFS)', 'BST validation', 'Lowest Common Ancestor'],
      progress: 0,
    },
    {
      week: 4,
      title: 'Recursion & Dynamic Programming',
      category: 'Algorithms',
      status: 'upcoming',
      duration: '10 Hours',
      topics: ['Memoization vs Tabulation', '0/1 Knapsack', 'Longest Common Subsequence'],
      progress: 0,
    },
    {
      week: 5,
      title: 'Relational Database Design & SQL',
      category: 'Databases',
      status: 'upcoming',
      duration: '6 Hours',
      topics: ['Complex JOINs', 'Subqueries', 'Database normalization forms'],
      progress: 0,
    },
    {
      week: 6,
      title: 'Interview Communication & HR Prep',
      category: 'Soft Skills',
      status: 'upcoming',
      duration: '5 Hours',
      topics: ['Self Introduction mastery', 'STAR technique practice', 'Body language & tone'],
      progress: 0,
    },
  ];

  const todayLessons = [
    {
      id: 1,
      title: 'Implement Queue Using Stacks',
      type: 'Coding Practice',
      duration: '35 min',
      completed: true,
    },
    {
      id: 2,
      title: 'Reverse Nodes in k-Group Analysis',
      type: 'Video Lecture',
      duration: '25 min',
      completed: false,
    },
    {
      id: 3,
      title: 'Weekly Knowledge Check #2',
      type: 'Quiz Assessment',
      duration: '20 min',
      completed: false,
    },
  ];

  return (
    <DashboardLayout title="Learning Plan">
      <div className="space-y-8 pb-8 font-sans">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
                Active Curriculum
              </span>
              <span className="text-xs text-content-muted">Student: {username}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Personalized Learning Plan
            </h1>
            <p className="text-sm text-content-muted leading-relaxed">
              Step-by-step curriculum to close identified skill gaps and achieve placement readiness.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/skill-gap">
              <Button variant="outline" size="sm">
                View Skill Gaps
              </Button>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACTIVE PLAN PROGRESS SUMMARY CARD                                        */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-line">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                Cohort Progression
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-content-heading mt-0.5">
                Software Development Career Track
              </h2>
            </div>

            <div className="flex items-baseline gap-2 bg-primary-light px-4 py-2 rounded-xl border border-primary/20">
              <span className="text-3xl font-bold text-primary tabular-nums">Week 2</span>
              <span className="text-xs text-primary font-semibold">of 6</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-content-heading">Overall Plan Completion</span>
              <span className="font-bold text-primary tabular-nums">28% Completed</span>
            </div>
            <ProgressBar value={28} variant="primary" />
            <div className="flex justify-between items-center text-[11px] text-content-muted pt-1">
              <span>Target finish: 4 weeks ahead of campus screening</span>
              <span className="text-status-success font-semibold">On Schedule</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CURRICULUM MODULES (Week-by-Week)                                        */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-content-heading">
              Curriculum Roadmap
            </h3>
            <p className="text-xs text-content-muted mt-0.5">
              Structured modules ordered by placement screening prerequisite logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {curriculumWeeks.map((wk) => {
              const isComp = wk.status === 'completed';
              const isCur = wk.status === 'current';

              return (
                <div
                  key={wk.week}
                  className={`bg-surface-card rounded-xl border p-5 shadow-xs flex flex-col justify-between space-y-4 transition-colors
                    ${isCur ? 'border-primary ring-2 ring-primary/20' : 'border-line hover:border-slate-300'}
                  `}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md
                        ${isComp ? 'bg-green-50 text-status-success border border-green-200' : ''}
                        ${isCur ? 'bg-primary-light text-primary border border-primary/20' : ''}
                        ${wk.status === 'upcoming' ? 'bg-surface border border-line text-content-muted' : ''}
                      `}>
                        Week {wk.week} • {wk.category}
                      </span>

                      {isComp && <CheckCircle2 className="w-4 h-4 text-status-success" />}
                      {isCur && <span className="text-xs font-bold text-primary">In Progress</span>}
                    </div>

                    <h4 className="text-base font-bold text-content-heading leading-snug">
                      {wk.title}
                    </h4>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] uppercase font-semibold text-content-muted block">
                        Core Concepts:
                      </span>
                      <ul className="space-y-1 text-xs text-content-muted">
                        {wk.topics.map((top, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{top}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1 pt-2">
                      <div className="flex justify-between text-xs text-content-muted">
                        <span>Progress</span>
                        <span className="font-semibold text-content-heading tabular-nums">{wk.progress}%</span>
                      </div>
                      <ProgressBar value={wk.progress} variant={isComp ? 'success' : 'primary'} />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-line">
                    <Button
                      variant={isCur ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => alert(`Opening ${wk.title} lessons (frontend prototype).`)}
                      className="w-full justify-center text-xs"
                    >
                      {isComp ? 'Review Week' : isCur ? 'Continue Learning' : 'Preview Syllabus'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TODAY'S LESSONS & CALLOUT                                                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-line">
              <div>
                <h4 className="text-lg font-bold text-content-heading">
                  Today's Study Plan
                </h4>
                <p className="text-xs text-content-muted">Recommended tasks for today's study block</p>
              </div>
              <span className="text-xs font-semibold text-primary">1 of 3 completed</span>
            </div>

            <div className="space-y-2.5">
              {todayLessons.map((les) => (
                <div
                  key={les.id}
                  className="p-3.5 rounded-xl bg-surface border border-line flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                        ${les.completed ? 'bg-green-100 text-status-success' : 'bg-primary-light text-primary'}
                      `}
                    >
                      {les.completed ? <CheckCircle2 className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                    </div>

                    <div>
                      <span className={`font-semibold ${les.completed ? 'line-through text-content-muted' : 'text-content-heading'}`}>
                        {les.title}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] text-content-muted mt-0.5">
                        <span>{les.type}</span>
                        <span>•</span>
                        <span>{les.duration}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant={les.completed ? 'outline' : 'primary'}
                    size="sm"
                    onClick={() => alert(`Starting ${les.title}`)}
                    className="text-xs py-1 px-3"
                  >
                    {les.completed ? 'Revisit' : 'Start'}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
            <div className="pb-3 border-b border-line">
              <h4 className="text-lg font-bold text-content-heading">
                Weekly Study Habit
              </h4>
              <p className="text-xs text-content-muted">Track your dedicated prep velocity</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-3 rounded-xl bg-surface border border-line">
                <span className="text-content-muted">Target Hours / Week</span>
                <span className="font-bold text-content-heading">12 Hours</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-surface border border-line">
                <span className="text-content-muted">Hours Completed This Week</span>
                <span className="font-bold text-primary">7.5 Hours</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-surface border border-line">
                <span className="text-content-muted">Problems Solved</span>
                <span className="font-bold text-status-success">18 DSA Problems</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-content-muted">
              <span className="font-semibold text-content-heading">Next Assessment:</span> Weekly benchmark test scheduled for Sunday 10:00 AM.
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* FINAL CTA                                                                 */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-content-heading tracking-tight">
              Combine Learning with Practice.
            </h3>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              Consistently test your mastery against mock interview benchmarks to convert coursework into placement offers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link to="/placement-prep" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto justify-center">
                Practice for Placement
              </Button>
            </Link>
            <Link to="/skill-gap" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto justify-center">
                View Skill Gaps
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
