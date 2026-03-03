export default function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-3 w-40">
      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
        <div
          className="bg-[#0CC8A8] h-2 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-400">
        {value}%
      </span>
    </div>
  );
}