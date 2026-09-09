import { useState, useEffect } from 'react';

/**
 * User Utility for Lag to Launch
 * 
 * Manages storing, retrieving, and formatting dynamic student usernames via localStorage.
 * Strictly adheres to requirements:
 * - NO hardcoded names
 * - Stores whatever username the user enters in Login
 * - Persists across navigation and page refreshes via localStorage
 * - Fallback to "Student" ONLY when no username is provided
 */

const STORAGE_KEY = 'student_username';

/**
 * Get stored username from localStorage with fallback to "Student".
 * Never returns hardcoded test names.
 */
export function getStoredUsername() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.trim()) {
      return saved.trim();
    }
  } catch (err) {
    console.warn('LocalStorage unavailable:', err);
  }
  return 'Student';
}

/**
 * Store the entered username in localStorage.
 * Dispatches custom events to update all components in real time.
 */
export function setStoredUsername(username) {
  try {
    const value = (username && username.trim()) ? username.trim() : 'Student';
    localStorage.setItem(STORAGE_KEY, value);
    // Notify all active React listeners
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('user_updated', { detail: value }));
  } catch (err) {
    console.warn('Unable to write to localStorage:', err);
  }
}

/**
 * Generate 1 or 2 letter uppercase initials for avatar badges.
 * Examples:
 * - "Harini" -> "H"
 * - "Arun" -> "A"
 * - "Student123" -> "S"
 */
export function getInitials(name) {
  if (!name || !name.trim()) return 'S';
  const clean = name.trim();
  const parts = clean.split(/\s+/);
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * React hook to access and synchronize dynamic username.
 * Automatically updates whenever localStorage changes.
 */
export function useUsername() {
  const [username, setUsernameState] = useState(getStoredUsername);

  useEffect(() => {
    const handleStorageChange = () => {
      setUsernameState(getStoredUsername());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('user_updated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('user_updated', handleStorageChange);
    };
  }, []);

  const updateUsername = (newName) => {
    setStoredUsername(newName);
    setUsernameState(getStoredUsername());
  };

  return [username, updateUsername];
}
