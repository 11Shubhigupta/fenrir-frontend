import { Bell } from "lucide-react";

export default function Notifications() {

  const notifications = [
    "New vulnerability detected in Project Alpha",
    "Scan completed successfully",
    "Scheduled scan started",
    "System update available"
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Bell size={20} />
        Notifications
      </h2>

      <div className="space-y-3">

        {notifications.map((note, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4"
          >
            <p className="text-sm">
              {note}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}