import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      
      <Sidebar />

      <div className="flex-1 px-8 py-6 text-gray-800 dark:text-gray-200">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>
        <Outlet />
      </div>
    </div>
  );
}