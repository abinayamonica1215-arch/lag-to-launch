import React from 'react';
import Button from './Button';

/**
 * Reusable ErrorState Component
 * 
 * Strict Brand Color Usage:
 * - Alert Surface: White (#FFFFFF) with subtle Error border (#DC2626)
 * - Error Icon & Indicator: Error status (#DC2626)
 * - Title: Heading (#0F172A)
 * - Message: Body text (#475569)
 * - Retry Action: Button with status error outline
 */
export default function ErrorState({
  title = 'Something went wrong',
  message = 'We encountered an error while loading this content. Please try again.',
  onRetry,
  retryText = 'Try Again',
  className = '',
}) {
  return (
    <div 
      className={`rounded-2xl border border-red-200 bg-surface-card p-6 sm:p-8 text-center flex flex-col items-center justify-center max-w-md mx-auto shadow-sm ${className}`}
      role="alert"
    >
      {/* Error Icon (#DC2626) */}
      <div className="w-12 h-12 rounded-full bg-red-50 text-status-error flex items-center justify-center mb-3.5 border border-red-100 shadow-sm">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      {/* Title (#0F172A) */}
      <h3 className="text-base sm:text-lg font-semibold text-content-heading mb-1">
        {title}
      </h3>

      {/* Message (#475569) */}
      {message && (
        <p className="text-sm text-content-body mb-5 leading-relaxed max-w-sm">
          {message}
        </p>
      )}

      {/* Retry Action */}
      {onRetry && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onRetry}
          className="border-red-300 text-status-error hover:bg-red-50 focus:ring-status-error"
        >
          {retryText}
        </Button>
      )}
    </div>
  );
}
