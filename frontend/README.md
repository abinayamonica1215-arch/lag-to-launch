# 🚀 Lag to Launch — Frontend Foundation

This is the frontend foundation for **Lag to Launch**, an AI-powered student career platform designed for hackathon presentation.

The platform is designed around two student journeys:
1. **Journey 1 (Academic Recovery)**: Students with active academic arrears who need academic recovery + skill development + placement preparation.
2. **Journey 2 (Placement Ready)**: Students who have cleared backlogs but need targeted skill gap bridging and interview readiness.

---

## 📁 Project Folder Structure

```text
src/
├── assets/                  # Static assets (images, icons, SVG graphics)
├── components/
│   ├── cards/               # Reusable card containers (e.g., Card.jsx)
│   ├── common/              # Universal UI primitives (e.g., Button.jsx)
│   ├── forms/               # Form elements (e.g., InputField.jsx)
│   └── layout/              # Layout structures (e.g., Navbar.jsx, Footer.jsx)
├── pages/                   # Top-level page views (Landing, Login, Register, Dashboard)
├── routes/                  # Route configuration (AppRoutes.jsx)
├── App.jsx                  # Root component (sets up BrowserRouter and layout)
├── index.css                # Tailwind CSS base, components, and utilities
└── main.jsx                 # Vite + React entry point
```

---

## 🛠️ How to Run the Project Locally

1. Open your terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the URL shown in your terminal (usually `http://localhost:3000` or `http://localhost:5173`) in your browser.

---

## 🧭 Page-by-Page Development Roadmap

When building the remaining pages, the recommended next step is:
1. **`src/pages/LandingPage.jsx`**: Create the landing page introducing the two student journeys.
2. **`src/routes/AppRoutes.jsx`**: Register `<Route path="/" element={<LandingPage />} />` in your routes.
