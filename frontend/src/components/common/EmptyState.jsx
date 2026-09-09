import React from 'react';
import Button from './Button';

/**
 * Reusable EmptyState Component
 * 
 * Strict Brand Palette:
 * - Container: Surface Card (#FFFFFF) with dashed Border (#E2E8F0)
 * - Icon container: Primary Light (#EEF2FF) with Muted (#64748B) or Indigo (#4F46E5) icon
 * - Title: Heading (#0F172A)
 * - Message: Muted Text (#64748B)
 * - Action CTA: Primary Button (#4F46E5, hover #3730A3)
 */
export default function EmptyState({
  title = 'No records found',
  message = 'Get started by adding your first item or exploring available resources.',
  actionText,
  onAction,
  icon,
  className = '',
}) {
  return (
    <div 
      className={`rounded-2xl border border-dashed border-line bg-surface-card p-8 sm:p-10 text-center flex flex-col items-center justify-center max-w-md mx-auto shadow-sm ${className}`}
    >
      {/* Icon Area */}
      <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center mb-3.5 shadow-sm">
        {icon || (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-content-heading mb-1">
        {title}
      </h3>

      {/* Message */}
      {message && (
        <p className="text-sm text-content-muted mb-5 leading-relaxed max-w-sm">
          {message}
        </p>
      )}

      {/* Optional Primary Action Button */}
      {actionText && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
