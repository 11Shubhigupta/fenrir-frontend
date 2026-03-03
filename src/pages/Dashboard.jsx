import { scans } from "../data/mockData";
import { useNavigate } from "react-router-dom";
import StatusChip from "../components/StatusChip";
import SeverityBadge from "../components/SeverityBadge";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import { Search, Filter, Columns3, Plus } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = scans.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* ===== HEADER ===== */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Scan / Private Assets /{" "}
          <span className="text-teal-500 font-medium">New Scan</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg">
            Export Report
          </button>
          <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg">
            Stop Scan
          </button>
        </div>
      </div>

      {/* ===== SEVERITY STATS ===== */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-wrap gap-6">
            <span><strong>Org:</strong> Project X</span>
            <span><strong>Owner:</strong> Nammagiri</span>
            <span><strong>Total Scans:</strong> 100</span>
            <span><strong>Scheduled:</strong> 1000</span>
            <span><strong>Rescans:</strong> 100</span>
            <span><strong>Failed Scans:</strong> 100</span>
          </div>
          <span className="text-green-500">10 mins ago</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Critical Severity", value: 86, color: "text-red-500" },
            { label: "High Severity", value: 16, color: "text-orange-500" },
            { label: "Medium Severity", value: 26, color: "text-yellow-500" },
            { label: "Low Severity", value: 16, color: "text-green-500" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
              <h2 className={`text-2xl font-semibold ${item.color}`}>
                {item.value}
              </h2>
              <p className="text-xs text-red-500 mt-1">
                +0.9% increase than yesterday
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SEARCH ===== */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 w-full lg:w-1/2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search scans..."
            className="bg-transparent outline-none w-full text-sm"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm dark:border-gray-700">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm dark:border-gray-700">
            <Columns3 size={16} /> Column
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg text-sm">
            <Plus size={16} /> New scan
          </button>
        </div>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden lg:block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            <tr>
              <th className="p-4 text-left">Scan Name</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Progress</th>
              <th className="p-4 text-left">Vulnerability</th>
              <th className="p-4 text-left">Last Scan</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scans`)}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
              >
                <td className="p-4">{scan.name}</td>
                <td className="p-4">{scan.type}</td>
                <td className="p-4"><StatusChip status={scan.status} /></td>
                <td className="p-4"><ProgressBar value={scan.progress} /></td>
                <td className="p-4 flex gap-2">
                  <SeverityBadge type="critical" value={5} />
                  <SeverityBadge type="high" value={12} />
                  <SeverityBadge type="medium" value={23} />
                  <SeverityBadge type="low" value={18} />
                </td>
                <td className="p-4 text-gray-500 dark:text-gray-400">
                  {scan.lastScan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARD LIST ================= */}
      <div className="lg:hidden space-y-4">
        {filtered.map((scan) => (
          <div
            key={scan.id}
            onClick={() => navigate(`/scans`)}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 space-y-3 cursor-pointer"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{scan.name}</h3>
              <StatusChip status={scan.status} />
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Type: {scan.type}
            </p>

            <ProgressBar value={scan.progress} />

            <div className="flex flex-wrap gap-2">
              <SeverityBadge type="critical" value={5} />
              <SeverityBadge type="high" value={12} />
              <SeverityBadge type="medium" value={23} />
              <SeverityBadge type="low" value={18} />
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Last Scan: {scan.lastScan}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}