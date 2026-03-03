import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Search,
  Map,
  FlaskConical,
  ShieldCheck,
  FileText,
  ChevronDown,
  X
} from "lucide-react";

export default function ScanDetail() {
  const { id } = useParams();
  const [tab, setTab] = useState("activity");

  const steps = [
    { name: "Spidering", icon: Search },
    { name: "Mapping", icon: Map },
    { name: "Testing", icon: FlaskConical },
    { name: "Validating", icon: ShieldCheck },
    { name: "Reporting", icon: FileText }
  ];

  return (
    <div className="space-y-6">

      {/* ===== Breadcrumb ===== */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Scan / Private Assets / <span className="text-teal-500">New Scan</span>
      </div>

      {/* ===== TOP HEADER CARD ===== */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">

        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Circular Progress */}
          <div className="w-28 h-28 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold">
              0%
            </div>
          </div>

          {/* Steps with line */}
          <div className="flex-1 flex flex-wrap lg:flex-nowrap items-center justify-between relative gap-6">

            <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-300 dark:bg-gray-700 hidden lg:block"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.name} className="relative z-10 flex flex-col items-center text-sm min-w-[80px]">

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === 0
                        ? "bg-teal-500 text-white"
                        : "bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-400"
                    }`}
                  >
                    <Icon size={16} />
                  </div>

                  <span
                    className={`mt-2 text-center ${
                      index === 0 ? "text-teal-500 font-medium" : "text-gray-400"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info row */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div><p className="text-xs text-gray-400">Scan Type</p><p className="font-medium">Grey Box</p></div>
          <div><p className="text-xs text-gray-400">Targets</p><p className="font-medium">google.com</p></div>
          <div><p className="text-xs text-gray-400">Started At</p><p className="font-medium">Nov 22, 09:00AM</p></div>
          <div><p className="text-xs text-gray-400">Credentials</p><p className="font-medium">2 Active</p></div>
          <div><p className="text-xs text-gray-400">Files</p><p className="font-medium">Control.pdf</p></div>
          <div><p className="text-xs text-gray-400">Checksums</p><p className="font-medium text-teal-500">40/350</p></div>
        </div>
      </div>

      {/* ===== LIVE CONSOLE + FINDINGS ===== */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">

        {/* Console Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800">

          <div className="flex items-center gap-4 text-sm">
            <span className="text-teal-500 font-medium">Live Scan Console</span>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
              Running...
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <ChevronDown size={16} className="cursor-pointer" />
            <X size={16} className="cursor-pointer" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* Console Section */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800">

            {/* Tabs */}
            <div className="flex gap-6 px-6 pt-4 text-sm">
              <button
                onClick={() => setTab("activity")}
                className={`pb-2 ${
                  tab === "activity"
                    ? "border-b-2 border-teal-500 text-teal-500"
                    : "text-gray-500"
                }`}
              >
                Activity Log
              </button>

              <button
                onClick={() => setTab("verification")}
                className={`pb-2 ${
                  tab === "verification"
                    ? "border-b-2 border-teal-500 text-teal-500"
                    : "text-gray-500"
                }`}
              >
                Verification Loops
              </button>
            </div>

            {/* Console Body */}
            <div className="bg-black text-green-400 font-mono text-xs p-6 h-[320px] lg:h-[420px] overflow-y-auto">
              {tab === "activity" ? (
                <>
                  <p>[09:00] I'll begin a systematic penetration test...</p>
                  <p>[09:01] Target online.</p>
                  <p>[09:02] Apache 2.4.65 on port 80 detected.</p>
                  <p>[09:03] Found login page.</p>
                  <p>[09:04] Testing credentials...</p>
                  <p>[09:05] IDOR vulnerability discovered.</p>
                </>
              ) : (
                <p>Verification loops running...</p>
              )}
            </div>
          </div>

          {/* Finding Log */}
          <div className="p-6 space-y-4">

            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Finding Log
            </div>

            <FindingCard type="Critical" color="red" />
            <FindingCard type="High" color="orange" />
            <FindingCard type="Medium" color="yellow" />
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center px-6 py-3 text-xs border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400">

          <div className="flex flex-wrap gap-4">
            <span>Sub-Agents: 0</span>
            <span>Parallel Executions: 2</span>
            <span>Operations: 1</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <span className="text-red-500">Critical: 0</span>
            <span className="text-orange-500">High: 0</span>
            <span className="text-yellow-500">Medium: 0</span>
            <span className="text-green-500">Low: 0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FindingCard({ type, color }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <span className={`bg-${color}-500 text-white px-2 py-1 rounded-full text-xs`}>
        {type}
      </span>
      <h4 className="font-semibold mt-2 text-sm">
        SQL Injection in Authentication Endpoint
      </h4>
      <p className="text-xs text-gray-500 mt-1">
        Time-based blind SQL injection confirmed.
      </p>
    </div>
  );
}