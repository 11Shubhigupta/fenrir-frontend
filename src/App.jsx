import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import AppLayout from "./layout/AppLayout";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
export default function App() {
    const location = useLocation();
  return (
     
        <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Login />
            </PageWrapper>
          }
        />
        <Route element={<AppLayout />}>
          <Route
            path="/dashboard"
            element={
              <PageWrapper>
                <Dashboard />
              </PageWrapper>
            }
          />
          <Route
            path="/scans"
            element={
              <PageWrapper>
                <ScanDetail />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}