import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/forms/InputField';
import SelectField from '../components/forms/SelectField';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { setStoredUsername } from '../utils/user';

/**
 * RegistrationPage Component
 * 
 * Step 5 — Frontend Prototype Registration Screen
 * - Responsive two-column layout on desktop, stacked on mobile
 * - Student starting point journey selector (Active Arrears vs. Arrears Cleared)
 * - Frontend validation (Empty fields, email format, password mismatch, terms)
 * - Frontend-only state simulation (No API, backend, database, or JWT)
 * - Strict adherence to the approved Lag to Launch color palette:
 *   Primary (#4F46E5), Dark (#3730A3), Light (#EEF2FF),
 *   Accent (#06B6D4), Background (#F8FAFC), Card (#FFFFFF),
 *   Headings (#0F172A), Body (#475569), Muted (#64748B), Border (#E2E8F0),
 *   Status Success (#16A34A), Warning (#F59E0B), Error (#DC2626)
 */
export default function RegistrationPage() {
  // Form input state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    branch: '',
    graduationYear: '',
    password: '',
    confirmPassword: '',
  });

  // Journey Starting Point: null | 'active_arrears' | 'arrears_cleared'
  const [startingPoint, setStartingPoint] = useState(null);

  // Terms and conditions acceptance
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Validation errors & UI states
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Degree options
  const degreeOptions = [
    { value: 'B.E.', label: 'B.E. (Bachelor of Engineering)' },
    { value: 'B.Tech', label: 'B.Tech (Bachelor of Technology)' },
    { value: 'B.Sc', label: 'B.Sc (Bachelor of Science)' },
    { value: 'BCA', label: 'BCA (Bachelor of Computer Applications)' },
    { value: 'MCA', label: 'MCA (Master of Computer Applications)' },
    { value: 'M.E.', label: 'M.E. / M.Tech' },
    { value: 'Other', label: 'Other Degree' },
  ];

  // Graduation year options
  const yearOptions = [
    { value: '2027', label: '2027' },
    { value: '2028', label: '2028' },
    { value: '2029', label: '2029' },
    { value: '2030', label: '2030' },
  ];

  // Handle standard input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on active field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Frontend-only validation handler
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'Please enter your college or university.';
    }

    if (!formData.degree) {
      newErrors.degree = 'Please select your degree.';
    }

    if (!formData.branch.trim()) {
      newErrors.branch = 'Please enter your branch / department.';
    }

    if (!formData.graduationYear) {
      newErrors.graduationYear = 'Please select your graduation year.';
    }

    if (!formData.password) {
      newErrors.password = 'Please create a password.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!startingPoint) {
      newErrors.startingPoint = 'Please select where you are starting from.';
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = 'Please accept the Terms & Conditions.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit (Frontend Simulation Only)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate short network latency for presentation purposes
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      if (formData.fullName.trim()) {
        setStoredUsername(formData.fullName.trim());
      }
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* ========================================================================= */}
        {/* LEFT SIDE: BRANDING & PROGRESSION PANEL (Desktop column 5)               */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:sticky lg:top-24 order-2 lg:order-1">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="badge-primary">
              Student Registration
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-content-heading tracking-tight">
              Lag to Launch
            </h1>
            <p className="text-base font-semibold text-primary">
              From Academic Recovery to Employability
            </p>
            <p className="text-sm sm:text-base text-content-body leading-relaxed">
              Start where you are. Build the skills you need. Get ready for your career launch.
            </p>
          </div>

          {/* Simple Visual Progression Card */}
          <div className="bg-surface-card rounded-2xl border border-line p-5 sm:p-6 shadow-sm space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-line">
              <span className="text-xs font-semibold uppercase tracking-wider text-content-heading">
                Your Roadmap To Launch
              </span>
              <span className="text-[11px] font-medium text-accent">
                5 Milestones
              </span>
            </div>

            {/* Step 1: Your Starting Point */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface border border-line">
              <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center font-bold text-xs flex-shrink-0 border border-primary/20">
                1
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-content-heading block">Your Starting Point</span>
                <span className="text-[11px] text-content-muted block">Arrear Recovery or Skill Up track</span>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center -my-1 text-content-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 2: Assess */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface border border-line">
              <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center font-bold text-xs flex-shrink-0 border border-primary/20">
                2
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-content-heading block">Assess</span>
                <span className="text-[11px] text-content-muted block">Subject diagnostics & current skill index</span>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center -my-1 text-content-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 3: Recover / Skill Up */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface border border-line">
              <div className="w-7 h-7 rounded-lg bg-accent-light text-accent flex items-center justify-center font-bold text-xs flex-shrink-0 border border-accent/20">
                3
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-content-heading block">Recover / Skill Up</span>
                <span className="text-[11px] text-content-muted block">Clear backlogs & master key technologies</span>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center -my-1 text-content-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 4: Prepare */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface border border-line">
              <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center font-bold text-xs flex-shrink-0 border border-primary/20">
                4
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-content-heading block">Prepare</span>
                <span className="text-[11px] text-content-muted block">Aptitude rounds, coding challenges & mock tests</span>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center -my-1 text-content-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 5: Launch */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-green-50 border border-green-200">
              <div className="w-7 h-7 rounded-lg bg-green-100 text-status-success flex items-center justify-center font-bold text-xs flex-shrink-0 border border-green-200">
                ✓
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-slate-900 block">Launch</span>
                <span className="text-[11px] text-content-muted block">Placement-ready candidate profile</span>
              </div>
            </div>

          </div>

          {/* Reassurance Notice */}
          <div className="p-4 rounded-xl bg-primary-light/60 border border-primary/20 text-xs text-primary leading-relaxed">
            <span className="font-bold block mb-0.5">🔒 Private & Student-Centered</span>
            Your academic backlog records are kept strictly private. The platform is designed solely to accelerate your recovery and placement readiness.
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT SIDE: REGISTRATION FORM CARD (Desktop column 7)                    */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 w-full order-1 lg:order-2">
          
          <div className="bg-surface-card rounded-2xl border border-line shadow-md p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
                Create Your Account
              </h2>
              <p className="text-sm text-content-muted">
                Start your personalized journey toward placement readiness.
              </p>
            </div>

            {/* Success State Overlay/Card */}
            {isSuccess ? (
              <div className="py-8 px-4 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-green-100 text-status-success flex items-center justify-center mx-auto border border-green-200 shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-content-heading">
                    Account Created Successfully!
                  </h3>
                  <p className="text-sm text-content-body leading-relaxed">
                    Welcome to Lag to Launch, <strong>{formData.fullName}</strong>. Your profile has been initialized on the{' '}
                    <span className="font-semibold text-primary">
                      {startingPoint === 'active_arrears' ? 'Academic Recovery Path' : 'Skill Acceleration Path'}
                    </span>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface border border-line text-xs text-content-muted max-w-sm mx-auto">
                  * Prototype presentation mode: No backend account was created. You can now proceed to test the login interface.
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-xs mx-auto">
                  <Link to="/login" className="w-full">
                    <Button variant="primary" className="w-full justify-center">
                      Go to Login
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        college: '',
                        degree: '',
                        branch: '',
                        graduationYear: '',
                        password: '',
                        confirmPassword: '',
                      });
                      setStartingPoint(null);
                    }}
                    className="w-full justify-center"
                  >
                    Reset Form
                  </Button>
                </div>
              </div>
            ) : (
              /* Registration Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* 2-Column Responsive Input Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Field 1: Full Name */}
                  <InputField
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                    required
                    disabled={isLoading}
                  />

                  {/* Field 2: Email Address */}
                  <InputField
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    disabled={isLoading}
                  />

                  {/* Field 3: Phone Number */}
                  <InputField
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                    disabled={isLoading}
                  />

                  {/* Field 4: College / University */}
                  <InputField
                    label="College / University"
                    name="college"
                    placeholder="Enter your college or university"
                    value={formData.college}
                    onChange={handleChange}
                    error={errors.college}
                    required
                    disabled={isLoading}
                  />

                  {/* Field 5: Degree Dropdown */}
                  <SelectField
                    label="Degree"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    options={degreeOptions}
                    placeholder="Select your degree"
                    error={errors.degree}
                    required
                    disabled={isLoading}
                  />

                  {/* Field 6: Branch / Department */}
                  <InputField
                    label="Branch / Department"
                    name="branch"
                    placeholder="Example: Computer Science and Engineering"
                    value={formData.branch}
                    onChange={handleChange}
                    error={errors.branch}
                    required
                    disabled={isLoading}
                  />

                  {/* Field 7: Graduation Year Dropdown */}
                  <SelectField
                    label="Graduation Year"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    options={yearOptions}
                    placeholder="Select graduation year"
                    error={errors.graduationYear}
                    required
                    disabled={isLoading}
                  />

                  {/* Field 8: Password */}
                  <InputField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    required
                    disabled={isLoading}
                  />

                  {/* Field 9: Confirm Password (spans 2 columns on sm) */}
                  <div className="sm:col-span-2">
                    <InputField
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      error={errors.confirmPassword}
                      required
                      disabled={isLoading}
                    />
                  </div>

                </div>

                {/* ========================================================================= */}
                {/* SECTION: STUDENT STARTING POINT (Two Selectable Cards)                    */}
                {/* ========================================================================= */}
                <div className="space-y-3 pt-2 border-t border-line">
                  <div>
                    <label className="text-sm font-semibold text-content-heading block">
                      Where are you starting from? <span className="text-status-error">*</span>
                    </label>
                    <p className="text-xs text-content-muted mt-0.5">
                      Choose the journey that accurately represents your current academic standing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    {/* OPTION 1: Active Arrears */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        setStartingPoint('active_arrears');
                        if (errors.startingPoint) {
                          setErrors((prev) => ({ ...prev, startingPoint: '' }));
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setStartingPoint('active_arrears');
                        }
                      }}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-left select-none relative
                        ${startingPoint === 'active_arrears'
                          ? 'border-primary bg-primary-light/50 ring-2 ring-primary/20'
                          : 'border-line bg-surface-card hover:border-slate-300 hover:bg-surface'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="badge-warning text-[10px]">
                          Journey 1
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                          ${startingPoint === 'active_arrears'
                            ? 'border-primary bg-primary'
                            : 'border-slate-300 bg-white'
                          }`}
                        >
                          {startingPoint === 'active_arrears' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                          )}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-content-heading">
                        Active Arrears
                      </h4>
                      <p className="text-xs text-content-body mt-1 leading-relaxed">
                        I have academic arrears and need a recovery plan.
                      </p>
                    </div>

                    {/* OPTION 2: Arrears Cleared */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        setStartingPoint('arrears_cleared');
                        if (errors.startingPoint) {
                          setErrors((prev) => ({ ...prev, startingPoint: '' }));
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setStartingPoint('arrears_cleared');
                        }
                      }}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-left select-none relative
                        ${startingPoint === 'arrears_cleared'
                          ? 'border-primary bg-primary-light/50 ring-2 ring-primary/20'
                          : 'border-line bg-surface-card hover:border-slate-300 hover:bg-surface'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="badge-accent text-[10px]">
                          Journey 2
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                          ${startingPoint === 'arrears_cleared'
                            ? 'border-primary bg-primary'
                            : 'border-slate-300 bg-white'
                          }`}
                        >
                          {startingPoint === 'arrears_cleared' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                          )}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-content-heading">
                        Arrears Cleared
                      </h4>
                      <p className="text-xs text-content-body mt-1 leading-relaxed">
                        I have cleared my arrears but need to close my skill gaps.
                      </p>
                    </div>

                  </div>

                  {/* Starting Point Error */}
                  {errors.startingPoint && (
                    <p className="text-xs font-medium text-status-error flex items-center gap-1 mt-1">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.startingPoint}</span>
                    </p>
                  )}
                </div>

                {/* ========================================================================= */}
                {/* TERMS CHECKBOX                                                            */}
                {/* ========================================================================= */}
                <div className="space-y-1 pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-content-body select-none">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => {
                        setAgreeTerms(e.target.checked);
                        if (errors.agreeTerms) {
                          setErrors((prev) => ({ ...prev, agreeTerms: '' }));
                        }
                      }}
                      className="w-4 h-4 mt-0.5 rounded border-line text-primary focus:ring-primary focus:ring-2 cursor-pointer accent-primary flex-shrink-0"
                    />
                    <span>
                      I agree to the{' '}
                      <span className="text-primary font-medium hover:underline">Terms & Conditions</span>{' '}
                      and{' '}
                      <span className="text-primary font-medium hover:underline">Privacy Policy</span>.
                    </span>
                  </label>

                  {errors.agreeTerms && (
                    <p className="text-xs font-medium text-status-error flex items-center gap-1 pl-6">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.agreeTerms}</span>
                    </p>
                  )}
                </div>

                {/* ========================================================================= */}
                {/* CREATE ACCOUNT BUTTON                                                     */}
                {/* ========================================================================= */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isLoading}
                    className="w-full justify-center shadow-sm"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <LoadingSpinner size="sm" variant="primary" />
                        <span>Creating Account...</span>
                      </span>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </div>

                {/* Login Navigation CTA */}
                <div className="pt-2 text-center text-xs text-content-body border-t border-line">
                  <span>Already have an account? </span>
                  <Link 
                    to="/login" 
                    className="font-semibold text-primary hover:text-primary-dark transition-colors underline-offset-2 hover:underline"
                  >
                    Login
                  </Link>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
