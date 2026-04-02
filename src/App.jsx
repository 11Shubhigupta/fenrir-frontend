import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import AppLayout from "./layout/AppLayout";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";

import Projects from "./pages/Projects";
import Schedule from "./pages/Schedule";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* Login Route */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Login />
            </PageWrapper>
          }
        />

        {/* Layout Routes */}
        <Route element={<AppLayout />}>

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <PageWrapper>
                <Dashboard />
              </PageWrapper>
            }
          />

          {/* Scans */}
          <Route
            path="/scans"
            element={
              <PageWrapper>
                <ScanDetail />
              </PageWrapper>
            }
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />

          {/* Schedule */}
          <Route
            path="/schedule"
            element={
              <PageWrapper>
                <Schedule />
              </PageWrapper>
            }
          />

          {/* Notifications */}
          <Route
            path="/notifications"
            element={
              <PageWrapper>
                <Notifications />
              </PageWrapper>
            }
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={
              <PageWrapper>
                <Settings />
              </PageWrapper>
            }
          />

          {/* Support */}
          <Route
            path="/support"
            element={
              <PageWrapper>
                <Support />
              </PageWrapper>
            }
          />

        </Route>

      </Routes>
    </AnimatePresence>
  );
}