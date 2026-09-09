import React from 'react';

/**
 * Reusable SelectField Component
 * 
 * Strict Brand Palette:
 * - Label: Body Text (#475569) / Required: Error (#DC2626)
 * - Background: Card Surface (#FFFFFF)
 * - Border: Border (#E2E8F0)
 * - Focus State: Border Deep Indigo (#4F46E5) with Primary Light glow (#EEF2FF)
 * - Error State: Border Error (#DC2626) with Error Text (#DC2626)
 */
export default function SelectField({
  label,
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  required = false,
  error = '',
  disabled = false,
  helperText = '',
  className = '',
  ...props
}) {
  const selectId = id || name || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {/* Accessible Label */}
      {label && (
        <label 
          htmlFor={selectId} 
          className="text-sm font-medium text-content-body select-none flex items-center gap-1"
        >
          <span>{label}</span>
          {required && <span className="text-status-error font-bold" title="Required field">*</span>}
        </label>
      )}

      {/* Select Element */}
      <div className="relative w-full">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-content-heading appearance-none
            bg-surface-card transition-all duration-150 outline-none pr-10 cursor-pointer
            ${!value ? 'text-content-muted' : 'text-content-heading'}
            ${disabled 
              ? 'bg-surface border-line text-content-muted cursor-not-allowed select-none' 
              : error 
                ? 'border-status-error focus:border-status-error focus:ring-4 focus:ring-red-50' 
                : 'border-line hover:border-slate-400 focus:border-primary focus:ring-4 focus:ring-primary-light'
            }`}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const text = typeof opt === 'object' ? opt.label : opt;
            return (
              <option key={val} value={val} className="text-content-heading">
                {text}
              </option>
            );
          })}
        </select>

        {/* Custom Dropdown Chevron Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-content-muted">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p id={`${selectId}-error`} className="text-xs font-medium text-status-error flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </p>
      )}

      {/* Helper Text */}
      {!error && helperText && (
        <p id={`${selectId}-helper`} className="text-xs text-content-muted">
          {helperText}
        </p>
      )}
    </div>
  );
}
