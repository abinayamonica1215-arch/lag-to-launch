/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY: Blue brand colors strictly per spec
        primary: {
          DEFAULT: '#2563EB', // Primary Blue (#2563EB)
          dark: '#1D4ED8',    // Primary Blue Dark (#1D4ED8)
          light: '#EFF6FF',   // Primary Light Tint (#EFF6FF)
        },

        // ACCENT: Derived from Primary Blue
        accent: {
          DEFAULT: '#2563EB', // Blue Accent
          light: '#EFF6FF',   // Accent Light
        },

        // BACKGROUNDS
        surface: {
          DEFAULT: '#F8FAFC', // Main Background (#F8FAFC)
          card: '#FFFFFF',    // Card/Surface Background (#FFFFFF)
        },

        // TEXT COLORS
        content: {
          heading: '#0F172A', // Headings (#0F172A)
          body: '#475569',    // Body Text (#475569)
          muted: '#64748B',   // Muted/Secondary Text (#64748B)
        },

        // BORDERS & DIVIDERS
        line: {
          DEFAULT: '#E2E8F0', // Border color (#E2E8F0)
        },

        // STATUS COLORS
        status: {
          success: '#16A34A', // Success (#16A34A)
          warning: '#F59E0B', // Warning (#F59E0B)
          error: '#DC2626',   // Error (#DC2626)
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        // Primary Blue brand gradient
        'hero-gradient': 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
      },
    },
  },
  plugins: [],
}
