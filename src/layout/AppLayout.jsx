import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-8 py-6 text-gray-800 dark:text-gray-200">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">

          {/* Hamburger (Mobile only) */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
          >
            <Menu />
          </button>

          <ThemeToggle />
        </div>

        <Outlet />
      </div>
    </div>
  );
}