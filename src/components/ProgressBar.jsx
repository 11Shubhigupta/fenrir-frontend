export default function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-3 w-full max-w-[200px]">
      <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
        <div
          className="bg-[#0CC8A8] h-2 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
        {value}%
      </span>
    </div>
  );
}