import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

/**
 * Navbar Component
 * 
 * Strict Brand Palette:
 * - Background: Surface Card (#FFFFFF) with subtle backdrop blur
 * - Border: Border (#E2E8F0)
 * - Brand Mark: Deep Indigo (#4F46E5) with subtle Cyan (#06B6D4) accent
 * - Brand Text: Heading (#0F172A)
 * - Tagline: Muted (#64748B)
 * - Nav Links: Body (#475569) with hover to Deep Indigo (#4F46E5)
 * - Buttons: Login (Ghost) and Get Started (Primary: #4F46E5, hover: #3730A3)
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Main navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Careers', href: '/#careers' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-surface-card/95 backdrop-blur-sm border-b border-line sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          
          {/* LEFT: Brand Logo & Title */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-xl p-1"
            onClick={closeMobileMenu}
          >
            {/* Logo Mark: #4F46E5 → #06B6D4 (allowed hero/brand gradient) */}
            <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:opacity-95 transition-opacity">
              <span className="tracking-tighter">L2L</span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-lg text-content-heading tracking-tight group-hover:text-primary transition-colors">
                Lag to Launch
              </span>
              <span className="text-[11px] font-medium text-content-muted hidden sm:block -mt-1">
                From Academic Recovery to Employability
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3.5 py-2 text-sm font-medium text-content-body hover:text-primary hover:bg-primary-light rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE: Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* MOBILE: Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-content-body hover:text-content-heading hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-line bg-surface-card px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMobileMenu}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-content-body hover:text-primary hover:bg-primary-light transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-line flex flex-col gap-2.5">
            <Link to="/login" onClick={closeMobileMenu} className="w-full">
              <Button variant="outline" className="w-full justify-center">
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={closeMobileMenu} className="w-full">
              <Button variant="primary" className="w-full justify-center">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
