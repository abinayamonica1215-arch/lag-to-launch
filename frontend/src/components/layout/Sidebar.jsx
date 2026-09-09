import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUsername, getInitials } from '../../utils/user';
import {
  LayoutDashboard,
  Compass,
  BookOpen,
  Target,
  Briefcase,
  GraduationCap,
  TrendingUp,
  BarChart3,
  User,
  Search,
  HelpCircle,
  Settings,
  LogOut,
  X,
} from 'lucide-react';

/**
 * Sidebar Component
 * 
 * Strict Brand Palette:
 * - Active background: #EEF2FF (Primary Light)
 * - Active text: #4F46E5 (Deep Indigo) with left indicator border #4F46E5
 * - Inactive text: #475569 (Body)
 * - Hover background: #F8FAFC (Main Surface)
 * - Border: #E2E8F0
 * - Brand Mark: Allowed gradient #4F46E5 → #06B6D4
 */
export default function Sidebar({ isOpen = false, onClose }) {
  const location = useLocation();
  const [username] = useUsername();
  const initials = getInitials(username);

  // Navigation Items Grouped by Category strictly per Part 7 spec
  const navGroups = [
    {
      label: 'MAIN',
      items: [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'My Journey', path: '/student-path', icon: Compass },
        { name: 'Learning Plan', path: '/learning-plan', icon: BookOpen },
        { name: 'Skills', path: '/skill-gap', icon: Target },
        { name: 'Placement Prep', path: '/placement-prep', icon: Briefcase },
      ],
    },
    {
      label: 'PROGRESS',
      items: [
        { name: 'Academic Progress', path: '/academic-recovery', icon: GraduationCap },
        { name: 'Skill Progress', path: '/skill-gap', icon: TrendingUp },
        { name: 'Readiness Score', path: '/readiness', icon: BarChart3 },
      ],
    },
    {
      label: 'CAREER',
      items: [
        { name: 'Career Profile', path: '/career-profile', icon: User },
        { name: 'Opportunities', path: '/placement-recommendation', icon: Search },
      ],
    },
  ];

  const bottomItems = [
    { name: 'Help & Support', path: '#help', icon: HelpCircle, isAction: true },
    { name: 'Settings', path: '#settings', icon: Settings, isAction: true },
    { name: 'Logout', path: '/login', icon: LogOut, isLogout: true },
  ];

  // Helper to test if a nav link is currently active
  const isActive = (itemPath) => {
    if (itemPath === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-64 sm:w-72 bg-surface-card border-r border-line flex flex-col justify-between transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Top Branding Section */}
        <div className="p-5 border-b border-line flex items-center justify-between">
          <Link
            to="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-xl p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-hero-gradient flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:opacity-95 transition-opacity">
              <span>L2L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-content-heading tracking-tight leading-tight">
                Lag to Launch
              </span>
              <span className="text-[11px] font-medium text-content-muted">
                Career Platform
              </span>
            </div>
          </Link>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="lg:hidden p-1.5 rounded-lg text-content-muted hover:text-content-heading hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Middle Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6">
          {navGroups.map((group) => (
            <div key={group.label} className="space-y-1">
              <h4 className="px-3 text-[11px] font-bold text-content-muted uppercase tracking-wider">
                {group.label}
              </h4>
              <div className="space-y-0.5 pt-1">
                {group.items.map((item) => {
                  const active = isActive(item.path);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors relative group
                        ${active
                          ? 'bg-primary-light text-primary font-semibold'
                          : 'text-content-body hover:bg-surface hover:text-primary'
                        }`}
                    >
                      {/* Left Active Indicator */}
                      {active && (
                        <span className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r-full" />
                      )}

                      <Icon
                        className={`w-4 h-4 flex-shrink-0 transition-colors
                          ${active ? 'text-primary' : 'text-content-muted group-hover:text-primary'}
                        `}
                      />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Student Profile Snapshot in Sidebar */}
        <div className="px-3.5 pb-2 pt-1 border-t border-line">
          <Link
            to="/career-profile"
            onClick={onClose}
            className="flex items-center gap-2.5 p-2 rounded-xl bg-surface border border-line hover:border-primary/40 hover:bg-primary-light/40 transition-colors group"
          >
            <div className="w-8 h-8 rounded-xl bg-primary-light text-primary font-bold text-xs flex items-center justify-center border border-primary/20 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-content-heading truncate group-hover:text-primary transition-colors">
                {username}
              </p>
              <p className="text-[10px] text-content-muted truncate">
                Student Profile
              </p>
            </div>
          </Link>
        </div>

        {/* Bottom Navigation & Utilities */}
        <div className="p-3.5 border-t border-line space-y-0.5 bg-surface-card">
          {bottomItems.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;

            if (item.isAction) {
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    onClose?.();
                    alert(`${item.name} is a prototype feature.`);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-content-body hover:bg-surface hover:text-primary transition-colors text-left"
                >
                  <Icon className="w-4 h-4 text-content-muted" />
                  <span>{item.name}</span>
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors group
                  ${item.isLogout
                    ? 'text-status-error hover:bg-red-50 hover:text-red-700'
                    : active
                      ? 'bg-primary-light text-primary font-semibold'
                      : 'text-content-body hover:bg-surface hover:text-primary'
                  }`}
              >
                <Icon
                  className={`w-4 h-4 flex-shrink-0
                    ${item.isLogout
                      ? 'text-status-error'
                      : active
                        ? 'text-primary'
                        : 'text-content-muted group-hover:text-primary'
                    }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
