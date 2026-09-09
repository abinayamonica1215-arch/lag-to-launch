import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import InputField from '../components/forms/InputField';
import { getStoredUsername, setStoredUsername } from '../utils/user';
import { GraduationCap, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * AcademicProfilePage Component
 * 
 * Part 4 — Screen 1: Academic Profile
 * Route: /academic-profile
 * 
 * Clean, focused onboarding-style card layout.
 * Frontend validation only. Navigates to /career-selection on continue.
 */
export default function AcademicProfilePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: getStoredUsername() !== 'Student' ? getStoredUsername() : '',
    college: 'ABC Engineering College',
    degree: 'B.E.',
    branch: 'Computer Science & Engineering',
    graduationYear: '2027',
    cgpa: '7.8',
    status: 'active', // 'active' (Active Arrears) or 'cleared' (Cleared Arrears)
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleStatusSelect = (status) => {
    setFormData((prev) => ({ ...prev, status }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.college.trim()) newErrors.college = 'College is required';
    if (!formData.degree.trim()) newErrors.degree = 'Degree is required';
    if (!formData.branch.trim()) newErrors.branch = 'Branch is required';
    if (!formData.graduationYear.trim()) newErrors.graduationYear = 'Graduation year is required';
    if (!formData.cgpa.trim()) newErrors.cgpa = 'CGPA is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (formData.fullName.trim()) {
      setStoredUsername(formData.fullName.trim());
    }

    // Navigate to Career Selection Screen
    navigate('/career-selection');
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between p-4 sm:p-6 font-sans">
      {/* Top Header */}
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
          Step 1 of 4 • Student Onboarding
        </span>
      </header>

      {/* Main Card Container */}
      <main className="max-w-2xl mx-auto w-full my-auto py-6">
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-8 shadow-xs space-y-6">
          
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
              Academic Assessment
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-content-heading tracking-tight">
              Tell Us About Your Academic Journey
            </h1>
            <p className="text-sm text-content-muted leading-relaxed">
              Your academic profile helps us understand where your career journey begins.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />

            {/* College / University */}
            <InputField
              label="College / University"
              name="college"
              placeholder="e.g. ABC Engineering College"
              value={formData.college}
              onChange={handleChange}
              error={errors.college}
              required
            />

            {/* Degree & Branch Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Degree"
                name="degree"
                placeholder="e.g. B.E. / B.Tech / B.Sc"
                value={formData.degree}
                onChange={handleChange}
                error={errors.degree}
                required
              />

              <InputField
                label="Branch / Department"
                name="branch"
                placeholder="e.g. Computer Science"
                value={formData.branch}
                onChange={handleChange}
                error={errors.branch}
                required
              />
            </div>

            {/* Graduation Year & Current CGPA Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Graduation Year"
                name="graduationYear"
                placeholder="e.g. 2027"
                value={formData.graduationYear}
                onChange={handleChange}
                error={errors.graduationYear}
                required
              />

              <InputField
                label="Current CGPA"
                name="cgpa"
                placeholder="e.g. 7.8"
                value={formData.cgpa}
                onChange={handleChange}
                error={errors.cgpa}
                required
              />
            </div>

            {/* Academic Status Selector */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold text-content-heading">
                Current Academic Status <span className="text-status-warning">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Active Arrears (Orange #F59E0B) */}
                <button
                  type="button"
                  onClick={() => handleStatusSelect('active')}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3
                    ${formData.status === 'active'
                      ? 'border-status-warning bg-amber-50/50 ring-2 ring-status-warning/20'
                      : 'border-line bg-surface hover:border-slate-300'
                    }
                  `}
                >
                  <AlertCircle className="w-5 h-5 text-status-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-content-heading block">
                      Active Arrears
                    </span>
                    <span className="text-xs text-content-muted mt-0.5 block">
                      I have pending backlogs and need academic recovery roadmap.
                    </span>
                  </div>
                </button>

                {/* Cleared Arrears (Green #16A34A) */}
                <button
                  type="button"
                  onClick={() => handleStatusSelect('cleared')}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3
                    ${formData.status === 'cleared'
                      ? 'border-status-success bg-green-50/50 ring-2 ring-status-success/20'
                      : 'border-line bg-surface hover:border-slate-300'
                    }
                  `}
                >
                  <CheckCircle2 className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-content-heading block">
                      Cleared Arrears
                    </span>
                    <span className="text-xs text-content-muted mt-0.5 block">
                      All subjects cleared; I want to focus on skills & placement.
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Submit / Continue Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full justify-center text-sm font-semibold"
              >
                Continue to Career Selection
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </form>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="text-center py-4 text-xs text-content-muted">
        © Lag to Launch • AI-Powered Student Career Acceleration Platform
      </footer>
    </div>
  );
}
