import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import { useUsername, getInitials } from '../utils/user';
import {
  User,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  FolderGit2,
  Flame,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Plus,
  Edit3,
  BookOpen,
} from 'lucide-react';

/**
 * CareerProfilePage Component
 * 
 * Part 2 — Student Career Profile UI Prototype
 * Route: /career-profile
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
export default function CareerProfilePage() {
  const [username] = useUsername();
  const initials = getInitials(username);
  const userSlug = username.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const technicalSkills = [
    { name: 'Python', level: 'Advanced', percent: 90 },
    { name: 'Java', level: 'Intermediate', percent: 75 },
    { name: 'C++', level: 'Intermediate', percent: 70 },
    { name: 'JavaScript', level: 'Intermediate', percent: 72 },
    { name: 'React', level: 'Beginner', percent: 50 },
    { name: 'SQL', level: 'Intermediate', percent: 78 },
    { name: 'Data Structures', level: 'Intermediate', percent: 68 },
    { name: 'Git', level: 'Beginner', percent: 60 },
  ];

  const certifications = [
    { id: 1, title: 'Python Programming Certification', issuer: 'National Skills Platform', status: 'Completed' },
    { id: 2, title: 'SQL Fundamentals', issuer: 'Database Academy', status: 'Completed' },
    { id: 3, title: 'Web Development Basics', issuer: 'OpenEd Consortium', status: 'Completed' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      technologies: ['Python', 'SQL'],
      description: 'Desktop and CLI administrative system managing student transcripts and recovery roadmaps.',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Appointment Booking System',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: 'Web application facilitating real-time counselor consultation and placement slot bookings.',
      status: 'Completed',
    },
  ];

  const achievements = [
    { id: 1, title: '12 Day Learning Streak', icon: Flame, color: 'text-status-warning' },
    { id: 2, title: '3 Certifications', icon: Award, color: 'text-primary' },
    { id: 3, title: '2 Projects Completed', icon: FolderGit2, color: 'text-status-success' },
    { id: 4, title: '8 Study Sessions Completed', icon: BookOpen, color: 'text-primary' },
  ];

  return (
    <DashboardLayout title="Career Profile">
      <div className="space-y-8 pb-8 font-sans">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
                Employability Profile
              </span>
              <span className="text-xs text-content-muted">Public Link: verified.lag2launch/{userSlug || 'student'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Career Profile
            </h2>
            <p className="text-sm text-content-muted leading-relaxed">
              Showcase your skills, achievements, and placement readiness.
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
        {/* PROFILE HEADER CARD                                                       */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-line">
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-light border-2 border-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                {initials}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-content-heading">
                    {username}
                  </h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-status-success border border-green-200">
                    Verified Candidate
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-content-muted">
                  B.E. Computer Science Engineering • ABC Engineering College
                </p>
                <div className="flex items-center gap-3 text-xs text-content-muted pt-1">
                  <span>Graduation: <strong>2027</strong></span>
                  <span>•</span>
                  <span>Target Role: <strong className="text-primary">Software Developer</strong></span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => alert('Edit Profile modal (frontend prototype).')}
              className="gap-2 self-start lg:self-center"
            >
              <Edit3 className="w-3.5 h-3.5" />
              Edit Profile
            </Button>
          </div>

          {/* Profile Completion Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-content-heading">
                Profile Completion
              </span>
              <span className="font-bold text-primary tabular-nums">82%</span>
            </div>
            <ProgressBar value={82} variant="primary" />
            <p className="text-[11px] text-content-muted">
              Add your recent project GitHub link and 1 technical certificate to reach 100% verified status.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CAREER SUMMARY & ACHIEVEMENTS SPLIT                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* CAREER SUMMARY (7 Cols) */}
          <div className="lg:col-span-7 bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="pb-3 border-b border-line">
                <h4 className="text-lg font-bold text-content-heading">
                  Career Summary
                </h4>
                <p className="text-xs text-content-muted">Executive statement for recruiter review</p>
              </div>

              <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
                “Computer Science student building strong foundations in programming, data structures, problem solving, and placement preparation.”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-surface border border-line">
                  <span className="text-[10px] uppercase font-semibold text-content-muted block mb-1">
                    Career Goal
                  </span>
                  <span className="font-bold text-content-heading">Software Developer</span>
                </div>

                <div className="p-3 rounded-xl bg-surface border border-line">
                  <span className="text-[10px] uppercase font-semibold text-content-muted block mb-1">
                    Preferred Domain
                  </span>
                  <span className="font-bold text-content-heading">Software Development</span>
                </div>

                <div className="p-3 rounded-xl bg-surface border border-line">
                  <span className="text-[10px] uppercase font-semibold text-content-muted block mb-1">
                    Career Stage
                  </span>
                  <span className="font-bold text-primary">Placement Prep</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-line flex items-center gap-2 text-xs text-content-muted">
              <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Optimized for Software Engineering Campus recruitment cycles.</span>
            </div>
          </div>

          {/* ACHIEVEMENTS (5 Cols) */}
          <div className="lg:col-span-5 bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="pb-3 border-b border-line">
                <h4 className="text-lg font-bold text-content-heading">
                  Achievements
                </h4>
                <p className="text-xs text-content-muted">Milestones unlocked during preparation</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                {achievements.map((ach) => {
                  const Icon = ach.icon;
                  return (
                    <div
                      key={ach.id}
                      className="p-3.5 rounded-xl bg-surface border border-line flex flex-col items-center text-center space-y-1.5"
                    >
                      <div className={`w-8 h-8 rounded-full bg-white border border-line flex items-center justify-center ${ach.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-content-heading leading-tight">
                        {ach.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <span className="text-[11px] text-content-muted text-center block pt-2 border-t border-line">
              Badges automatically update upon practice milestone completion.
            </span>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* TECHNICAL SKILLS SECTION                                                  */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
          <div className="pb-3 border-b border-line flex justify-between items-center">
            <div>
              <h4 className="text-lg font-bold text-content-heading">
                Technical Skills
              </h4>
              <p className="text-xs text-content-muted">Proficiency levels verified through assessments</p>
            </div>
            <span className="text-xs text-content-muted">8 Assessed Competencies</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-xl bg-surface border border-line space-y-2 hover:border-primary/40 transition-colors"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-content-heading">{skill.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border
                    ${skill.level === 'Advanced' ? 'bg-green-50 text-status-success border-green-200' : ''}
                    ${skill.level === 'Intermediate' ? 'bg-primary-light text-primary border-primary/20' : ''}
                    ${skill.level === 'Beginner' ? 'bg-amber-50 text-status-warning border-amber-200' : ''}
                  `}>
                    {skill.level}
                  </span>
                </div>
                <ProgressBar value={skill.percent} variant="primary" />
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CERTIFICATIONS & PROJECTS SPLIT                                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* CERTIFICATIONS (5 Cols) */}
          <div className="lg:col-span-5 bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-line">
              <div>
                <h4 className="text-lg font-bold text-content-heading">
                  Certifications
                </h4>
                <p className="text-xs text-content-muted">3 Certifications</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => alert('Add Certification modal (frontend prototype).')}
                className="gap-1 text-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Certification
              </Button>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-xl bg-surface border border-line flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white border border-line flex items-center justify-center text-primary flex-shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-content-heading">{cert.title}</h5>
                      <span className="text-[11px] text-content-muted">{cert.issuer}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-status-success border border-green-200">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS (7 Cols) */}
          <div className="lg:col-span-7 bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-4">
            <div className="pb-3 border-b border-line">
              <h4 className="text-lg font-bold text-content-heading">
                Projects
              </h4>
              <p className="text-xs text-content-muted">Highlighted engineering deliverables</p>
            </div>

            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-surface border border-line space-y-2.5 hover:border-primary/40 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-primary" />
                      <h5 className="text-sm font-bold text-content-heading">
                        {proj.title}
                      </h5>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-status-success border border-green-200">
                      {proj.status}
                    </span>
                  </div>

                  <p className="text-xs text-content-muted leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white border border-line text-[11px] font-medium text-content-body"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* EMPLOYABILITY SNAPSHOT                                                    */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 shadow-xs space-y-5">
          <div className="pb-3 border-b border-line">
            <h4 className="text-lg font-bold text-content-heading">
              Employability Snapshot
            </h4>
            <p className="text-xs text-content-muted">Holistic competency breakdown</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Academic Progress — 78% */}
            <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-content-heading">Academic Progress</span>
                <span className="font-bold text-primary tabular-nums">78%</span>
              </div>
              <ProgressBar value={78} variant="primary" />
            </div>

            {/* Technical Skills — 72% */}
            <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-content-heading">Technical Skills</span>
                <span className="font-bold text-primary tabular-nums">72%</span>
              </div>
              <ProgressBar value={72} variant="primary" />
            </div>

            {/* Communication — 68% */}
            <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-content-heading">Communication</span>
                <span className="font-bold text-status-warning tabular-nums">68%</span>
              </div>
              <ProgressBar value={68} variant="warning" />
            </div>

            {/* Placement Readiness — 76% */}
            <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-content-heading">Placement Readiness</span>
                <span className="font-bold text-primary tabular-nums">76%</span>
              </div>
              <ProgressBar value={76} variant="primary" />
            </div>

            {/* Profile Completion — 82% */}
            <div className="p-3.5 rounded-xl bg-surface border border-line space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-content-heading">Profile Completion</span>
                <span className="font-bold text-primary tabular-nums">82%</span>
              </div>
              <ProgressBar value={82} variant="primary" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL CTA                                                                 */}
        {/* ========================================================================= */}
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-content-heading tracking-tight">
              Your Profile Tells Your Career Story.
            </h3>
            <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
              Keep your skills, projects, certifications, and achievements updated as you progress.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              onClick={() => alert('Updating profile details (frontend prototype).')}
              className="w-full sm:w-auto justify-center"
            >
              Update Profile
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
