import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/forms/InputField';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { setStoredUsername } from '../utils/user';

/**
 * LoginPage Component
 * 
 * Step 4 — Prototype Frontend Login Screen
 * - Responsive 2-column layout (Brand / Journey panel on Left, Form Card on Right)
 * - Frontend-only state simulation (No API, backend, database, or real auth)
 * - Strict adherence to Lag to Launch color palette:
 *   Primary (#4F46E5), Primary Dark (#3730A3), Primary Light (#EEF2FF),
 *   Accent (#06B6D4), Background (#F8FAFC), Card (#FFFFFF),
 *   Headings (#0F172A), Body (#475569), Muted (#64748B), Border (#E2E8F0),
 *   Error (#DC2626)
 */
export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoError, setShowDemoError] = useState(false);
  const [demoNotice, setDemoNotice] = useState('');

  // Handle Form Submission (Frontend Simulation Only)
  const handleSubmit = (e) => {
    e.preventDefault();
    setDemoNotice('');
    setShowDemoError(false);
    setIsLoading(true);

    // Simulate short network latency for presentation purposes
    setTimeout(() => {
      setIsLoading(false);
      const cleanUsername = username.trim();
      if (!cleanUsername || !password.trim()) {
        setShowDemoError(true);
      } else {
        // Dynamically store the exact username entered by the user
        setStoredUsername(cleanUsername);
        navigate('/dashboard');
      }
    }, 600);
  };

  // Toggle demo error state for review
  const handleToggleError = () => {
    setShowDemoError((prev) => !prev);
    setDemoNotice('');
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ========================================================================= */}
        {/* LEFT SIDE: BRANDING & PROGRESSION PANEL (Desktop column 6)               */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pr-4 order-2 lg:order-1">
          
          {/* Brand Header */}
          <div className="space-y-3">
            <span className="badge-primary">
              Student Career Platform
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight">
              Lag to Launch
            </h1>
            <p className="text-base font-semibold text-primary">
              From Academic Recovery to Employability
            </p>
            <p className="text-sm sm:text-base text-content-body leading-relaxed max-w-lg">
              Continue your journey from academic recovery and skill development to placement readiness.
            </p>
          </div>

          {/* Simple Visual Progression Card */}
          <div className="bg-surface-card rounded-2xl border border-line p-6 shadow-sm space-y-3.5">
            <div className="flex justify-between items-center pb-3 border-b border-line">
              <span className="text-xs font-semibold uppercase tracking-wider text-content-heading">
                Continuous Student Journey
              </span>
              <span className="text-[11px] font-medium text-accent">
                Unified Track
              </span>
            </div>

            {/* Step 1: Academic Recovery */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface border border-line">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-status-warning flex items-center justify-center font-bold text-xs flex-shrink-0 border border-amber-200">
                1
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-content-heading block">Academic Recovery</span>
                <span className="text-[11px] text-content-muted block">Arrear diagnostics & remedial schedules</span>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center -my-2 text-content-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 2: Skill Development */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface border border-line">
              <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center font-bold text-xs flex-shrink-0 border border-primary/20">
                2
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-content-heading block">Skill Development</span>
                <span className="text-[11px] text-content-muted block">Technical stacks, DSA & project portfolio</span>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center -my-2 text-content-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 3: Career Readiness */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface border border-line">
              <div className="w-7 h-7 rounded-lg bg-accent-light text-accent flex items-center justify-center font-bold text-xs flex-shrink-0 border border-accent/20">
                3
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-content-heading block">Career Readiness</span>
                <span className="text-[11px] text-content-muted block">Aptitude rounds, soft skills & mock tests</span>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center -my-2 text-content-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 4: Launch */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-green-50 border border-green-200">
              <div className="w-7 h-7 rounded-lg bg-green-100 text-status-success flex items-center justify-center font-bold text-xs flex-shrink-0 border border-green-200">
                ✓
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-slate-900 block">Launch</span>
                <span className="text-[11px] text-content-muted block">Placement-ready verified candidate profile</span>
              </div>
            </div>

          </div>

          {/* Demonstration Notice */}
          <div className="p-3.5 rounded-xl bg-primary-light/60 border border-primary/20 flex items-center justify-between text-xs text-primary">
            <span>Prototype Presentation Mode</span>
            <button
              type="button"
              onClick={handleToggleError}
              className="underline font-semibold hover:text-primary-dark transition-colors"
            >
              {showDemoError ? 'Dismiss Demo Error' : 'Simulate Demo Error'}
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT SIDE: CENTERED LOGIN CARD (Desktop column 6)                       */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 w-full max-w-md mx-auto order-1 lg:order-2">
          
          <div className="bg-surface-card rounded-2xl border border-line shadow-md p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div className="text-left space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
                Welcome Back
              </h2>
              <p className="text-sm text-content-muted">
                Continue your journey to becoming placement-ready.
              </p>
            </div>

            {/* Demo Error State Banner */}
            {showDemoError && (
              <div 
                className="p-3.5 rounded-xl border border-red-200 bg-red-50 text-status-error text-xs flex items-start gap-2.5 animate-in fade-in duration-200"
                role="alert"
              >
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <span className="font-semibold block">Sign-in Error</span>
                  <span>Unable to sign in. Please check your details and try again.</span>
                </div>
              </div>
            )}

            {/* Demo Success Notice */}
            {demoNotice && (
              <div 
                className="p-3.5 rounded-xl border border-green-200 bg-green-50 text-status-success text-xs flex items-start gap-2.5"
                role="status"
              >
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="flex-1 font-medium">{demoNotice}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Field 1: Username / Email */}
              <InputField
                label="Username / Email"
                type="text"
                placeholder="Enter your username (e.g. Harini)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                id="login-username"
                disabled={isLoading}
              />

              {/* Field 2: Password */}
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                id="login-password"
                disabled={isLoading}
              />

              {/* Remember Me / Forgot Password Row */}
              <div className="flex items-center justify-between text-xs pt-1 select-none">
                <label className="flex items-center gap-2 cursor-pointer text-content-body">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-line text-primary focus:ring-primary focus:ring-2 cursor-pointer accent-primary"
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  onClick={() => alert('Password reset is simulated for hackathon presentation.')}
                  className="font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isLoading}
                  className="w-full justify-center shadow-sm"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <LoadingSpinner size="sm" variant="primary" />
                      <span>Logging in...</span>
                    </span>
                  ) : (
                    'Login'
                  )}
                </Button>
              </div>

            </form>

            {/* Subtle Divider: "or" */}
            <div className="relative flex items-center justify-center my-4">
              <div className="w-full border-t border-line" />
              <span className="bg-surface-card px-3 text-xs font-medium text-content-muted uppercase tracking-wider relative">
                or
              </span>
            </div>

            {/* Demo Google Login Button (UI only, no OAuth) */}
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => alert('Continue with Google is a UI demonstration only.')}
              className="w-full justify-center gap-2 text-content-heading font-medium"
            >
              {/* Google G Logo SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2s.7 5.5 1.9 7.9l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z"
                />
              </svg>
              <span>Continue with Google</span>
            </Button>

            {/* Registration CTA Row */}
            <div className="pt-2 text-center text-xs text-content-body">
              <span>Don't have an account? </span>
              <Link 
                to="/register" 
                className="font-semibold text-primary hover:text-primary-dark transition-colors underline-offset-2 hover:underline"
              >
                Create an account
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
