import { HelpCircle } from "lucide-react";

export default function Support() {

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold flex items-center gap-2">
        <HelpCircle size={20} />
        Support
      </h2>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">

        <p className="text-sm text-gray-500">
          Need help? Reach out to our support team.
        </p>

        <div>
          <label className="text-sm text-gray-500">
            Message
          </label>

          <textarea
            rows="4"
            placeholder="Write your query here..."
            className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm">
          Submit Ticket
        </button>

      </div>

    </div>
  );
}