export const scans = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: "Web App Servers",
  type: "Greybox",
  status: i % 3 === 0 ? "Scheduled" : "Completed",
  progress: 100,
  lastScan: "4d ago",
}));

scans.push(
  {
    id: 100,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    lastScan: "3d ago",
  },
  {
    id: 101,
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    lastScan: "3d ago",
  }
);