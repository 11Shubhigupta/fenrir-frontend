import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors";

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "Scans", path: "/scans" },
    { name: "Schedule", path: "/schedule" },
    { name: "Notifications", path: "/notifications" },
    { name: "Settings", path: "/settings" },
    { name: "Support", path: "/support" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between">

      <div>
        <div className="p-6 text-xl font-semibold text-teal-500">
          aps
        </div>

        <nav className="px-4 space-y-2">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-teal-500/10 text-teal-500"
                    : "text-gray-600 dark:text-gray-400 hover:bg-teal-500/10 hover:text-teal-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="text-sm font-medium">admin@edu.com</div>
        <div className="text-xs text-gray-500">Security Lead</div>
      </div>
    </aside>
  );
}