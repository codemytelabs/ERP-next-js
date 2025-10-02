export default function LeavePage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Leave Management</h1>
            <p className="text-slate-600 text-lg">Review and manage employee leave requests and balances.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Add Leave Entry
          </button>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Pending Leave Requests</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-5 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <div className="flex-1">
              <p className="font-semibold text-slate-900">John Doe - Annual Leave</p>
              <p className="text-sm text-slate-500">Date: 2024-02-01 to 2024-02-05 | Days: 5 | Reason: Family vacation</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 text-sm font-medium rounded-xl">Pending</span>
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 font-semibold text-sm">
                Approve
              </button>
              <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 font-semibold text-sm">
                Reject
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <div className="flex-1">
              <p className="font-semibold text-slate-900">Jane Smith - Sick Leave</p>
              <p className="text-sm text-slate-500">Date: 2024-01-28 to 2024-01-30 | Days: 3 | Reason: Medical appointment</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 text-sm font-medium rounded-xl">Pending</span>
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 font-semibold text-sm">
                Approve
              </button>
              <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 font-semibold text-sm">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Recent Leave History</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-5 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <div className="flex-1">
              <p className="font-semibold text-slate-900">Mike Johnson - Personal Leave</p>
              <p className="text-sm text-slate-500">Date: 2024-01-15 to 2024-01-17 | Days: 3 | Reason: Personal matters</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 text-sm font-medium rounded-xl">Approved</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
