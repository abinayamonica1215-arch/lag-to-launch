import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import {
  Code2,
  BarChart3,
  Globe,
  Cpu,
  Cloud,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

/**
 * CareerSelectionPage Component
 * 
 * Part 4 — Screen 2: Career Selection
 * Route: /career-selection
 * 
 * Clean, selectable career track interface.
 * React state only. Navigates to /ai-analysis on continue.
 */
export default function CareerSelectionPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('software-developer');

  const careerTracks = [
    {
      id: 'software-developer',
      title: 'Software Developer',
      description: 'Build robust core software, solve algorithmic problems, and architect backend systems.',
      icon: Code2,
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      description: 'Query business databases, analyze performance metrics, and build data visualization models.',
      icon: BarChart3,
    },
    {
      id: 'web-developer',
      title: 'Web Developer',
      description: 'Craft dynamic responsive user interfaces and modern cloud-connected frontend web applications.',
      icon: Globe,
    },
    {
      id: 'ai-ml-engineer',
      title: 'AI / ML Engineer',
      description: 'Train machine learning models, build predictive neural networks, and automate workflows.',
      icon: Cpu,
    },
    {
      id: 'cloud-devops',
      title: 'Cloud / DevOps',
      description: 'Deploy scalable cloud infrastructure, manage container clusters, and automate CI/CD pipelines.',
      icon: Cloud,
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect digital assets, audit security vulnerabilities, and ensure enterprise compliance.',
      icon: ShieldCheck,
    },
  ];

  const handleContinue = () => {
    navigate('/ai-analysis');
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between p-4 sm:p-6 font-sans">
      {/* Top Header */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xs shadow-xs">
            L2L
          </div>
          <span className="font-bold text-base text-content-heading tracking-tight">
            Lag to Launch
          </span>
        </Link>
        <span className="text-xs font-semibold text-content-muted">
          Step 2 of 4 • Target Career
        </span>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto w-full my-auto py-6">
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-8 shadow-xs space-y-6">
          
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
              Career Alignment
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Choose Your Career Direction
            </h1>
            <p className="text-sm text-content-muted leading-relaxed">
              Tell us what kind of role you want to prepare for. We’ll calibrate your skills and roadmap accordingly.
            </p>
          </div>

          {/* Career Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
            {careerTracks.map((track) => {
              const Icon = track.icon;
              const isSelected = selectedRole === track.id;

              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedRole(track.id)}
                  className={`p-5 rounded-xl border text-left transition-all flex flex-col justify-between space-y-3 relative
                    ${isSelected
                      ? 'border-primary bg-primary-light ring-2 ring-primary/20 shadow-xs'
                      : 'border-line bg-surface hover:border-slate-300'
                    }
                  `}
                >
                  <div className="flex justify-between items-start">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center
                        ${isSelected ? 'bg-primary text-white' : 'bg-white border border-line text-primary'}
                      `}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </div>

                  <div>
                    <h3 className={`font-bold text-sm leading-tight
                      ${isSelected ? 'text-primary' : 'text-content-heading'}
                    `}>
                      {track.title}
                    </h3>
                    <p className="text-xs text-content-muted mt-1 leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link to="/academic-profile" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto justify-center gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>

            <Button
              variant="primary"
              size="md"
              onClick={handleContinue}
              className="w-full sm:w-auto justify-center gap-1.5"
            >
              Continue to AI Analysis
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="text-center py-4 text-xs text-content-muted">
        © Lag to Launch • AI-Powered Student Career Acceleration Platform
      </footer>
    </div>
  );
}
