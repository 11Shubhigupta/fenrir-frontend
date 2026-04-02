export default function Settings() {

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold">
        Settings
      </h2>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">

        <div>
          <label className="text-sm text-gray-500">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm">
          Save Changes
        </button>

      </div>
    </div>
  );
}