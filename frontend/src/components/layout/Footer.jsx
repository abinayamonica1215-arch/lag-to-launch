import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * 
 * Strict Brand Palette:
 * - Background: Surface Card (#FFFFFF)
 * - Border: Border (#E2E8F0)
 * - Heading: (#0F172A)
 * - Text: Muted (#64748B)
 * - Links: Body text (#475569) hovering to Deep Indigo (#4F46E5)
 */
export default function Footer() {
  return (
    <footer className="bg-surface-card border-t border-line py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-line">
          {/* Left: Brand & Tagline */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center text-white font-bold text-sm shadow-sm">
                L2L
              </div>
              <span className="font-bold text-lg text-content-heading tracking-tight">
                Lag to Launch
              </span>
            </div>
            <p className="text-sm text-content-muted mt-1.5">
              From Academic Recovery to Employability
            </p>
          </div>

          {/* Right: Clean Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-content-body">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">
              How It Works
            </a>
            <Link to="/login" className="hover:text-primary transition-colors">
              Login
            </Link>
          </nav>
        </div>

        {/* Bottom Note */}
        <div className="pt-6 text-center md:text-left text-xs text-content-muted">
          <p>© 2026 Lag to Launch. Hackathon Prototype.</p>
        </div>
      </div>
    </footer>
  );
}
