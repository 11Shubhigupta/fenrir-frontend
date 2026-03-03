import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm transition"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}