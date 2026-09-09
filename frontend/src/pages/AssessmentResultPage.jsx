import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Brain,
  Code2,
  TrendingUp,
  MessageSquare,
  Award,
  Sparkles,
} from 'lucide-react';

/**
 * AssessmentResultPage Component
 * 
 * Part 4 — Screen 6: Assessment Result
 * Route: /assessment-result
 * 
 * Displays score summary, 4-pillar breakdown, strengths, and attention areas.
 * Navigates to /training-recommendation.
 */
export default function AssessmentResultPage() {
  const breakdown = [
    { title: 'Aptitude', score: 82, icon: Brain, variant: 'primary' },
    { title: 'Technical', score: 70, icon: Code2, variant: 'primary' },
    { title: 'Logical Reasoning', score: 78, icon: TrendingUp, variant: 'primary' },
    { title: 'Communication', score: 68, icon: MessageSquare, variant: 'warning' },
  ];

  return (
    <DashboardLayout title="Assessment Results">
      <div className="space-y-8 pb-8 font-sans max-w-4xl mx-auto">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
              Evaluation Completed
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Assessment Results
            </h1>
            <p className="text-sm text-content-muted leading-relaxed">
              Here’s a snapshot of your current placement readiness.
            </p>
          </div>

          <Link to="/placement-assessment">
            <Button variant="outline" size="sm">
              Retake Assessment
            </Button>
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* LARGE SCORE CARD                                                         */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-md">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-status-success border border-green-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Good Progress
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-content-heading">
              Candidate Readiness: 76%
            </h2>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              You demonstrate solid foundation skills in aptitude and logical problem solving. Targeted training in technical DSA and interview communication will push your score above the 85% placement benchmark.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary-light p-6 rounded-xl border border-primary/20 min-w-[180px]">
            <span className="text-5xl font-bold text-primary tabular-nums">
              76%
            </span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">
              Overall Readiness
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4-PILLAR BREAKDOWN                                                        */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
          <div className="pb-3 border-b border-line">
            <h3 className="text-lg font-bold text-content-heading">
              Competency Breakdown
            </h3>
            <p className="text-xs text-content-muted">Diagnostic performance by assessment domain</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            {breakdown.map((item) => {
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
        {/* STRENGTHS & NEEDS ATTENTION SPLIT                                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* YOUR STRENGTHS (Success Green #16A34A) */}
          <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="pb-3 border-b border-line flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-content-heading">
                    Your Strengths
                  </h3>
                  <p className="text-xs text-content-muted">High-performing competencies</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-status-success border border-green-200">
                  Green Zone
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl bg-green-50/50 border border-green-200 flex items-start gap-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-status-success flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-content-heading block">Strong Aptitude (82%)</span>
                    <span className="text-content-muted mt-0.5 block">Consistent speed and accuracy in quantitative formulas.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-green-50/50 border border-green-200 flex items-start gap-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-status-success flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-content-heading block">Good Logical Reasoning (78%)</span>
                    <span className="text-content-muted mt-0.5 block">Analytical deduction and pattern recognition above average.</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-content-muted pt-2 border-t border-line">
              Maintain high percentiles with weekly mock tests.
            </p>
          </div>

          {/* NEEDS ATTENTION (Warning Orange #F59E0B) */}
          <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="pb-3 border-b border-line flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-content-heading">
                    Needs Attention
                  </h3>
                  <p className="text-xs text-content-muted">High-priority improvement areas</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-status-warning border border-amber-200">
                  Priority Focus
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200 flex items-start gap-3 text-xs">
                  <AlertCircle className="w-4 h-4 text-status-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-content-heading block">Technical Skills (70%)</span>
                    <span className="text-content-muted mt-0.5 block">Deepen understanding of Trees, Graphs, and Recursion.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200 flex items-start gap-3 text-xs">
                  <AlertCircle className="w-4 h-4 text-status-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-content-heading block">Communication (68%)</span>
                    <span className="text-content-muted mt-0.5 block">Practice self-introduction and structured STAR responses.</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-content-muted pt-2 border-t border-line">
              Targeted practice in these areas directly increases placement shortlist rates.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* NEXT STEPS CTA                                                           */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-content-heading tracking-tight">
              Ready to Close These Skill Gaps?
            </h3>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              We’ve mapped specific training modules based on your assessment results.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link to="/training-recommendation" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center gap-1.5"
              >
                View Training Recommendations
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
