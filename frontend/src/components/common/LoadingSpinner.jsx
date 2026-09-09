import React from 'react';

/**
 * Reusable LoadingSpinner Component
 * 
 * Strict Brand Palette:
 * - Spinner Track: Border (#E2E8F0)
 * - Spinner Active Head: Deep Indigo (#4F46E5) or Cyan (#06B6D4)
 * - Text: Body Text (#475569)
 */
export default function LoadingSpinner({
  text,
  size = 'md',
  variant = 'primary', // 'primary' (#4F46E5) or 'accent' (#06B6D4)
  className = '',
}) {
  const sizeMap = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-9 h-9 border-3',
  };

  const spinnerDimensions = sizeMap[size] || sizeMap.md;
  const activeColor = variant === 'accent' ? 'border-t-accent' : 'border-t-primary';

  return (
    <div 
      className={`inline-flex items-center justify-center gap-2.5 text-content-body ${className}`}
      role="status"
      aria-label={text || 'Loading'}
    >
      {/* Spinner Ring */}
      <div 
        className={`${spinnerDimensions} rounded-full border-line ${activeColor} animate-spin flex-shrink-0`}
      />

      {/* Optional Loading Text */}
      {text && (
        <span className="text-sm font-medium text-content-body">
          {text}
        </span>
      )}
      
      <span className="sr-only">{text || 'Loading...'}</span>
    </div>
  );
}
