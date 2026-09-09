import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Sparkles, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

/**
 * AIAnalysisPage Component
 * 
 * Part 4 — Screen 3: AI Analysis Loading Screen
 * Route: /ai-analysis
 * 
 * Professional simulation of AI diagnostic evaluation.
 * Visual simulation only. Navigates to /student-path upon completion.
 */
export default function AIAnalysisPage() {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(2); // Step 3 in progress
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    { id: 1, title: 'Academic Profile', desc: 'Arrear diagnostics & credit clearance evaluated' },
    { id: 2, title: 'Career Goal', desc: 'Software Developer role requirements matched' },
    { id: 3, title: 'Skill Analysis', desc: 'Benchmarking DSA, SQL, and aptitude proficiencies' },
    { id: 4, title: 'Career Readiness', desc: 'Generating personalized dual-track milestone roadmap' },
  ];

  // Visual simulation timer: Automatically advance or allow manual skip
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentStepIndex(3);
    }, 1800);

    const timer2 = setTimeout(() => {
      setIsCompleted(true);
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleProceed = () => {
    navigate('/student-path');
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between p-4 sm:p-6 font-sans">
      {/* Header */}
      <header className="max-w-3xl mx-auto w-full flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xs shadow-xs">
            L2L
          </div>
          <span className="font-bold text-base text-content-heading tracking-tight">
            Lag to Launch
          </span>
        </Link>
        <span className="text-xs font-semibold text-content-muted">
          Step 3 of 4 • Profile Diagnostic
        </span>
      </header>

      {/* Main Analysis Simulation Card */}
      <main className="max-w-xl mx-auto w-full my-auto py-6">
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-8 shadow-xs text-center space-y-6">
          
          {/* Animated AI Pulse Indicator */}
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-primary shadow-xs">
                {isCompleted ? (
                  <CheckCircle2 className="w-8 h-8 text-status-success animate-in zoom-in-50 duration-300" />
                ) : (
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                )}
              </div>
              {!isCompleted && (
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" />
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Analysis
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              {isCompleted ? 'Profile Analysis Complete!' : 'Analyzing Your Profile'}
            </h1>
            <p className="text-sm text-content-muted max-w-md mx-auto leading-relaxed">
              We’re reviewing your academic background, skills, and career goals to structure your personal path.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="space-y-3 pt-2 text-left">
            {steps.map((step, idx) => {
              const isStepDone = isCompleted || idx < currentStepIndex;
              const isCurrent = !isCompleted && idx === currentStepIndex;
              const isPending = !isCompleted && idx > currentStepIndex;

              return (
                <div
                  key={step.id}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors
                    ${isStepDone ? 'bg-green-50/50 border-green-200' : ''}
                    ${isCurrent ? 'bg-primary-light border-primary/30 ring-2 ring-primary/20' : ''}
                    ${isPending ? 'bg-surface border-line opacity-60' : ''}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                        ${isStepDone ? 'bg-status-success text-white' : ''}
                        ${isCurrent ? 'bg-primary text-white animate-pulse' : ''}
                        ${isPending ? 'bg-white border border-line text-content-muted' : ''}
                      `}
                    >
                      {isStepDone ? '✓' : step.id}
                    </div>

                    <div>
                      <h4 className={`text-xs font-bold
                        ${isCurrent ? 'text-primary' : isStepDone ? 'text-content-heading' : 'text-content-muted'}
                      `}>
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-content-muted">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase
                    ${isStepDone ? 'text-status-success' : ''}
                    ${isCurrent ? 'text-primary font-bold animate-pulse' : ''}
                    ${isPending ? 'text-content-muted' : ''}
                  `}>
                    {isStepDone ? 'Complete' : isCurrent ? 'Analyzing...' : 'Waiting'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={handleProceed}
              className="w-full justify-center gap-1.5 text-sm font-semibold"
            >
              {isCompleted ? 'View Your Personalized Path' : 'Skip & View Student Path'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-[11px] text-content-muted">
            All analysis algorithms and readiness models shown here are prototype demonstrations.
          </p>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-content-muted">
        © Lag to Launch • AI-Powered Student Career Acceleration Platform
      </footer>
    </div>
  );
}
