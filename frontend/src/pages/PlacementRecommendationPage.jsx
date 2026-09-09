import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import {
  Briefcase,
  Code2,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle2,
  Building,
  Sparkles,
} from 'lucide-react';

/**
 * PlacementRecommendationPage Component
 * 
 * Part 4 — Screen 8: Placement Recommendation
 * Route: /placement-recommendation
 * 
 * Role cards matched against student competencies.
 * Navigation:
 * - Prepare for Role → /placement-prep
 */
export default function PlacementRecommendationPage() {
  const matchedRoles = [
    {
      id: 1,
      title: 'Software Developer',
      match: 82,
      description: 'Design and develop scalable backends, microservices, and enterprise logic with clean algorithms.',
      matchingSkills: ['Python', 'Data Structures', 'Problem Solving'],
      openings: '14 Active Campus Drives',
      icon: Code2,
      isTopMatch: true,
    },
    {
      id: 2,
      title: 'Data Analyst',
      match: 74,
      description: 'Analyze complex datasets, generate strategic BI dashboards, and query relational SQL schemas.',
      matchingSkills: ['SQL', 'Python', 'Analytical Thinking'],
      openings: '9 Active Campus Drives',
      icon: BarChart3,
      isTopMatch: false,
    },
    {
      id: 3,
      title: 'Web Developer',
      match: 70,
      description: 'Develop responsive single-page web applications, integrate REST APIs, and manage state.',
      matchingSkills: ['JavaScript', 'React', 'Web Development'],
      openings: '11 Active Campus Drives',
      icon: Globe,
      isTopMatch: false,
    },
  ];

  return (
    <DashboardLayout title="Placement Opportunities">
      <div className="space-y-8 pb-8 font-sans">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
              Role Match Diagnostic
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Your Placement Recommendations
            </h1>
            <p className="text-sm text-content-muted leading-relaxed">
              Explore the roles that best match your current skills, projects, and interview preparation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/placement-prep">
              <Button variant="outline" size="sm">
                View Preparation Areas
              </Button>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MATCHED ROLE CARDS (3 Cards Grid)                                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matchedRoles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.id}
                className="bg-surface-card rounded-xl border border-line p-6 shadow-xs flex flex-col justify-between space-y-5 hover:border-primary/40 transition-colors"
              >
                <div className="space-y-4">
                  
                  {/* Top Match Badge & Icon */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-surface border border-line flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary-light text-primary border border-primary/20">
                        {role.match}% Match
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-content-heading">
                      {role.title}
                    </h3>
                    <p className="text-xs text-content-muted mt-1 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  {/* Match Progress Bar (Primary Blue) */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-content-muted">Profile Fit</span>
                      <span className="font-bold text-primary tabular-nums">{role.match}%</span>
                    </div>
                    <ProgressBar value={role.match} variant="primary" />
                  </div>

                  {/* Why It Matches Skills */}
                  <div className="pt-2 border-t border-line space-y-2">
                    <span className="text-[11px] uppercase font-semibold text-content-muted block">
                      Why it matches your profile:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {role.matchingSkills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface border border-line text-xs font-medium text-content-body"
                        >
                          <CheckCircle2 className="w-3 h-3 text-status-success" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-[11px] text-content-muted block pt-1">
                    🏢 {role.openings}
                  </span>
                </div>

                <div className="pt-3 border-t border-line">
                  <Link to="/placement-prep" className="w-full block">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full justify-center text-xs font-semibold gap-1.5"
                    >
                      Prepare for Role
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* SUMMARY ADVISORY BANNER                                                   */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-content-heading tracking-tight">
              Ready to Target Multiple Roles?
            </h3>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              Strengthen core Data Structures and Communication to qualify across both Software Development and Data Analytics campus hiring criteria.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link to="/placement-prep" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto justify-center">
                Prepare for Placement
              </Button>
            </Link>
            <Link to="/readiness" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto justify-center">
                View Readiness
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
