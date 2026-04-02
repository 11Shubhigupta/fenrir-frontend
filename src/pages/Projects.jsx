import { Plus } from "lucide-react";

export default function Projects() {
  const projects = [
    { name: "Project Alpha", scans: 24, status: "Active" },
    { name: "Project Beta", scans: 18, status: "Pending" },
    { name: "Project Gamma", scans: 42, status: "Completed" }
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Projects</h2>

        <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg text-sm">
          <Plus size={16} />
          New Project
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6"
          >
            <h3 className="font-semibold text-lg">
              {p.name}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Total Scans: {p.scans}
            </p>

            <span className="mt-3 inline-block text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
              {p.status}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}