import React from 'react';

/**
 * Reusable Card Component
 * 
 * Strict Brand Palette:
 * - Background: Surface Card (#FFFFFF)
 * - Border: Border (#E2E8F0)
 * - Title: Heading (#0F172A)
 * - Description: Muted (#64748B)
 * - Dividers: Border (#E2E8F0)
 */
export default function Card({
  title,
  description,
  subtitle,
  children,
  footer,
  className = '',
  ...props
}) {
  const desc = description || subtitle;

  return (
    <div
      className={`bg-surface-card rounded-2xl border border-line shadow-sm p-5 sm:p-6 transition-all duration-200 hover:shadow-md ${className}`}
      {...props}
    >
      {/* Optional Title & Description */}
      {(title || desc) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-content-heading tracking-tight">
              {title}
            </h3>
          )}
          {desc && (
            <p className="text-sm text-content-muted mt-1 leading-relaxed">
              {desc}
            </p>
          )}
        </div>
      )}

      {/* Main Card Content */}
      {children && <div>{children}</div>}

      {/* Optional Card Footer */}
      {footer && (
        <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
          {footer}
        </div>
      )}
    </div>
  );
}
