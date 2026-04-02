import { CalendarDays } from "lucide-react";

export default function Schedule() {
  const schedules = [
    { name: "Weekly Scan", time: "Every Monday 9:00 AM" },
    { name: "Monthly Audit", time: "1st of every month" },
    { name: "Night Scan", time: "Daily 2:00 AM" }
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold flex items-center gap-2">
        <CalendarDays size={20} />
        Schedule
      </h2>

      <div className="space-y-4">

        {schedules.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
          >
            <h3 className="font-medium">
              {s.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {s.time}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}