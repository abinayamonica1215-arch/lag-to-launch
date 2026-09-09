import React from 'react';

/**
 * Reusable Button Component
 * 
 * Strict Brand Color Usage:
 * - Primary: Deep Indigo (#4F46E5) with Hover: Primary Dark (#3730A3)
 * - Secondary: Light Indigo (#EEF2FF) with Text: Deep Indigo (#4F46E5)
 * - Outline: Border (#E2E8F0) with Body Text (#475569)
 * - Danger: Error (#DC2626) with hover (#B91C1C)
 * - Ghost: Muted Text (#64748B) with Hover (#0F172A)
 * - Accent: Cyan (#06B6D4) for small accent CTAs
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  // Base styles: consistent height, alignment, typography, soft radius, transition & focus ring
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  // Consistent sizing definitions
  const sizeStyles = {
    sm: 'h-9 px-3.5 text-xs gap-1.5',
    md: 'h-10 px-4 text-sm gap-2',
    lg: 'h-12 px-6 text-base gap-2.5',
  };

  // Strictly controlled color variants
  const variantStyles = {
    // Primary CTA: #4F46E5, Hover: #3730A3
    primary: 'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark focus:ring-primary shadow-sm hover:shadow',
    
    // Secondary: #EEF2FF background with #4F46E5 text
    secondary: 'bg-primary-light text-primary hover:bg-indigo-100 focus:ring-primary',
    
    // Outline: #E2E8F0 border with #475569 body text
    outline: 'border border-line text-content-body bg-transparent hover:bg-slate-50 active:bg-slate-100 focus:ring-primary',
    
    // Danger: Error status #DC2626
    danger: 'bg-status-error text-white hover:bg-red-700 active:bg-red-800 focus:ring-status-error shadow-sm',
    
    // Ghost: Muted #64748B to Heading #0F172A
    ghost: 'text-content-muted hover:text-content-heading hover:bg-slate-100 active:bg-slate-200 focus:ring-primary',
    
    // Accent: Cyan #06B6D4
    accent: 'bg-accent text-white hover:bg-cyan-600 active:bg-cyan-700 focus:ring-accent shadow-sm',
  };

  const selectedSize = sizeStyles[size] || sizeStyles.md;
  const selectedVariant = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${selectedSize} ${selectedVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
