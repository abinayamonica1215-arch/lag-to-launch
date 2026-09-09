import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import {
  BookOpen,
  Target,
  Code2,
  MessageSquare,
  TrendingUp,
  Database,
  Clock,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Briefcase,
} from 'lucide-react';

/**
 * TrainingRecommendationPage Component
 * 
 * Part 4 — Screen 7: Training Recommendation
 * Route: /training-recommendation
 * 
 * High-priority and medium-priority learning modules structured to close skill gaps.
 * Navigation:
 * - View Learning Plan → /learning-plan
 * - Prepare for Placement → /placement-prep
 */
export default function TrainingRecommendationPage() {
  const recommendations = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      priority: 'High',
      duration: '4 Weeks',
      progress: 65,
      focus: 'Trees, Graphs, Recursion & Dynamic Programming',
      icon: Code2,
      variant: 'primary',
    },
    {
      id: 2,
      title: 'Communication for Interviews',
      priority: 'High',
      duration: '2 Weeks',
      progress: 30,
      focus: 'Speaking Fluency, Self Introduction, STAR Interview Framework',
      icon: MessageSquare,
      variant: 'warning',
    },
    {
      id: 3,
      title: 'Problem Solving Practice',
      priority: 'Medium',
      duration: '2 Weeks',
      progress: 40,
      focus: 'Company-specific coding patterns and logical reasoning challenges',
      icon: TrendingUp,
      variant: 'primary',
    },
    {
      id: 4,
      title: 'SQL for Placements',
      priority: 'Medium',
      duration: '2 Weeks',
      progress: 55,
      focus: 'Subqueries, JOIN operations, Window Functions & DB normal forms',
      icon: Database,
      variant: 'primary',
    },
  ];

  return (
    <DashboardLayout title="Training Recommendations">
      <div className="space-y-8 pb-8 font-sans">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
              Curated Curriculum
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Your Training Recommendations
            </h1>
            <p className="text-sm text-content-muted leading-relaxed">
              Focus on the areas that can improve your placement readiness and raise candidate percentile.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/learning-plan">
              <Button variant="outline" size="sm">
                View Full Learning Plan
              </Button>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RECOMMENDATION CARDS (4 Cards Grid)                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec) => {
            const Icon = rec.icon;
            const isHigh = rec.priority === 'High';

            return (
              <div
                key={rec.id}
                className="bg-surface-card rounded-xl border border-line p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-primary/40 transition-colors"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-surface border border-line flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border
                        ${isHigh ? 'bg-amber-50 text-status-warning border-amber-200' : 'bg-primary-light text-primary border-primary/20'}
                      `}
                    >
                      {rec.priority} Priority
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-content-heading">
                      {rec.title}
                    </h3>
                    <p className="text-xs text-content-muted mt-1 leading-relaxed">
                      {rec.focus}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-content-muted pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      Duration: <strong>{rec.duration}</strong>
                    </span>
                    <span className="font-semibold text-content-heading tabular-nums">
                      {rec.progress}% Completed
                    </span>
                  </div>

                  <ProgressBar value={rec.progress} variant={rec.variant} />
                </div>

                <div className="pt-3 border-t border-line flex items-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => alert(`Starting training on ${rec.title} (frontend prototype).`)}
                    className="flex-1 justify-center text-xs"
                  >
                    Start Training
                  </Button>
                  <Link to="/learning-plan" className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-center text-xs"
                    >
                      View Plan
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* GUIDANCE & ACTION CTA                                                    */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-content-heading tracking-tight">
              Ready to Advance to Interview Practice?
            </h3>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              Pair your weekly training modules with mock test benchmarks to validate proficiency gains.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link to="/learning-plan" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto justify-center">
                View Learning Plan
              </Button>
            </Link>
            <Link to="/placement-prep" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto justify-center">
                Prepare for Placement
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
