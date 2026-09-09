import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { useUsername, getInitials } from '../../utils/user';

/**
 * DashboardHeader Component
 * Dynamically displays the logged-in student's username and initials.
 */
export default function DashboardHeader({ onMenuToggle, title = 'Dashboard' }) {
  const [username] = useUsername();
  const initials = getInitials(username);
  const userEmail = `${username.toLowerCase().replace(/\s+/g, '.')}@college.edu`;

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-surface-card border-b border-line px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      {/* Left: Mobile Menu Button & Page Title */}
      <div className="flex items-center gap-3">
        {/* Mobile menu hamburger toggle */}
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label="Open sidebar navigation"
          className="lg:hidden p-2 rounded-xl text-content-body hover:text-content-heading hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Page Title */}
        <h1 className="text-lg sm:text-xl font-bold text-content-heading tracking-tight">
          {title}
        </h1>
      </div>

      {/* Right: Notifications & Student Profile */}
      <div className="flex items-center gap-2 sm:gap-3.5">
        
        {/* Notification Bell Button */}
        <button
          type="button"
          aria-label="Notifications"
          onClick={() => setHasUnreadNotifications(false)}
          className="relative p-2 rounded-xl text-content-muted hover:text-content-heading hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
        >
          <Bell className="w-5 h-5" />
          {hasUnreadNotifications && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-white" />
          )}
        </button>

        {/* Profile Dropdown Container */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            onClick={() => setIsProfileOpen((prev) => !prev)}
            aria-expanded={isProfileOpen}
            aria-label="User menu"
            className="flex items-center gap-2.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          >
            {/* Student Avatar Circle */}
            <div className="w-8 h-8 rounded-xl bg-primary-light text-primary font-bold text-xs flex items-center justify-center border border-primary/20 flex-shrink-0">
              {initials}
            </div>

            {/* Student Info (Hidden on tiny screens) */}
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-semibold text-content-heading leading-tight">
                {username}
              </span>
              <span className="text-[11px] text-content-muted leading-tight">
                Student
              </span>
            </div>

            <ChevronDown className="w-3.5 h-3.5 text-content-muted hidden sm:block" />
          </button>

          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-surface-card rounded-2xl border border-line shadow-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              
              {/* User header in dropdown */}
              <div className="px-3.5 py-2.5 border-b border-line">
                <p className="text-xs font-bold text-content-heading">{username}</p>
                <p className="text-[11px] text-content-muted">{userEmail}</p>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <Link
                  to="/career-profile"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-content-body hover:text-primary hover:bg-surface transition-colors"
                >
                  <User className="w-4 h-4 text-content-muted" />
                  <span>My Profile</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setIsProfileOpen(false);
                    alert('Settings modal (frontend prototype).');
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-content-body hover:text-primary hover:bg-surface transition-colors text-left"
                >
                  <Settings className="w-4 h-4 text-content-muted" />
                  <span>Settings</span>
                </button>
              </div>

              {/* Logout Item */}
              <div className="border-t border-line pt-1">
                <Link
                  to="/login"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-status-error hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4 text-status-error" />
                  <span>Logout</span>
                </Link>
              </div>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}
