import React from 'react';

/**
 * Reusable InputField Component
 * 
 * Strict Brand Color Usage:
 * - Label: Body Text (#475569) / Required: Error (#DC2626)
 * - Input Background: Card Surface (#FFFFFF)
 * - Border: Border (#E2E8F0)
 * - Focus State: Border Deep Indigo (#4F46E5) with Primary Light glow (#EEF2FF)
 * - Error State: Border Error (#DC2626) with Error Text (#DC2626)
 * - Disabled State: Background Main (#F8FAFC) with Muted Text (#64748B)
 * - Helper Text: Muted Text (#64748B)
 */
export default function InputField({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  id,
  required = false,
  error = '',
  disabled = false,
  helperText = '',
  className = '',
  ...props
}) {
  const inputId = id || name || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {/* Accessible Label */}
      {label && (
        <label 
          htmlFor={inputId} 
          className="text-sm font-medium text-content-body select-none flex items-center gap-1"
        >
          <span>{label}</span>
          {required && <span className="text-status-error font-bold" title="Required field">*</span>}
        </label>
      )}

      {/* Input Field */}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-content-heading placeholder:text-content-muted 
          bg-surface-card transition-all duration-150 outline-none
          ${disabled 
            ? 'bg-surface border-line text-content-muted cursor-not-allowed select-none' 
            : error 
              ? 'border-status-error focus:border-status-error focus:ring-4 focus:ring-red-50' 
              : 'border-line hover:border-slate-400 focus:border-primary focus:ring-4 focus:ring-primary-light'
          }`}
        {...props}
      />

      {/* Error Message */}
      {error && (
        <p id={`${inputId}-error`} className="text-xs font-medium text-status-error flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </p>
      )}

      {/* Helper Text */}
      {!error && helperText && (
        <p id={`${inputId}-helper`} className="text-xs text-content-muted">
          {helperText}
        </p>
      )}
    </div>
  );
}
