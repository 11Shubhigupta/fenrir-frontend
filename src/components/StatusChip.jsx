export default function StatusChip({ status }) {
  const styles = {
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
    Scheduled:
      "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    Failed:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}