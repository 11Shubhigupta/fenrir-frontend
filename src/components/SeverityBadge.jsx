export default function SeverityBadge({ type, value }) {
  const styles = {
    critical: "bg-red-500",
    high: "bg-orange-500",
    medium: "bg-yellow-400 text-black",
    low: "bg-green-500",
  };

  return (
    <span
      className={`${styles[type]} text-white text-xs px-2 py-1 rounded`}
    >
      {value}
    </span>
  );
}