import React from 'react';

/**
 * Reusable ProgressBar Component
 * 
 * Strict Brand Color Usage:
 * - Default/Accent: Cyan (#06B6D4) per rule: "Use #06B6D4 sparingly for secondary highlights, icons, small accents and progress indicators."
 * - Primary: Deep Indigo (#4F46E5)
 * - Status Variants: Success (#16A34A), Warning (#F59E0B), Error (#DC2626)
 * - Track: Border/Divider tone (#E2E8F0)
 * - Label: Body Text (#475569)
 * - Percentage: Heading Text (#0F172A)
 */
export default function ProgressBar({
  value = 0,
  label,
  showPercentage = false,
  variant = 'accent', // Defaults to Cyan #06B6D4 for progress indicators
  className = '',
}) {
  // Safely limit value between 0 and 100
  const numericValue = typeof value === 'number' ? value : parseFloat(value) || 0;
  const clampedValue = Math.min(100, Math.max(0, Math.round(numericValue)));

  // Strict color variants
  const colorVariants = {
    primary: 'bg-primary',         // Deep Indigo (#4F46E5)
    accent: 'bg-accent',           // Cyan (#06B6D4)
    success: 'bg-status-success',   // Success (#16A34A)
    warning: 'bg-status-warning',   // Warning (#F59E0B)
    error: 'bg-status-error',       // Error (#DC2626)
  };

  const selectedColor = colorVariants[variant] || colorVariants.accent;

  return (
    <div className={`w-full ${className}`}>
      {/* Optional Header Row (Label + Percentage) */}
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm font-medium text-content-body">
          {label && <span>{label}</span>}
          {showPercentage && (
            <span className="font-semibold text-content-heading tabular-nums">
              {clampedValue}%
            </span>
          )}
        </div>
      )}

      {/* Progress Track (#E2E8F0) */}
      <div 
        className="w-full bg-line rounded-full h-2.5 sm:h-3 overflow-hidden"
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress bar'}
      >
        {/* Progress Fill with smooth transition */}
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${selectedColor}`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
